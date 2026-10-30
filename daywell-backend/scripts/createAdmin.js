import 'dotenv/config'
import bcrypt from 'bcrypt'
import mongoose from 'mongoose'
import Admin from '../models/adminmodel.js'

try {
  const { MONGO_URI, ADMIN_NAME, ADMIN_EMAIL, ADMIN_PASSWORD } = process.env

  if (!MONGO_URI || !ADMIN_NAME?.trim() || !ADMIN_EMAIL?.trim() || !ADMIN_PASSWORD) {
    throw new Error('Set MONGO_URI, ADMIN_NAME, ADMIN_EMAIL, and ADMIN_PASSWORD in the backend environment.')
  }

  if (ADMIN_PASSWORD.length < 8) {
    throw new Error('ADMIN_PASSWORD must be at least 8 characters long.')
  }

  await mongoose.connect(MONGO_URI)

  const email = ADMIN_EMAIL.trim().toLowerCase()
  const existingAdmin = await Admin.findOne({ email })

  if (existingAdmin) {
    throw new Error('An admin account with this email already exists.')
  }

  const password = await bcrypt.hash(ADMIN_PASSWORD, 10)

  await Admin.create({
    name: ADMIN_NAME.trim(),
    email,
    password,
  })

  console.log('Admin account created successfully.')
} catch (error) {
  console.error('Admin account creation failed:', error.message)
  process.exitCode = 1
} finally {
  if (mongoose.connection.readyState !== 0) {
    await mongoose.disconnect()
  }
}
