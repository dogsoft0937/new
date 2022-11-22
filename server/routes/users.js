const express=require('express');
const router=express.Router();
const mysql=require('mysql');
const dbconfig=require('../config/database');
const connection=mysql.createConnection(dbconfig);
router.get('/auth',(req,res)=>{
    connection.query('select * from Users',(err,rows,fields)=>{
        if(err) throw error;
        res.status(200).json(rows);
    })
})
router.post('/register',(req,res)=>{
    res.send("register");
})
router.post('/login',(req,res)=>{

})
router.post('/change-password',(req,res)=>{

})
router.post('/delete-account',(req,res)=>{

})

module.exports=router;