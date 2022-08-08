const express=require('express');
const app =express();
const mysql=require('mysql');
const cors=require("cors");
app.use(express.json());
app.use(cors());
const db=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'agentsoncloud',
});
app.post('/signup',(req,res)=>{
   const name=req.body.name
   const email=req.body.email
   const password=req.body.password
    db.query("INSERT INTO users (name,email,password) VALUES(?,?,?)",[name,email,password],(err,result)=>{
        console.log(err);
    })
})

app.post('/login',(req,res)=>{
    
   const email=req.body.email
   const password=req.body.password
    db.query("SELECT email,password FROM users WHERE email=? And password=? ",[email,password],(err,result)=>{
        if(err){
         res.send({err:err})  
        
        }

         if(result.length>0){
            res.send(result);
            
         } else{
            res.send({message:"wrong user name/password"})
         }  
        
        
    }) 
})
app.listen(3001,()=>{
    console.log('running ');
});