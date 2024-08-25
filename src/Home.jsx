import './Home.css';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Home({ data }) {
  console.log(data);
  const maxdata = data.slice(4, 12);

  const [number, setNumber] = useState(0);
  const imgslide = [
    {
      id: 1,
      img: "https://plus.unsplash.com/premium_photo-1713483862941-40e8539e8e50?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      names: "Delicious Dress"
    },
    {
      id: 2,
      img: "https://plus.unsplash.com/premium_photo-1714226832302-9eca8e1109a1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTA5fHxjbG90aGluZ3xlbnwwfHwwfHx8MA%3D%3D",
      names: "Fashion Brand"
    },
    {
      id: 3,
      img: "https://plus.unsplash.com/premium_photo-1714226832519-a4527b7dc230?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjM3fHxjbG90aGluZ3xlbnwwfHwwfHx8MA%3D%3D",
      names: "splendid products"
    }
  ];

  const Next = () => {
    setNumber(prev => (prev === imgslide.length - 1 ? 0 : prev + 1));
  };

  const Prev = () => {
    setNumber(prev => (prev === 0 ? imgslide.length - 1 : prev - 1));
  };

  
  useEffect(() => {
    const interval = setInterval(() => {
      Next();
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="image-display">
        <img src={imgslide[number].img} alt={imgslide[number].names} />
        <h2>{imgslide[number].names}</h2>
        <button onClick={Prev} className="prev">&#8249;</button>
        <button onClick={Next} className="next">&#8250;</button>
      </div>
      <div className='row'>
        <h1 style={{ textAlign: 'center' }}>Products</h1>
      </div>
      <div className='row3'>
      {
         maxdata.map(i => (
          <Link to={`/product/${i.id}`} key={i.id}>
            <div className='main'>
              <div className='imgs'>
                <img src={i.images} alt={i.title} />
              </div>
              <div className='body'>
                <h1>{i.category.name}</h1>
                <h4 style={{ color: 'green' }}>price: {i.price}</h4>
                <p>{i.title}</p>
              </div>
              <button className='btn' style={{ backgroundColor: 'green' }}>
                Add TO Cart
              </button>
              <button className='btn' style={{ backgroundColor: 'orange' }}>
                Buy Now
              </button>
            </div>
          </Link>
        ))
       }
      </div>
    </>
  );
}

export default Home;
