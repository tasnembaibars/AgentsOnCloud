import React,{useState} from 'react'
import axios from 'axios'
function SignUp() {
  const[userName,setUserName]=useState('')
  const[userEmail,setUserEmail]=useState('')
  const[userPass,setUserPass]=useState('')
  axios.defaults.withCredentials=true
  const signup=(e)=>{
    e.preventDefault()
    axios.post("http://localhost:3001/signup",{name:userName,email:userEmail,password:userPass})
    .then((response)=>{
      console.log(response);
    

    })
  }
  return (
    <div>
     <form >
      <label>name</label>
      <input type='text' name='name' onChange={(e)=>{setUserName(e.target.value)}}/><br/>
      <label>email</label>
      <input type='email' name='email' onChange={(e)=>{setUserEmail(e.target.value)}}/><br/>
      <label>password</label>
      <input type='password' name='password' onChange={(e)=>{setUserPass(e.target.value)}}/><br/>
      <button type='submit' onClick={signup}>Sign up</button>
     </form>
    </div>
  )
}

export default SignUp

