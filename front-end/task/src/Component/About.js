import React from 'react'
import {NavLink} from 'react-router-dom'
function About() {
  return (
    <div>
      
     
      <div id="__next">
               
               <main class="content">
                       {/* <div class="detail-block detail-block_margin">
                               <div class="wrapper">
                                       <div class="detail-block__content" >
                                               <h1>About</h1>
                                               <ul class="bread-crumbs">
                                                       <li class="bread-crumbs__item"><NavLink class="bread-crumbs__link"
                                                                       to={"/"}>Home</NavLink></li>
                                                       <li class="bread-crumbs__item">About</li>
                                               </ul>
                                       </div>
                               </div>
                       </div> */}
                       <div class="wrapper">
                               <div class="detail-block__items">
                                       <div class="detail-block__item">
                                               <div class="detail-block__item-icon"><img
                                                               src="../assets/img/main-text-decor.svg" class="js-img"
                                                               alt="" /><i class="icon-shipping"></i></div>
                                               <div class="detail-block__item-info">
                                                       <h6>Free Shipping</h6>World wide
                                               </div>
                                       </div>
                                       <div class="detail-block__item">
                                               <div class="detail-block__item-icon"><img
                                                               src="../assets/img/main-text-decor.svg" class="js-img"
                                                               alt="" /><i class="icon-helpline"></i></div>
                                               <div class="detail-block__item-info">
                                                       <h6>Helpline</h6>+1 345 99 71 345
                                               </div>
                                       </div>
                                       <div class="detail-block__item">
                                               <div class="detail-block__item-icon"><img
                                                               src="../assets/img/main-text-decor.svg" class="js-img"
                                                               alt="" /><i class="icon-24"></i></div>
                                               <div class="detail-block__item-info">
                                                       <h6>Customer Support</h6>Finish!
                                               </div>
                                       </div>
                               </div>
                       </div>
                       
                       <div class="discount discount-about js-img" >
                               <div class="wrapper" style={{backgroundImage:`url(/assets/img/product-img2.jpg)` ,backgroundRepeat:"no-repeat" }}>
                                       <div class="discount-info"><span class="saint-text">Success story</span>
                                               <h2>BeShop develops its own brands</h2>
                                               <p>The BeShope network is being developed and improved, taking into
                                                       account all consumer.</p>
                                               <p class="discount-info__sm">Forming the range of stores, we, above all,
                                                       strive not only to meet the format of &quot;home shop&quot;,
                                                       offering each customer the most basic household goods, but also
                                                       to create a unique space of beauty and care. BeShope stores
                                                       offer their customers the widest and highest quality selection
                                                       of products from world-renowned manufacturers.</p><a class="btn"
                                                       href="shop">Shop now</a>
                                       </div>
                               </div>
                       </div>
                       <div class="advantages">
                               <div class="wrapper">
                                       <div class="advantages-items">
                                               <div class="advantages-item">
                                                       <div class="advantages-item__icon"><i class="icon-natural"></i>
                                                       </div>
                                                       <h4>natural</h4>
                                                       <p>Non aliqua reprehenderit reprehenderit culpa laboris nulla
                                                               minim anim
                                                               velit adipisicing ea aliqua alluptate sit do do.</p>
                                               </div>
                                               <div class="advantages-item">
                                                       <div class="advantages-item__icon"><i class="icon-quality"></i>
                                                       </div>
                                                       <h4>Quality</h4>
                                                       <p>Non aliqua reprehenderit reprehenderit culpa laboris nulla
                                                               minim anim
                                                               velit adipisicing ea aliqua alluptate sit do do.</p>
                                               </div>
                                               <div class="advantages-item">
                                                       <div class="advantages-item__icon"><i class="icon-organic"></i>
                                                       </div>
                                                       <h4>natural</h4>
                                                       <p>Non aliqua reprehenderit reprehenderit culpa laboris nulla
                                                               minim anim
                                                               velit adipisicing ea aliqua alluptate sit do do.</p>
                                               </div>
                                       </div>
                               </div>
                       </div>
                       <div class="subscribe">
                               <div class="wrapper">
                                       <div class="subscribe-form">
                                               <div class="subscribe-form__img"><img src="../assets/img/subscribe-img.png"
                                                               class="js-img" alt="" /></div>
                                               <form>
                                                       <h3>Stay in touch</h3>
                                                       <p>Nourish your skin with toxin-free cosmetic roducts.</p>
                                                       <div class="box-field__row">
                                                               <div class="box-field"><input type="email"
                                                                               class="form-control"
                                                                               placeholder="Enter your email" /></div>
                                                               <button type="submit" class="btn">subscribe</button>
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

export default About
