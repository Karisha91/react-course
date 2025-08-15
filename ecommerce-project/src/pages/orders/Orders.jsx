import Header from '../../components/Header';
import '../../components/Header.css';
import './Orders.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import OrdersGrid from './OrdersGrid';



function Orders({ cart, loadCart }) {
  
  const [orders, setOrders] = useState([]);


  useEffect(() => {
    
    const fetchOrders = async () => {
      try {
        const response = await axios.get('/api/orders?expand=products');
        setOrders(response.data);
      } catch (error) {
        console.error('Error fetching orders:', error);
      }   
    };
    fetchOrders();
  }, []);


  return (
    <>
      <title>Orders</title>
      <link rel="icon" type="image/svg+xml" href="orders-favicon.png" />

      <Header cart={cart} />

      <div className="orders-page">
        <div className="page-title">Your Orders</div>

        <OrdersGrid orders={orders} loadCart={loadCart} />
      </div>
    </>
  );
}
export default Orders;