import React,{useEffect,useState} from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

function Edit() {
    const{id}= useParams();
   
    const [all,setAll]=useState([])
    useEffect(()=>{
        axios.get(`http://localhost:3001/get/${id}`)
        
        .then((response)=>{
          setAll(response.data)
            
        })
        },[])
        console.log('u',all)

        const[eproduct,setEproduct]=useState({ product_name:'',product_description:'',product_image:''})
    const editP=(e)=>{
      e.preventDefault();
    axios.put(`http://localhost:3001/api/edit/${id}`,eproduct) 
    .then((response)=>{
    setEproduct(response.data)
  })
 }
console.log(eproduct)
  return (
    <div> 
        
        {/* {all.length>0 && all.map((val)=>{
          return( */}
        <form encType='multipart/form-data'>
          
      <label>product name</label>
      <input type='text' name='product_name' onChange={(e)=>setEproduct({...eproduct,product_name:e.target.value})} value={all.product_name}/><br/>
      <label>product description</label>
      <input type='text' name='product_description' onChange={(e)=>setEproduct({...eproduct,product_description:e.target.value})} value={all.product_description}/><br/>
      <label>product image</label>
      <input type='file' name='product_image' onChange={(e)=>setEproduct({...eproduct,product_image:e.target.value})} value={all.product_image} /><br/>
      
      <button type='submit' onClick={editP}>edit</button>
     </form> 
   {/* ) })} */}

    </div>
  )
}

export default Edit
