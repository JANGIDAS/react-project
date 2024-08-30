import { Route, Routes } from 'react-router-dom'
import { useState,useEffect } from 'react';
import './App.css'
import Nav from './Nav'
import Product from './Product'
import Home from './Home'
import About from './About'
import Footer from './Footer'
import Contact from './Contact'
import Productdetai from './Productdetai'
import AddToCart from './AddToCart';

function App() {
  
  const [datas,setdata]=useState([])
  const [addCart, setAddCart] = useState([])

  // api fetching 
  async function fetchData(){
    await fetch('https://fakestoreapi.com/products')
  .then(res=> res.json())
  .then(data=> setdata(data))
  }
  
  useEffect(() => {
    fetchData();
   },[])

   console.log(datas);
   

   // add to cart

   const addToCartt = (product) => {
      setAddCart([...addCart, product]);
  
  };
   
  console.log('Datas:', datas);
  console.log('AddCart:', addCart);

   
  return (
    <>
    <Nav/>
    <Routes>
        <Route exact path='/' element={<Home  data={datas}/>} />
        <Route path='/product' element={<Product data={datas}/>} />
        <Route path='/product/:id' element={<Productdetai data={datas} addToCartt={addToCartt} />} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/add-to-cart' element={<AddToCart data={addCart} />} />
      </Routes>
      <Footer/>
    </>
  )
}

export default App
