import { Routes, Route } from 'react-router-dom';
import axios from 'axios';
import NotFound from './pages/NotFound';
import Tracking from './pages/Tracking';
import HomePage from './pages/HomePage'
import CheckoutPage from './pages/checkout/CheckoutPage';
import Orders from './pages/Orders'
import './App.css'
import { useEffect,useState } from 'react';

function App() {
  const [cart, setcart] = useState([]);
  useEffect(() => {
    axios.get('/api/cart-items?expand=product').then((response) => {
         setcart(response.data);
          
        }).catch((error) => {
          console.error('Error fetching cart items:', error);
        });
      }, []);

  return (
    <>
    <Routes>
      <Route path="/" element={<HomePage cart={cart}/>} />
      <Route path="/checkout" element={<CheckoutPage cart={cart} />} />
      <Route path="/orders" element={<Orders />} />
      <Route path="/tracking" element={<Tracking />} />
      <Route path="*" element={<NotFound />} />

    </Routes>

    </>
  )
}

export default App
