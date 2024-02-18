const express=require("express");
const app=express();
const PORT=3000;
app.get('/',(req,res)=>{
    res.status(200).send("Ok")
    console.log("Route Created")
})
app.post('/app',(req,res)=>{
    res.status(200).send({message:"this is post message"});
    console.log("Post")
})
app.listen(PORT);