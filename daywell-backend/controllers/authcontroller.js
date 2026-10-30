
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import User from '../models/User.js'
import sendotp from '../utils/sendotp.js'
import crypto from 'crypto'


const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({
        message: 'Name, email and password are required',
      });
    }

    if (password.length < 6) {
      return res.status(400).json({
        message: 'Password must be at least 6 characters long',
      });
    }

    const normalizedEmail = email.trim().toLowerCase();

    const existingUser = await User.findOne({
      email: normalizedEmail,
    });

    if (existingUser) {
      return res.status(409).json({
        message: 'Email is already registered',
      });
    }


    const hashedPassword = await bcrypt.hash(password, 10);

  
    const otp = crypto.randomInt(100000, 1000000).toString();

  
    const hashedOTP = crypto
      .createHash('sha256')
      .update(otp)
      .digest('hex');

    
    const user = await User.create({
      name: name.trim(),
      email: normalizedEmail,
      password: hashedPassword,
      otpverified: false,
      otphased: hashedOTP,
      otpexpiredat: new Date(Date.now() + 5 * 60 * 1000),
      otplastsentat: new Date(),
      otpattempts: 0,
    });

    try {
    
      await sendotp(normalizedEmail, otp);
    } catch (emailError) {
      
      await User.findByIdAndDelete(user._id);

      console.error('OTP email error:', emailError);

      return res.status(500).json({
        message: 'Could not send verification email. Please try again.',
      });
    }

    return res.status(201).json({
      message: 'OTP sent to your email. Please verify your account.',
      email: normalizedEmail,
    });

  } catch (error) {
    console.error('Registration error:', error);

    if (error.code === 11000) {
      return res.status(409).json({
        message: 'Email is already registered',
      });
    }

    return res.status(500).json({
      message: 'Registration failed',
    });
  }
};

const resendotp = async (req, res) => {
  try {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({
        message: 'Email is required',
      });
    }

    const user = await User.findOne({
      email: email.trim().toLowerCase(),
    });

    if (!user) {
      return res.status(404).json({
        message: 'No account found for this email. Please sign up first.',
      });
    }

    if (user.otpverified) {
      return res.status(400).json({
        message: 'This email is already verified. You can log in.',
      });
    }

    const cooldownMs = 60 * 1000;
    const elapsedMs = user.otplastsentat
      ? Date.now() - user.otplastsentat.getTime()
      : cooldownMs;

    if (elapsedMs < cooldownMs) {
      const waitSeconds = Math.ceil((cooldownMs - elapsedMs) / 1000);
      return res.status(429).json({
        message: `Please wait ${waitSeconds} seconds before requesting another code.`,
      });
    }

    const otp = crypto.randomInt(100000, 1000000).toString();
    const hashedOTP = crypto
      .createHash('sha256')
      .update(otp)
      .digest('hex');

    await sendotp(user.email, otp);

    user.otphased = hashedOTP;
    user.otpexpiredat = new Date(Date.now() + 5 * 60 * 1000);
    user.otplastsentat = new Date();
    user.otpattempts = 0;
    await user.save();

    return res.status(200).json({
      message: 'A new verification code was sent. Check your inbox and spam folder.',
    });
  } catch (error) {
    console.error('OTP resend error:', error);
    return res.status(500).json({
      message: 'Could not resend the verification code. Please try again.',
    });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    
    if (!email || !password) {
      return res.status(400).json({
        message: 'Email and password are required',
      });
    }

    
    const user = await User.findOne({
      email: email.trim().toLowerCase(),
    });

    if (!user) {
      return res.status(401).json({
        message: 'Invalid email or password',
      });
    }

    
    const isPasswordCorrect = await bcrypt.compare(
      password,
      user.password
    );

    if (!isPasswordCorrect) {
      return res.status(401).json({
        message: 'Invalid email or password',
      });
    }

    if (!user.otpverified) {
      return res.status(403).json({
        message: 'Please verify your email before logging in.',
      });
    }

    
    const token = jwt.sign(
      {
        id: user._id,
        role: user.role,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: '1h',
      }
    );

    
    return res.status(200).json({
      message: 'Login successful',
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    });
  } catch (error) {
    console.error('Login error:', error);

    return res.status(500).json({
      message: 'Login failed',
    });
  }
};

const verifyotp = async (req, res) => {
  try {
    const { email, otp } = req.body;

    if (!email || !otp) {
      return res.status(400).json({
        message: 'Email and OTP are required',
      });
    }

    const user = await User.findOne({
      email: email.trim().toLowerCase(),
    });

    if (!user) {
      return res.status(404).json({
        message: 'User not found',
      });
    }

    if (user.otpverified) {
      return res.status(400).json({
        message: 'Email is already verified',
      });
    }

    if (
      !user.otpexpiredat ||
      user.otpexpiredat.getTime() < Date.now()
    ) {
      return res.status(400).json({
        message: 'OTP has expired. Please register again.',
      });
    }

    if (user.otpattempts >= 5) {
      return res.status(429).json({
        message: 'Too many attempts. Please register again.',
      });
    }

    const hashedOTP = crypto
      .createHash('sha256')
      .update(String(otp).trim())
      .digest('hex');

    if (hashedOTP !== user.otphased) {
      user.otpattempts += 1;
      await user.save();

      return res.status(400).json({
        message: 'Incorrect OTP',
      });
    }

    user.otpverified = true;
    user.otphased = undefined;
    user.otpexpiredat = undefined;
    user.otpattempts = 0;

    await user.save();

    return res.status(200).json({
      message: 'Email verified successfully. You can now log in.',
    });
  } catch (error) {
    console.error('OTP verification error:', error);

    return res.status(500).json({
      message: 'OTP verification failed',
    });
  }
};




export {
  register,
  resendotp,
  login,
  verifyotp,
}
