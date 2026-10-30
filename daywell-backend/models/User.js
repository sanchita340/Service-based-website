import mongoose from 'mongoose'

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      minlength: 6,
    },
    role: {
      type: String,
      enum: ['user', 'admin'],
      default: 'user',
    },
    otpverified:{
      type:Boolean,
      default:false,
    },
    otphased:{
      type:String,
    },
    otpexpiredat:{
      type:Date,
    },
    otplastsentat:{
      type:Date,
    },
    otpattempts:{
      type:Number,
      default:0,
    }
  },
   
  
  {
    timestamps: true,
  },
)

const User = mongoose.model('User', userSchema)

export default User
