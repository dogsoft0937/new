const express=require('express');
const app=express();

app.get('/test',(req,res)=>{
    res.json("hello");
    console.log("test");
})
app.listen(5000,()=>{
    console.log("server start");
})