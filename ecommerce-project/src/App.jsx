import { Routes, Route } from 'react-router-dom';
import axios from 'axios';
import NotFound from './pages/NotFound';
import Tracking from './pages/Tracking';
import HomePage from './pages/home/HomePage'
import CheckoutPage from './pages/checkout/CheckoutPage';
import Orders from './pages/orders/Orders';
import './App.css'
import { useEffect, useState } from 'react';

function App() {
  
  const [cart, setCart] = useState([]);

  const loadCart = async () => {
    const response = await axios.get('/api/cart-items?expand=product')
    setCart(response.data);
  };

  useEffect(() => {
    loadCart();
  }, []);
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage cart={cart} loadCart={loadCart} />} />
        <Route path="/checkout" element={<CheckoutPage cart={cart} loadCart={loadCart} />} />
        <Route path="/orders" element={<Orders cart={cart} loadCart={loadCart}/>} />
        <Route path="/tracking/:orderId/:productId" element={<Tracking cart={cart} />} />
        <Route path="*" element={<NotFound />} />

      </Routes>

    </>
  )
}

export default App
