import express from "express"
import { adminlogin} from '../controllers/admincontroller.js'

const router = express.Router()

router.post('/login', adminlogin)

export default router