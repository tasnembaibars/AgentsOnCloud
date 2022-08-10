import React,{useEffect, useState} from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

function LogIn() {
  axios.defaults.withCredentials=true
  
  const[email,setEmail]=useState('')
  const[password,setPass]=useState('')


  const[loggedUser,setLoggedUser]=useState('')
  const navigate = useNavigate();
  
  const login=(e)=>{
    e.preventDefault();
    axios.post("http://localhost:3001/login",{email:email,password:password})
    .then((response)=>{
        if(response.data.message){
            setLoggedUser(response.data.message); 
        }else{
            setLoggedUser(response.data[0].email);
          
            setLoggedUser(localStorage.setItem('user',response.data[0].id));
            navigate('/');
            window.location.reload(true);

        }
     
    })
  }
  useEffect(()=>{
    axios.get('http://localhost:3001/login')
    // .then((response)=>{
    //   if(response.data.loggedIn == true){
      
    //   // setLoggedUser(localStorage.setItem('user',response.data.user[0].id))
    // }})
  },[])


  return (
    <div>
  
      

      <main class="content">
           
            <div class="login">
                <div class="wrapper">
                    <div class="login-form js-img" style={{backgroundImage:`url("%27/assets/img/404-6")`}}>
                        <form>
                            <h3>log in with</h3>
                            <ul class="login-form__social">
                                <li><a href="#"><i class="icon-facebook"></i></a></li>
                                <li><a href="#"><i class="icon-twitter"></i></a></li>
                                <li><a href="#"><i class="icon-insta"></i></a></li>
                                <li><a href="#"><i class="icon-google"></i></a></li>
                            </ul>
                            <p>{loggedUser}</p>
                            <div class="box-field"><input type="email" class="form-control"
                                    placeholder="Enter your email " onChange={(e)=>{setEmail(e.target.value)}}/></div>
                            <div class="box-field"><input type="password" class="form-control"
                                    placeholder="Enter your password" onChange={(e)=>{setPass(e.target.value)}}/></div><label
                                class="checkbox-box checkbox-box__sm"><input type="checkbox" /><span
                                    class="checkmark"></span>Remember me</label><button class="btn" type="submit" onClick={login}>log
                                in</button>
                            <div class="login-form__bottom"><span>No account?
                                   <a href='/signup'>Register now</a>
                                </span><a href="#">Lost your password?</a></div>
                        </form>
                    </div>
                </div><img class="promo-video__decor js-img" src="../assets/img/promo-video__decor.jpg" alt="" />
            </div>
            <div class="subscribe">
                <div class="wrapper">
                    <div class="subscribe-form">
                        <div class="subscribe-form__img"><img src="../assets/img/subscribe-img.png" class="js-img"
                                alt="" /></div>
                        <form>
                            <h3>Stay in touch</h3>
                            <p>Nourish your skin with toxin-free cosmetic roducts.</p>
                            <div class="box-field__row">
                                <div class="box-field"><input type="email" class="form-control"
                                        placeholder="Enter your email" /></div><button type="submit"
                                    class="btn">subscribe</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            </main>
    </div>

  )
}

export default LogIn

