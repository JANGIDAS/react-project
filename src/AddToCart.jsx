import React from 'react'
import './productdetail.css'
import { useParams } from 'react-router-dom'
import { FaStar } from "react-icons/fa";

function AddToCart({data}) {
  console.log("add to cart ",data);
  
  return (
      <>
      {data.map((item) => (
        <div className='top-cont' key={item.id} style={{backgroundColor:'#F7F9F2', margin:'5px'}}>
          <div className='imgss2'>
            <img src={item.image} alt={item.title} />
          </div>
          <div className='side'>
          <h3>{item.category}</h3>
            <h3 style={{ color: 'green' }}>Price: {item.price}</h3>
            <h3>{item.title}</h3>
            <h3 style={{color:"orange"}}> rating:{item.rating.rate}</h3>
            <span><FaStar /></span><span><FaStar /></span><span><FaStar /></span><span><FaStar /></span>
            <p>description:{item.description}</p>
            <p style={{ color: 'blue', fontWeight: 'bold' }}>View 30 more offers</p>
            <button className='btn2' style={{backgroundColor:'black', color:'white'}}>Buy Now</button>
          </div>
        </div>
))}
      
        
    
    </>
  )
}

export default AddToCart