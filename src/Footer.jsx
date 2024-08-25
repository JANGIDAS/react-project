import React from 'react'
import './footer.css'
 const Footer = () => {
  return (
   <>
   <div className='footer'>
    <div className='cols'>
       <h6>About Mart</h6>
       <p>We are a fashion-forward clothing brand <br /> committed to providing stylish and affordable fashion.</p>
    </div>
    <div className='cols'>
       <h6>Quick Links</h6>
       <li>home</li>
       <li>product</li>
       <li>about</li>
       <li>contact us</li>
    </div>
    <div className='cols'>
    <h6>Contact Us</h6>
          <p>Email: support@AkshMart.com</p>
          <p>Phone: +123-456-7890</p>
          <p>Address: 123 Fashion Ave, 20Jodhpur,Rajasthan</p>
    </div>
   </div>
   </>
  )
}
export default Footer;
