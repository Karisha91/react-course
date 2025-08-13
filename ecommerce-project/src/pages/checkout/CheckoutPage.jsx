import { CheckoutHeader } from './CheckoutHeader';
import axios from 'axios';
import { useEffect, useState } from 'react';
import './CheckoutPage.css';
import OrderSummary from './OrderSummary';
import PaymentSummary from './PaymentSummary';




function CheckoutPage({ cart }) {

  const [deliveryOptions, setDeliveryOptions] = useState([]);
  const [paymentSummary, setPaymentSummary] = useState(null)

  useEffect(() => {
    axios.get('/api/delivery-options?expand=estimatedDeliveryTime').then((response) => {
      setDeliveryOptions(response.data);
    }).catch((error) => {
      console.error('Error fetching delivery options:', error);
    });

    axios.get('/api/payment-summary').then((response) => {
      setPaymentSummary(response.data);
    }).catch((error) => {
      console.error('Error fetching payment summary:', error);
    });
  }, []);
  return (
    <>
      <title>Checkout</title>
      <link rel="icon" type="image/svg+xml" href="cart-favicon.png" />

      <CheckoutHeader />

      <div className="checkout-page">
        <div className="page-title">Review your order</div>

        <div className="checkout-grid">
         <OrderSummary cart={cart} deliveryOptions={deliveryOptions} />

        <PaymentSummary paymentSummary={paymentSummary} />

          
        </div>
      </div>
    </>
  );
}
export default CheckoutPage;
