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

function App() {
  
  const [datas,setdata]=useState([])
  async function fetchData(){
    await fetch('https://api.escuelajs.co/api/v1/products')
  .then(res=> res.json())
  .then(data=> setdata(data))
  }
  
  useEffect(() => {
    fetchData();
   },[])

   
  return (
    <>
    <Nav/>
    <Routes>
        <Route exact path='/' element={<Home  data={datas}/>} />
        <Route path='/product' element={<Product data={datas}/>} />
        <Route path='/product/:id' element={<Productdetai data={datas} />} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>} />
      </Routes>
      <Footer/>
    </>
  )
}

export default App
