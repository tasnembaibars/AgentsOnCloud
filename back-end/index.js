const express=require('express');
const app =express();
const mysql=require('mysql');
const bodyParser=require('body-parser')
const cors=require("cors");
const bcrypt=require('bcrypt')
const saltRounds=10
const session=require('express-session');
const cookieParser=require('cookie-parser')



//upload images
// const multer = require('multer')
// const path = require('path')
// const storage = multer.diskStorage({
//     destination:(req,file,cb)=>{
//        cb(null,'images') 
//     },
//     filename:(req,file,cb)=>{
//       console.log(file)  
//       cd(null,Date.now()+ path.extname(file.originalname))
//     }
// });
// const upload=multer({storage:storage})

app.use(express.json());
app.use(express.static(__dirname));
app.use(cors({
    origin:['http://localhost:3000'],
    methods:["GET","POST","PUT","DELETE"],
    credentials:true
}));

app.use(cookieParser())
app.use(session({
    key:'userId',
    secret:'logged',
    resave:false,
    saveUninitialized:false,
    cookie:{
        expires:60*60*24,
    }

}))
app.use(bodyParser.urlencoded({extended:true}))

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

   bcrypt.hash(password,saltRounds,(err,hash)=>{
    if(err){
        console.log(err)
    }
     db.query("INSERT INTO users (name,email,password) VALUES(?,?,?)",[name,email,hash],(err,result)=>{
        
     
        console.log(err);
    })
   
   })
   
})
app.get('/login',(req,res)=>{
    if(req.session.user){
        res.send({loggedIn:true,user:req.session.user})
    }else{
        res.send({loggedIn:false})
    }
})


app.post('/login',(req,res)=>{
    // const id=req.params.id
   const email=req.body.email
   const password=req.body.password
    db.query("SELECT id,email,password FROM users WHERE email=? ",email,(err,result)=>{
        if(err){
            
        res.send({err:err})  
        
        }

         if(result.length>0){
           bcrypt.compare(password,result[0].password,(err,response)=>{
            if(response){
                req.session.user=result;
                console.log(req.session.user)
              res.send(result)  
            }else{
            res.send({message:"wrong user name/password"})

            }
           })
            
            
         } else{
            res.send({message:"user not found"})
         }  
        
        
    }) 
})

// adding product

app.post('/add',(req,res)=>{
    const product_name=req.body.product_name
    const product_description=req.body.product_description
    const product_image=req.body.product_image
    const product_price=req.body.product_price
    const user_id=req.body.user_id

    const InsertQuery="INSERT INTO products (product_name,product_description,product_image,product_price,user_id) VALUES (?,?,?,?,?)"
    db.query(InsertQuery,[product_name,product_description,product_image,product_price,user_id],(err,result)=>{
      console.log(result);
    })
})


// select products 
app.get('/api/get',(req,res)=>{
const SelectQuery="SELECT * FROM products";
    db.query(SelectQuery,(err,result)=>{
      res.send(result);
    })
})
app.get('/get/:id',(req,res)=>{
    const id=req.params.id
    const SelectQuery="SELECT * FROM products WHERE id=?";
        db.query(SelectQuery,id,(err,result)=>{
          res.send(result);
        })
    })

app.delete('/api/delete/:id',(req,res)=>{
    
    const id=req.params.id
    const deleteQuery="DELETE FROM products WHERE id=?";
    db.query(deleteQuery,id,(err,result)=>{
        if(err){
        console.log(err)}
    })
  
})
app.put('/api/edit/:id',(req,res)=>{
    
    const id=req.params.id
    const product_name=req.body.product_name
    const product_description=req.body.product_description
    const product_price=req.body.product_price
    const product_image=req.body.product_image
    const updateQuery="UPDATE products SET product_name=?,product_description=?,product_price=?,product_image=? WHERE id=? ";
    db.query(updateQuery,[product_name,product_description,product_price,product_image,id],(err,result)=>{
        if(err){
        console.log(err)}
    })
  
})

// add comments
app.post('/comment',(req,res)=>{   
     const comment=req.body.comment
    const product_id=req.body.product_id
    const user_id=req.body.user_id

    const InsertQuery="INSERT INTO  comment (comment,product_id,user_id) VALUES (?,?,?)"
    db.query(InsertQuery,[comment,product_id,user_id],(err,result)=>{
      console.log(result);
    })
})
// select comments
app.get('/api/comment',(req,res)=>{
    const SelectQuery="SELECT * FROM comment";
        db.query(SelectQuery,(err,result)=>{
          res.send(result);
        })
    })


app.listen(3001,()=>{
    console.log('running');
});