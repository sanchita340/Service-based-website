import mongoose from "mongoose";
const adminschema= new mongoose.Schema({
    name:{
        type:String,
        required: true,
        trim:true,
    },
    email:{
        type:String,
        required:true,
        lowercase:true,
        trim:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
        select:false,

    },
    role:{
        type:String,
        enum:['admin'],
        default:'admin'

    },
},
{ timestamps:true})
const Admin = mongoose.model('Admin', adminschema)

export default Admin