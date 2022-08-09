import axios from 'axios'
import React,{useEffect, useState} from 'react'
import {NavLink} from 'react-router-dom'
import {  useParams } from 'react-router-dom'

function All() {
    const { id } = useParams();
    const user_id =localStorage.getItem('user');

    const[makeup,setMakeUp]=useState([])
useEffect(()=>{
axios.get("http://localhost:3001/api/get")
.then((response)=>{
    setMakeUp(response.data)
})
},[])

const deleteP=(id)=>{
   axios.delete(`http://localhost:3001/api/delete/${id}`) 
}

  return (
    <div>
      {makeup.map((val)=>{
        return (
            <>
            <p>{val.product_name} | {val.product_description}</p>
            <img src={`http://localhost:3001/${val.product_image}`}/>
            {user_id == val.user_id && 
            <>
            <button onClick={()=>{deleteP(val.id)}}>delete</button>
            
           <button><NavLink to={`/edit/${val.id}`}>edit</NavLink></button>
            </>
            }
      </>
      )
      })}
    </div>
  )
}

export default All
