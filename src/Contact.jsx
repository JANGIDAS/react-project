import React from 'react'
import './contact.css'
 const Contact = () => {
  return (
    <>
    <h3 style={{textAlign:'center'}}>Contact Us </h3>
    <div className='container-top'>
      <div className="form">
  <form action="">
    <label for="fname">First Name</label>
    <input type="text" id="fname" name="firstname" placeholder="Your name.."/>

    <label for="lname">Last Name</label>
    <input type="text" id="lname" name="lastname" placeholder="Your last name.."/>

    <label for="country">Country</label>
    <select id="country" name="country">
      <option value="australia">Australia</option>
      <option value="canada">Canada</option>
      <option value="usa">USA</option>
    </select>

    {/* <label for="subject">Subject</label> */}
    {/* <textarea id="subject" name="subject" placeholder="Write something.." style="height:200px"></textarea> */}

    <input type="submit" value="Submit"/>
  </form>
      </div>
      <div className="maps">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d20845.761662487643!2d72.97982277492255!3d26.198242490496053!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39418bd3e6f41ebd%3A0x4c21297177625579!2sPhase%201st%2C%20Sangriya%2C%20Jodhpur%2C%20Rajasthan%20342013!5e1!3m2!1sen!2sin!4v1724552392842!5m2!1sen!2sin"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </div>
    </>
  )
}
export default Contact;
