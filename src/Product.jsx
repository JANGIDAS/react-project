import { useState,useEffect } from 'react';
import './Product.css'
import { Link } from 'react-router-dom';
function Product({data}){
 
   console.log(data);
   

  return(
    <>
    <div className='cont'>
    { 
      data.map((i)=>(
     <Link to={`/product/${i.id}`} key={i.id}>
      <div className='main' >
     <div className='imgs'>
      <img src={i.image} alt="" />
     </div>

     <div className='body'>
        <h1>{i.category.name}</h1>
        <h4 style={{color:'green'}}> price:{i.price}</h4>
        <p>{i.title}</p>

     </div>
     <button className='btn' style={{backgroundColor:'green'}}>Add TO Card</button>
     <button className='btn' style={{backgroundColor:'orange'}}>Buy Now</button>
      </div>
      </Link>
      ))
    }
    </div>
   
     </>
    )
}
export default Product;