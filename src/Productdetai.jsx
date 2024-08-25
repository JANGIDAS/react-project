import React from 'react'
import './productdetail.css'
import { useParams } from 'react-router-dom';

 const Productdetai = ({data}) => {
  const {id}= useParams()
  const finds = data.find(item=> item.id===parseInt(id));
console.log(finds)
  return (
  <>
   <div className='top-cont'>
    <div className='imgss'><img src={finds.images} alt="" /></div>
    <div className='side'>
      <h3>{finds.category.name}</h3>
      <h3 style={{color:'green'}}> price:{finds.price}</h3>
      <h3>{finds.title}</h3>
      <p> description:{finds.description}</p>
      <h3>Available offers</h3>
      <p>Bank OfferGet ₹50 Instant Discount on first Flipkart UPI transaction on order of ₹200 and aboveT&C</p>
      <p>Special PriceGet extra 28% off (price inclusive of cashback/coupon)T&C</p>
      <p style={{color:'blue', fontWeight:'bold'}}>view 30 more offer</p>
      <button className='btn1'>Add to card</button>
      <button className='btn2'> buy now</button>
    </div>
   </div>
  </>
  )
}
export default Productdetai;
