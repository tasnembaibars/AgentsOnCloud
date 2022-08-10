import React,{useState} from 'react'
import axios from 'axios'
import swal from 'sweetalert'
import {useNavigate} from 'react-router-dom'
function SignUp() {
  const[userName,setUserName]=useState('')
  const[userEmail,setUserEmail]=useState('')
  const[userPass,setUserPass]=useState('')
  axios.defaults.withCredentials=true
  const navigate = useNavigate();
  const signup=(e)=>{
    e.preventDefault()
    axios.post("http://localhost:3001/signup",{name:userName,email:userEmail,password:userPass})
    .then((response)=>{
    
      console.log(response);
      
    })
   
      
      swal({
          title: "Good job!",
          text: " Signing Up done successfully!",
          icon: "success",
          button: "ok!",
        })
        .then(()=> {
          navigate('/login');
      });
  
 
   
  }
  return (
    <div>
    
     <main class="content">
     <div class="login registration">
                <div class="wrapper">
                    <div class="login-form js-img" style={{backgroundImage:`url(%27/assets/img/404-7)`}}>
                        <form>
                            <h3>register now</h3>
                            <ul class="login-form__social">
                                <li><a href="#"><i class="icon-facebook"></i></a></li>
                                <li><a href="#"><i class="icon-twitter"></i></a></li>
                                <li><a href="#"><i class="icon-insta"></i></a></li>
                                <li><a href="#"><i class="icon-google"></i></a></li>
                            </ul>
                            <div class="box-field__row">
                                <div class="box-field"><input type="text" class="form-control"
                                        placeholder="Enter your name" name='name'  onChange={(e)=>{setUserName(e.target.value)}}/></div>
                         <div class="box-field"><input type="email" class="form-control"
                                        placeholder="Enter your email" name='email' onChange={(e)=>{setUserEmail(e.target.value)}}/></div>
                            </div>
                            
                            <div class="box-field__row"><span>password</span>
                                <div class="box-field"><input type="password" class="form-control"
                                        placeholder="Enter your password" name='password' onChange={(e)=>{setUserPass(e.target.value)}}/></div>
                                <div class="box-field"><input type="password" class="form-control"
                                        placeholder="Confirm password" name='password' onChange={(e)=>{setUserPass(e.target.value)}}/></div>
                            </div><label class="checkbox-box checkbox-box__sm"><input type="checkbox" /><span
                                    class="checkmark"></span>Remember me</label><button class="btn"
                                type="submit" onClick={signup}>SignUp</button>
                            <div class="login-form__bottom"><span>Already have an account?
                                <a href='/login'>Log in</a>
                                </span></div>
                        </form>
                    </div>
                </div><img class="promo-video__decor js-img" src="assets/img/promo-video__decor.jpg" alt="" />
            </div>
            <div class="subscribe">
                <div class="wrapper">
                    <div class="subscribe-form">
                        <div class="subscribe-form__img"><img src="assets/img/subscribe-img.png" class="js-img"
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

export default SignUp

