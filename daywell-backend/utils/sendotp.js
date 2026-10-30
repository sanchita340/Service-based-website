import nodemailer from 'nodemailer'
const transporter= nodemailer.createTransport({
    service:'gmail',
    auth:{
        user:process.env.EMAIL_USER,
        pass:process.env.EMAIL_PASS
    }
    })
    const sendotp = async (email, otp) => {
  await transporter.sendMail({
    from: process.env.EMAIL_USER,
    to: email,
    subject: 'Verify Your Daywell Account',
    text: `Your Daywell verification code is ${otp}. It expires in 5 minutes.`,
    html: `
      <div style="font-family: Arial, sans-serif; padding: 20px;">
        <h2>Welcome to Daywell!</h2>
        <p>Use the following code to verify your email address:</p>
        <h1 style="letter-spacing: 8px;">${otp}</h1>
        <p>This code expires in 5 minutes.</p>
        <p>If you didn't request this code, you can ignore this email.</p>
      </div>
    `,
  });
};
export default sendotp
