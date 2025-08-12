import { Routes, Route } from 'react-router-dom';
import NotFound from './pages/NotFound';
import Tracking from './pages/Tracking';
import HomePage from './pages/HomePage'
import CheckoutPage from './pages/checkout/CheckoutPage';
import Orders from './pages/Orders'
import './App.css'

function App() {
  

  return (
    <>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/checkout" element={<CheckoutPage />} />
      <Route path="/orders" element={<Orders />} />
      <Route path="/tracking" element={<Tracking />} />
      <Route path="*" element={<NotFound />} />

    </Routes>

    </>
  )
}

export default App
