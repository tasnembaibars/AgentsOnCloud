import axios from 'axios'
import React,{useEffect, useState} from 'react'
import {NavLink} from 'react-router-dom'
import {  useParams } from 'react-router-dom'

function All() {
    const { id } = useParams();
    const user_id =localStorage.getItem('user');

    const[makeup,setMakeUp]=useState([])
useEffect(()=>{
deleteHandeler()
},[])
const deleteHandeler=()=>{
  axios.get("http://localhost:3001/api/get")
  .then((response)=>{
      setMakeUp(response.data)
  })
}

const deleteP=(id)=>{
 
  
   axios.delete(`http://localhost:3001/api/delete/${id}`) 
   deleteHandeler()
}


  return (
    <div>
     
 
      
<div id="__next">
 
 <main class="content">
   
     <div>
         <div class="shop">
             <div class="wrapper">
                 <div class="shop-content">
                     <div class="shop-aside">
                         <div class="box-field box-field__search"><input type="search" class="form-control"
                                 placeholder="Search" /><i class="icon-search"></i></div>
                         <div class="shop-aside__item"><span class="shop-aside__item-title">Categories</span>
                             <ul>
                                 <li><a href="#">Make up <span>(37)</span></a></li>
                                 <li><a href="#">SPA <span>(162)</span></a></li>
                                 <li><a href="#">Perfume <span>(153)</span></a></li>
                                 <li><a href="#">Nails <span>(86)</span></a></li>
                                 <li><a href="#">Skin care <span>(48)</span></a></li>
                                 <li><a href="#">Hair care <span>(54)</span></a></li>
                             </ul>
                         </div>
                         <div class="shop-aside__item"><span class="shop-aside__item-title">Price</span>
                             <div class="range-slider">
                                 <div class="rc-slider">
                                     <div class="rc-slider-rail"></div>
                                     <div class="rc-slider-track rc-slider-track-1"
                                         style={{left:"0%",right:"auto",width:"100%"}}></div>
                                     <div class="rc-slider-step"></div>
                                     <div tabindex="0" class="rc-slider-handle rc-slider-handle-1"
                                         style={{left:"0%",right:"auto",transform:"translateX(-50%)"}} role="slider"
                                         aria-valuemin="0" aria-valuemax="20" aria-valuenow="0"
                                         aria-disabled="false"></div>
                                     <div tabindex="0" class="rc-slider-handle rc-slider-handle-2"
                                         style={{left:"100%",right:"auto",transform:"translateX(-50%)"}} role="slider"
                                         aria-valuemin="0" aria-valuemax="20" aria-valuenow="20"
                                         aria-disabled="false"></div>
                                     <div class="rc-slider-mark"></div>
                                 </div>
                             </div>
                         </div>
                         <div class="shop-aside__item"><span class="shop-aside__item-title">You have
                                 viewed</span><a class="shop-aside__item-product" href="product/%5bid%5d">
                                 <div class="shop-aside__item-product-img"><img src="../assets/img/product-img2.jpg"
                                         class="js-img" alt="" /></div>
                                 <div class="shop-aside__item-product-info"><span
                                         class="shop-aside__item-product-title">Foundation Beshop</span><span
                                         class="shop-aside__item-product-price">$
                                        200.95
                                     </span>
                                     <ul class="star-rating"></ul>
                                 </div>
                             </a><a class="shop-aside__item-product" href="product/%5bid%5d-2">
                                 <div class="shop-aside__item-product-img"><img src="../assets/img/product-img1.jpg"
                                         class="js-img" alt="" /></div>
                                 <div class="shop-aside__item-product-info"><span
                                         class="shop-aside__item-product-title">Lotion For Cleansing</span><span
                                         class="shop-aside__item-product-price">$
                                        100.90
                                     </span>
                                     <ul class="star-rating"></ul>
                                 </div>
                             </a><a class="shop-aside__item-product" href="product/%5bid%5d-3">
                                 <div class="shop-aside__item-product-img"><img src="../assets/img/product-img3.jpg"
                                         class="js-img" alt="" /></div>
                                 <div class="shop-aside__item-product-info"><span
                                         class="shop-aside__item-product-title">Tony Mask</span><span
                                         class="shop-aside__item-product-price">$
                                        200.95
                                     </span>
                                     <ul class="star-rating"></ul>
                                 </div>
                             </a></div>
   
                     </div>
                     <div class="shop-main">
                         <div class="shop-main__filter">
                             <div class="shop-main__checkboxes"><label class="checkbox-box"><input
                                         type="checkbox" checked="" /><span
                                         class="checkmark"></span>SALE</label><label class="checkbox-box"><input
                                         type="checkbox" /><span class="checkmark"></span>NEW</label></div>
                             <div class="shop-main__select">
                                 <div >
                                      {makeup.map((val)=>{
                               return (
                                     <div  aria-haspopup="listbox">
                                
                                {user_id == val.user_id && 
                                  <>
                                         <div ><NavLink className="btn" to="/product" style={{backgroundColor:"#faf9ff",color:"#666"}}>Add items
                                              </NavLink>
                                         </div>
                                         </>
                                                    }
                                     
                                   
                                     </div>  )
                                      })}
                                 </div>
                             </div>
                         </div>
                         <div class="shop-main__items">
                         {makeup.map((val)=>{
                               return (
                                
                             <div class="products-item">
                   
                                 <div class="products-item__type"><span class="products-item__new"><button class="addList"><i
                                  class="icon-heart" style={{color:"white",fontSize:"15px"}}></i></button></span>
                                 </div>
                                 <div class="products-item__img"><img src="assets/img/product-img1.jpg"
                                         class="js-img" alt="" />
                                     <div class="products-item__hover"><NavLink to={`/item/${val.id}`}><i
                                                 class="icon-search"></i></NavLink>
                                                    {user_id == val.user_id && 
                                                   <>
                                         <div class="products-item__hover-options"><button class="addList"><NavLink to={`/edit/${val.id}`}><i class="fa-solid fa-pen"></i></NavLink></button>
                                                     <button class="addList "onClick={()=>{deleteP(val.id)}}>
                                                     <i class="fas fa-trash-alt"></i></button></div>
                                                      </>
                                                    }
                                     </div>
                                 </div>
                                 <div class="products-item__info"><a href="product/%5bid%5d-7"><span
                                             class="products-item__name">{val.product_name}</span></a>
                                             <a href="product/%5bid%5d-7"><span
                                             class="products-item__name">{val.product_description}</span></a>
                                             <span
                                         class="products-item__cost"><span></span> $
                                        {val.product_price}
                                     </span></div>
                                   
                             </div>
                             )
                            })}
                         
                      
                    
                         
                        
                          
                          
                         </div>
                     
                     </div>
                 </div>
             </div><img class="promo-video__decor js-img" src="assets/img/promo-video__decor.jpg" alt="" /><img
                 class="shop-decor js-img" src="assets/img/shop-decor.jpg" alt="" />
         </div>
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
</div>
  )
}

export default All
