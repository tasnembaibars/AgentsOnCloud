import React from 'react'
import {NavLink} from 'react-router-dom'
function Home() {
  return (
   
     
<div>

     <div id="__next">
       
       <main className="content">
               <div className="main-block load-bg">
                       <div className="wrapper" >
                               <div className="main-block__content"><span className="saint-text">Professional</span>
                                       <h1 className="main-text">Beauty &amp; Care</h1>
                                       <p>Nourish your skin with toxin-free cosmetic products. With the offers
                                               that you can’t refuse.</p><NavLink className="btn" to="/all">Shop
                                               now</NavLink>
                               </div>
                       </div><img className="main-block__decor" src="../assets/img/main-block-decor.png" alt="" />
               </div>
               <section className="trending">
                       <div className="trending-content">
                               <div className="trending-top"><span className="saint-text">Cosmetics</span>
                                       <h2>Trending products</h2>
                                       <p>Nourish your skin with toxin-free cosmetic products. With the offers
                                               that you can’t refuse.</p>
                               </div>
                               <div className="tab-wrap trending-tabs">
                                       <ul className="nav-tab-list tabs">
                                               <li className="active">Make Up</li>
                                               <li className="">SPA</li>
                                               <li className="">Perfume</li>
                                               <li className="">Nails</li>
                                               <li className="">Skin care</li>
                                               <li className="">Hair care</li>
                                       </ul>
                                       
                               </div>
                       </div>
               </section>
              
               <div className="advantages">
                       <div className="wrapper">
                               <div className="advantages-items">
                                       <div className="advantages-item">
                                               <div className="advantages-item__icon"><i className="icon-natural"></i>
                                               </div>
                                               <h4>natural</h4>
                                               <p>Non aliqua reprehenderit reprehenderit culpa laboris nulla
                                                       minim anim
                                                       velit adipisicing ea aliqua alluptate sit do do.</p>
                                       </div>
                                       <div className="advantages-item">
                                               <div className="advantages-item__icon"><i className="icon-quality"></i>
                                               </div>
                                               <h4>Quality</h4>
                                               <p>Non aliqua reprehenderit reprehenderit culpa laboris nulla
                                                       minim anim
                                                       velit adipisicing ea aliqua alluptate sit do do.</p>
                                       </div>
                                       <div className="advantages-item">
                                               <div className="advantages-item__icon"><i className="icon-organic"></i>
                                               </div>
                                               <h4>natural</h4>
                                               <p>Non aliqua reprehenderit reprehenderit culpa laboris nulla
                                                       minim anim
                                                       velit adipisicing ea aliqua alluptate sit do do.</p>
                                       </div>
                               </div>
                       </div>
               </div>
       
               <div className="info-blocks">
                       <div className="info-blocks__item js-img"
                               style={{backgroundImage:`url(%27/assets/img/404-2)`}}>
                               <div className="wrapper">
                                       <div className="info-blocks__item-img"><img
                                                       src="../assets/img/info-item-img1.jpg" className="js-img"
                                                       alt="" /></div>
                                       <div className="info-blocks__item-text"><span className="saint-text">Check This
                                                       Out</span>
                                               <h2>new collection for delicate skin</h2><span
                                                       className="info-blocks__item-descr">Nourish your skin with
                                                       toxin-free cosmetic products. With the offers that you
                                                       can’t refuse.</span>
                                               <p>Non aliqua reprehenderit reprehenderit culpa laboris nulla
                                                       minim anim velit adipisicing ea aliqua alluptate sit do
                                                       do.Non aliqua reprehenderit reprehenderit culpa laboris
                                                       nulla minim anim velit adipisicing ea aliqua alluptate
                                                       sit do do.Non aliqua reprehenderit reprehenderit culpa
                                                       laboris nulla minim.</p><a className="btn" href="shop">Shop
                                                       now</a>
                                       </div>
                               </div>
                       </div>
                       {/* <div className="info-blocks__item info-blocks__item-reverse js-img"
                               style={{backgroundImage:`url(%27/assets/img/404-3)`}}>
                               <div className="wrapper">
                                       <div className="info-blocks__item-img"><img
                                                       src="../assets/img/info-item-img2.jpg" className="js-img"
                                                       alt="" /><iframe autoplay="" src="#"
                                                       allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope"></iframe>
                                               <div className="info-blocks__item-img-overlay"><span>Promotion
                                                               video</span>
                                                       <div className="info-blocks__item-img-play"><img
                                                                       src="../assets/img/play-btn.png"
                                                                       className="js-img" alt="" /></div>
                                               </div>
                                       </div>
                                       <div className="info-blocks__item-text"><span className="saint-text">About
                                                       Us</span>
                                               <h2>Who we are</h2><span className="info-blocks__item-descr">Nourish
                                                       your skin with toxin-free cosmetic products. With the
                                                       offers that you can’t refuse.</span>
                                               <p>Non aliqua reprehenderit reprehenderit culpa laboris nulla
                                                       minim anim velit adipisicing ea aliqua alluptate sit do
                                                       do.Non aliqua reprehenderit reprehenderit culpa laboris
                                                       nulla minim anim velit adipisicing ea aliqua alluptate
                                                       sit do do.Non aliqua reprehenderit reprehenderit culpa
                                                       laboris nulla minim.</p><a
                                                       className="info-blocks__item-link" href="about"><i
                                                               className="icon-video"></i>Watch video about us<i
                                                               className="icon-arrow-lg"></i></a>
                                       </div>
                               </div>
                       </div> */}
               </div>
   
               <section className="latest-news">
                       <div className="wrapper">
                               <div className="trending-top"><span className="saint-text">Our Blog</span>
                                       <h2>The Latest News At BeShop</h2>
                                       <p>Nourish your skin with toxin-free cosmetic products. With the offers
                                               that you can’t refuse.</p>
                               </div>
                               <div className="blog-items">
                                       <div className="blog-item"><a className="blog-item__img"
                                                       href="blog/%5bid%5d-2"><img
                                                               src="../assets/img/blog-img1.jpg" className="js-img"
                                                               alt="" /><span
                                                               className="blog-item__date"><span>june</span>
                                                               21</span></a><a className="blog-item__title"
                                                       href="blog/%5bid%5d-2">Perfumes, perfumed or eau de
                                                       toilette?</a>
                                               <p>Nourish your skin with toxin-free cosmetic products. With the
                                                       offers that yo skin with toxin-free cosmetic products
                                                       that you can’t refuse.</p><a className="blog-item__link"
                                                       href="blog/%5bid%5d-2">Read more <i
                                                               className="icon-arrow-md"></i></a>
                                       </div>
                                       <div className="blog-item"><a className="blog-item__img"
                                                       href="blog/%5bid%5d-3"><img
                                                               src="../assets/img/blog-img2.jpg" className="js-img"
                                                               alt="" /><span
                                                               className="blog-item__date"><span>june</span>
                                                               21</span></a><a className="blog-item__title"
                                                       href="blog/%5bid%5d-3">Best multi-step skin care
                                                       treatment</a>
                                               <p>Nourish your skin with toxin-free cosmetic products. With the
                                                       offers that yo skin with toxin-free cosmetic products
                                                       that you can’t refuse.</p><a className="blog-item__link"
                                                       href="blog/%5bid%5d-3">Read more <i
                                                               className="icon-arrow-md"></i></a>
                                       </div>
                               </div>
                       </div>
                       <div className="latest-news__btn"><a className="btn" href="blog">Read blog</a></div>
               </section>
               <div className="subscribe">
                       <div className="wrapper">
                               <div className="subscribe-form">
                                       <div className="subscribe-form__img"><img src="../assets/img/subscribe-img.png"
                                                       className="js-img" alt="" /></div>
                                       <form>
                                               <h3>Stay in touch</h3>
                                               <p>Nourish your skin with toxin-free cosmetic roducts.</p>
                                               <div className="box-field__row">
                                                       <div className="box-field"><input type="email"
                                                                       className="form-control"
                                                                       placeholder="Enter your email" /></div>
                                                       <button type="submit" className="btn">subscribe</button>
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

export default Home


