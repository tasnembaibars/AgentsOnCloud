import React,{useEffect,useState} from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import {useNavigate} from 'react-router-dom'
import swal from 'sweetalert'
function Edit() {
    const{id}= useParams();
  const navigate = useNavigate();
   
    const [all,setAll]=useState([])
    useEffect(()=>{
        axios.get(`http://localhost:3001/get/${id}`)
        
        .then((response)=>{
          setAll(response.data[0])
            
        })
        },[])
        console.log('u',all)

        const[eproduct,setEproduct]=useState({ product_name:'',product_description:'',product_price:'',product_image:''})
    const editP=(e)=>{
      e.preventDefault();
    axios.put(`http://localhost:3001/api/edit/${id}`,eproduct) 
    .then((response)=>{
    setEproduct(response.data)
  })
  swal({
    title: "Good job!",
    text: " Product edited successfully!",
    icon: "success",
    button: "ok!",
  })
  .then(()=> {
    navigate('/all');
});
 }
console.log(eproduct)
  return (
    <div> 
        
       



   <main class="content">
           
           <div class="login">
               <div class="wrapper">
                   <div class="login-form js-img" style={{backgroundImage:`url("%27/assets/img/404-6")`}}>
                       <form>
                           <h3>Edit your product :</h3>
                        
                          
                           <div class="box-field"><input type="text" class="form-control"
                                   placeholder="Enter your product name " name='product_name' onChange={(e)=>setEproduct({...eproduct,product_name:e.target.value})} defaultValue={all.product_name}/></div>
                           <div class="box-field"><input type="text" class="form-control"
                                   placeholder="Enter your product description" name='product_description' onChange={(e)=>setEproduct({...eproduct,product_description:e.target.value})} defaultValue={all.product_description}/></div>
                                     <div class="box-field"><input type="number" class="form-control"
                                   placeholder="Enter your product price "  name='product_price' onChange={(e)=>setEproduct({...eproduct,product_price:e.target.value})} defaultValue={all.product_price}/></div>
                                     <div class="box-field"><input  class="form-control"
                                    type='file' name='product_image' onChange={(e)=>setEproduct({...eproduct,product_image:e.target.value})} defaultValue={all.product_image}/></div>
                                   
                                 <button class="btn" type="submit"  onClick={editP}>Edit
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

export default Edit
