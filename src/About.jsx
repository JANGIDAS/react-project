import './About.css'
const About =()=>{
    return(
        <>
        <div className='top' style={{textAlign:'center'}}>
        <h3>our mission</h3>
     <h4>making commerce for batter everyone</h4>
     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque qui ipsam consectetur ad quaerat nostrum nulla veniam tenetur necessitatibus voluptatem.</p>
        </div>
     
     <div className="container">
        <div className='f1'>
      <div className='first'><h6>creating a comunity <br />
       for impact
      </h6>
      <p style={{fontSize:'20px'}}>Package Free is a shop centered around the Zero Waste ideology, wherein the products (bar shampoo, metal straws, biodegradable phone cases, etc.) all strive to create as little waste as possible.</p>
      </div>
      <div className='second'><img src="https://images.unsplash.com/photo-1564859228273-274232fdb516?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzJ8fGNsb3RoaW5nfGVufDB8fDB8fHww" alt="" /></div>
     </div>
     </div>
     </>
    )
}
export default About;