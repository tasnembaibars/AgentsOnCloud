
import React,{useEffect,useState} from 'react'
import {  useParams } from 'react-router-dom'
import axios from 'axios';
import {NavLink} from 'react-router-dom'
import {useNavigate} from 'react-router-dom'
import swal from 'sweetalert'
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

const[comment,setComment]=useState('')
const user =localStorage.getItem('user');
const[user_id,setUserId]=useState(user)
const[product_id,setProductId]=useState(id)
const navigate=useNavigate()
const handleClick=(e)=>{
    e.preventDefault()
    axios.post("http://localhost:3001/comment",{comment:comment,product_id:product_id,user_id:user_id})
    .then((response)=>{
    console.log(response)
    })
    swal({
      title: "Good job!",
      text: " comment added successfully!",
      icon: "success",
      button: "ok!",
    })
    .then(()=> {
      navigate('/all');
  });
}
const[comments,setComments]=useState([])
useEffect(()=>{
    
    axios.get("http://localhost:3001/api/comment")
    .then((response)=>{
        setComments(response.data)
    })
},[])
console.log('com',comments)
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
                    <form>
                            <h3>Add comment</h3>
                          
                            <div class="box-field__row">
                                <div class="box-field"><input type="text" class="form-control"
                                        placeholder="Enter your name" name='comment'  onChange={(e)=>{setComment(e.target.value)}}/></div>
      
                            </div>
                          
                                    <button class="btn btn-grey" style={{marginTop:"3%",marginBottom:"3%"}}
                                type="submit" onClick={handleClick}>Add</button>
                          
                        </form>
                      {comments.map((comment)=>{

                              return(
                                <>
                               
                                <article class="comment">
		<a class="comment-img" href="#non">
		<img src="../avatar.png" alt="" width="50" height="50"/>
		</a>
			
		<div class="comment-body">
			<div class="text">
			  <p>{comment.comment}</p>
			</div>
		<p class="attribution">by <a href="#non">Joe Bloggs</a> at 2:23pm, 4th Dec 2012</p>
		</div>
	</article>
                                
                                </>
                        
                        )
                    })}
                    {/* <div class="wishlist-buttons">
                       
                       <button className="btn btn-grey" onClick={handleClick}>Add comment</button></div> */}
                    {/* <div class="wishlist-buttons">
                       
                        <NavLink class="btn"
                            to={"/all"} className="btn btn-grey">go shopping</NavLink></div> */}
                </div><img class="promo-video__decor js-img" data-src="/assets/img/promo-video__decor.jpg" alt="" />
            </div>
       
           
        </main>
      
    </div>
  )
}

export default Single
