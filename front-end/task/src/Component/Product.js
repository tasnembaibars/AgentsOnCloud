import React, { useState,useEffect } from 'react'
import axios from 'axios'

function Product() {
    const[productName,setProductName]=useState('')
    const[productDesc,setProductDesc]=useState('')
    const[productImg,setProductImg]=useState('')
    const id =localStorage.getItem('user');
    const[user_id,setUserId]=useState(id)

  const add=()=>{
    axios.post("http://localhost:3001/add",{product_name:productName,product_description:productDesc,product_image:productImg,user_id:user_id})
    .then(()=>{
        alert('successful insert')
    })
  }  

  return (
    <div>
      <form encType='multipart/form-data' method='post'>
      <label>product name</label>
      <input type='text' name='product_name' onChange={(e)=>{setProductName(e.target.value)}}/><br/>
      <label>product description</label>
      <input type='text' name='product_description' onChange={(e)=>{setProductDesc(e.target.value)}}/><br/>
      <label>product image</label>
      <input type='file' name='product_image' onChange={(e)=>{setProductImg(e.target.value)}}/><br/>
      <button type='submit' onClick={add}>add</button>
     </form>
    </div>
  )
}

export default Product
