import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import dayjs from 'dayjs';
import BuyAgainIcon from '../../assets/images/icons/buy-again.png';
import axios from 'axios';

function OrderDetails({ order, loadCart }) {


  const buyAgain = async (product) => {
  
  await axios.post('/api/cart-items', {
    productId: product.id,
    quantity: 1
  });

  await loadCart();
  
}

  return (
    <div className="order-details-grid">
      {order.products.map((orderProduct) => {
        return (
          <Fragment key={orderProduct.product.id}>
            <div className="product-image-container">
              <img src={orderProduct.product.image} alt={orderProduct.product.name} />
            </div>

            <div className="product-details">
              <div className="product-name">
                {orderProduct.product.name}
              </div>
              <div className="product-delivery-date">
                Arriving on: {dayjs(orderProduct.estimatedDeliveryTimeMs).format('dddd, MMMM D')}
              </div>
              <div className="product-quantity">
                Quantity: {orderProduct.quantity}
              </div>
              <button 
                className="buy-again-button button-primary"
                onClick={() => buyAgain(orderProduct.product)}
              >
                <img className="buy-again-icon" src={BuyAgainIcon} alt="Buy again" />
                <span className="buy-again-message">Add to Cart</span>
              </button>
            </div>

            <div className="product-actions">
              <Link to={`/tracking/${order.id}/${orderProduct.product.id}`}>
                <button className="track-package-button button-secondary">
                  Track package
                </button>
              </Link>
            </div>
          </Fragment>
        );
      })}
    </div>
  );
}

export default OrderDetails;