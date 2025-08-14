import { Routes, Route } from 'react-router-dom';
import axios from 'axios';
import NotFound from './pages/NotFound';
import Tracking from './pages/Tracking';
import HomePage from './pages/home/HomePage'
import CheckoutPage from './pages/checkout/CheckoutPage';
import Orders from './pages/orders/Orders';
import './App.css'
import { use, useEffect,useState } from 'react';

function App() {
  const [cart, setcart] = useState([]);
  useEffect(() => {
    const fetchCart = async () => {
     const response = await axios.get('/api/cart-items?expand=product')
         setcart(response.data);
    
    };
    fetchCart();  
  } , []);
  return (  
    <>
    <Routes>
      <Route path="/" element={<HomePage cart={cart}/>} />
      <Route path="/checkout" element={<CheckoutPage cart={cart} />} />
      <Route path="/orders" element={<Orders cart={cart} />} />
      <Route path="/tracking" element={<Tracking />} />
      <Route path="*" element={<NotFound />} />

    </Routes>

    </>
  )
}

export default App
