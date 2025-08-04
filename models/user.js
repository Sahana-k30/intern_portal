const mongoose= require("mongoose");

const userSchema= new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    code:{
        type:Number,
        required:true,
    },
    donation:{
        type:Number,
        required:true,
    },
})

const user= mongoose.model("user", userSchema);
module.exports= user;