//require mongoose
const mongoose=require("mongoose");

//create chat schema
const chatSchema = new mongoose.Schema({
    from:{
        type:String,
        required:true,
    },
    to:{
        type:String,
        required:true,
    },
    message:{
        type:String,
        required:true,
    },
    date:{
        type:Date,
        required:true,
        default:Date.now,
    },
})

const Chat = mongoose.model("Chat",chatSchema)  //create chat model

console.log(Chat);

module.exports = Chat;  //export chat model