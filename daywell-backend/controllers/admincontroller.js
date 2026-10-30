import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import Admin from '../models/adminmodel.js'

export const adminlogin = async (req, res) => {
  try {
    const { email, password } = req.body ?? {};


    if (
      typeof email !== 'string' ||
      typeof password !== 'string' ||
      !email.trim() ||
      !password
    ) {
      return res.status(400).json({ message: 'Email and password are required' })
    }

    const admin = await Admin.findOne({
      email: email.trim().toLowerCase(),
    }).select('+password')

    console.log('recvd eml pss : ', email, " , ", password);

    console.log('find user : ', admin)

    if (!admin) {
      return res.status(401).json({ message: 'Invalid email or password' })
    }

    console.log('admin found..');

    const isPasswordCorrect = await bcrypt.compare(password, admin.password);

    console.log('ispassword : ', isPasswordCorrect);
    
    if (!isPasswordCorrect) {
      return res.status(401).json({ message: 'Invalid email or password' })
    }


    if (admin.role !== 'admin') {
      return res.status(403).json({ message: 'Administrator access denied' })
    }

    if (!process.env.JWT_SECRET) {
      throw new Error('JWT_SECRET is not configured')
    }

    const token = jwt.sign(
      {
        sub: admin._id.toString(),
        role: admin.role,
      },
      process.env.JWT_SECRET,
      { expiresIn: '1h' }
    )

    return res.status(200).json({
      message: 'Admin login successful',
      token,
      user: {
        id: admin._id,
        name: admin.name,
        email: admin.email,
        role: admin.role,
      },
    })
  } catch (error) {
    console.error('Admin login error:', error)
    return res.status(500).json({
      message: 'An internal server error occurred',
    })
  }
}
