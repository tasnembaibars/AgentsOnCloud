import React,{useEffect, useState} from 'react'
import axios from 'axios'
function LogIn() {
  axios.defaults.withCredentials=true
  
  const[email,setEmail]=useState('')
  const[password,setPass]=useState('')


  const[loggedUser,setLoggedUser]=useState('')
  
  const login=(e)=>{
    e.preventDefault();
    axios.post("http://localhost:3001/login",{email:email,password:password})
    .then((response)=>{
        if(response.data.message){
            setLoggedUser(response.data.message); 
        }else{
            setLoggedUser(response.data[0].email);
       

        }
     
    })
  }
  useEffect(()=>{
    axios.get('http://localhost:3001/login')
    .then((response)=>{
      if(response.data.loggedIn == true){
      
      setLoggedUser(localStorage.setItem('user',response.data.user[0].id))
    }})
  },[])

  
  return (
    <div>
      <form >
        <label>Email :</label>
        <input type='email' onChange={(e)=>{setEmail(e.target.value)}}/>
        <label>Password :</label>
        <input type='password' onChange={(e)=>{setPass(e.target.value)}}/>
       <button  onClick={login}>Login</button>
      </form>
      <h3>{loggedUser}</h3>
    </div>
  )
}

export default LogIn

