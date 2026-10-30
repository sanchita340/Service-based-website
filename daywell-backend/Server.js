import 'dotenv/config'
import cors from 'cors'
import express from 'express'
import mongoose from 'mongoose'
import authRoutes from './routes/authroutes.js'
import adminRoutes from './routes/adminroutes.js'
import helmet from 'helmet'
import ratelimit from 'express-rate-limit'
import blogroutes from './routes/blogroutes.js'

const app = express()
const generalimiter= ratelimit({
  windowMs: 15*60*1000,
  max: 3,
  message:{
    "message":" to many request try after 15 minutes"
  },
  standardHeaders:"draft-8",
  legacyHeaders:false
})
app.use(helmet())
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/api/auth', generalimiter,authRoutes)
app.use('/api/admin', adminRoutes)
app.use("/api/blogs", blogroutes)
              
app.get('/', (req, res) => {
  res.send('daywell backend is running')
})

async function startServer() {
  try {
    if (!process.env.MONGO_URI) {
      throw new Error('MONGO_URI is not configured in the root .env file')
    }

    if (!process.env.JWT_SECRET) {
      throw new Error('JWT_SECRET is not configured in the root .env file')
    }

    await mongoose.connect(process.env.MONGO_URI);
    console.log('MongoDB connected successfully!');

    const port = Number(process.env.PORT) || 5000
    const server = app.listen(port, () => {
      console.log(`Server running on port ${port}`)
    })

    server.on('error', (error) => {
      console.error('HTTP server failed to start:', error.message)
      process.exitCode = 1
    });
  } catch (error) {
    console.error('MongoDB connection failed:', error.message);
    process.exit(1);
  }
}

startServer()