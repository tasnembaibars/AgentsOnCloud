import React, { useState,useEffect } from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
import swal from 'sweetalert'
function Product() {
    const[productName,setProductName]=useState('')
    const[productDesc,setProductDesc]=useState('')
    const[productImg,setProductImg]=useState('')
    const[productPrice,setProductPrice]=useState('')
    const id =localStorage.getItem('user');
    const[user_id,setUserId]=useState(id)
    const navigate=useNavigate()
  const add=(e)=>{
    e.preventDefault()
    axios.post("http://localhost:3001/add",{product_name:productName,product_description:productDesc,product_price:productPrice,product_image:productImg,user_id:user_id})
    .then((response)=>{
    console.log(response)
    })
    swal({
      title: "Good job!",
      text: " Item added successfully!",
      icon: "success",
      button: "ok!",
    })
    .then(()=> {
      navigate('/all');
  });
  }  

  return (
    <div>
   

     <main class="content">
           
            <div class="login">
                <div class="wrapper">
                    <div class="login-form js-img" style={{backgroundImage:`url("%27/assets/img/404-6")`}}>
                        <form encType='multipart/form-data' >
                            <h3>Add a product you have :</h3>
                         
                           
                            <div class="box-field"><input type="text" class="form-control"
                                    placeholder="Enter your product name " name='product_name' onChange={(e)=>{setProductName(e.target.value)}}/></div>
                            <div class="box-field"><input type="text" class="form-control"
                                    placeholder="Enter your product description" name='product_description' onChange={(e)=>{setProductDesc(e.target.value)}}/></div>
                                      <div class="box-field"><input type="number" class="form-control"
                                    placeholder="Enter your product price "  name='product_price' onChange={(e)=>{setProductPrice(e.target.value)}}/></div>
                                      <div class="box-field"><input  class="form-control"
                                     type='file' name='product_image' onChange={(e)=>{setProductImg(e.target.value)}}/></div>
                                    
                                  <button class="btn" type="submit"  onClick={add}>Add
                                </button>

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

export default Product
