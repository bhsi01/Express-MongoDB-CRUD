//set express
const express = require("express");
const app=express();
const port=8080;

app.listen(port,()=>{
    console.log(`listening on ${port}`);
})

//set ejs
app.set("view engine","ejs");
const path=require("path");
app.set("views",path.join(__dirname,"views"));

app.use(express.static(path.join(__dirname,"public"))); //set public folder

//method override
const methodOverride = require("method-override");
app.use(methodOverride("_method"));

app.use(express.urlencoded({extended:true}));   //to parse data

//require mongoose
const mongoose=require("mongoose");
async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/chat')
}
main().catch(err=>console.log(err));

const Chat = require("./models/chats.js");  //require chat model

//root path
app.get('/',(req,res)=>{
    res.render("root.ejs");
})

//chats route
app.get('/chats',async (req,res)=>{
    let chats=await Chat.find({});
    res.render("chats.ejs",{chats});
})

//create new chat
app.get('/chats/new',(req,res)=>{
    res.render("new.ejs");
})
app.post('/chats/new',(req,res)=>{
    let {from,to,message}=req.body;
    let data=new Chat({from:from,to:to,message:message,data:new Date()});
    data.save(data).then();
    res.redirect('/chats')
})

//update message
app.get('/chats/:id/update',async (req,res)=>{
    let {id}=req.params;
    let data=await Chat.findById(id);
    res.render("update.ejs",{data});
})
app.patch('/chats/:id/update',async (req,res)=>{
    let {id}=req.params;
    let {message}=req.body;
    await Chat.findByIdAndUpdate(id,{message:message});
    res.redirect('/chats');
})

//delete message
app.delete('/chats/:id/delete',async (req,res)=>{
    let {id}=req.params;
    await Chat.findByIdAndDelete(id);
    res.redirect('/chats');
})