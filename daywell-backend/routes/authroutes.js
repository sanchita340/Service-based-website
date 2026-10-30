import express from 'express'
import { login, register, resendotp, verifyotp } from '../controllers/authcontroller.js'

const router = express.Router()

router.post('/login', login)
router.post('/register', register)
router.post('/resendotp', resendotp)
router.post('/verifyotp',verifyotp)

export default router