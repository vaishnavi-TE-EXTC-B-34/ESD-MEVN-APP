const mongoose=require('mongoose')
const userSchema=new mongoose.Schema(
    {
        
        name:{
            type:String,
            required:true,
        },
        email:{
            type:String,
            trim:true,
            required:true
        },
        password:{
            type:String,
            trim:true,
            required:true,
        },
    }    
)

const User=new mongoose.model('User',userSchema)

module.exports=User