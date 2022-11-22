const express=require('express');
const app=express();

// connection.connect();

// connection.end();

app.use('/api/users',require('./routes/users'));

app.get('/test',(req,res)=>{
    res.json("hello");
    console.log("test");
})
app.listen(5000,()=>{
    console.log("server start");
})