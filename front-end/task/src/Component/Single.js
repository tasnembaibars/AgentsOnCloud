
import React,{useEffect,useState} from 'react'
import {  useParams } from 'react-router-dom'
import axios from 'axios';
import {NavLink} from 'react-router-dom'
function Single() {
    const { id } = useParams();
    const[single,setSingle]=useState([])
useEffect(()=>{
    axios.get(`http://localhost:3001/get/${id}`)
    .then((response)=>{
        setSingle(response.data[0])
    })
},[])
console.log('s',single)

  return (
    <div>
      
      <main class="content">
      <section class="arrivals ">
                <div class="trending-top"><span class="saint-text">Cosmetics</span>
                    <h2>You Have Viewed</h2>
                    <p>Nourish your skin with toxin-free cosmetic products. With the offers that you can’t refuse.</p>
                </div>
              
            </section>
            <div class="wishlist">
                <div class="wrapper">
                    <div class="cart-table">
                        <div class="cart-table__box">
                       
                            <div class="cart-table__row"  >
                                <div class="cart-table__col"><a class="cart-table__img" href="product/%5bid%5d"><img
                                            src="../assets/img/product-img1.jpg" class="js-img" alt="" /></a>
                                    <div class="cart-table__info"><a class="title5" >{single.product_name}
                                            </a><span class="cart-table__info-num">{single.product_description}
                                           
                                        </span>
                                        <span class="cart-table__price cart-table__info-num">${single.product_price}
                                      
                                    </span></div>
                                </div>
                              
                              
                                <div class="cart-table__col" ><span class="cart-table__total"><NavLink class="blog-item__link"
                                      to={'/all'}  >not available now <i class="icon-arrow-md"></i></NavLink></span>
                                </div>
                            </div>
    
                        </div>
                    </div>
                    <div class="wishlist-buttons">
                        {/* <a href="#" class="btn btn-grey">clear Wishlist</a> */}
                        <NavLink class="btn"
                            to={"/all"} className="btn btn-grey">go shopping</NavLink></div>
                </div><img class="promo-video__decor js-img" data-src="/assets/img/promo-video__decor.jpg" alt="" />
            </div>
       
           
        </main>
      
    </div>
  )
}

export default Single
