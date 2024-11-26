import mongoose from 'mongoose'
import { stripLow } from 'validator'

const contactSchema = new mongoose.Schema({
    firstName:{
        type:String,
        required:true,
    },
    lastName:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
})

const Contact = new mongoose.model('Contact',contactSchema)

export default Contact