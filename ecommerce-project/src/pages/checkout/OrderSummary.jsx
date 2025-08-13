import dayjs from 'dayjs';
import formatMoney from '../../utils/money';
import DeliveryOptions from './DeliveryOptions';


function OrderSummary({ cart, deliveryOptions }) {
  return (
    <div className="order-summary">
            {cart.map((item) => {
              const selectedDeliveryOption = deliveryOptions.find(option => option.id === item.deliveryOptionId);
              if (!selectedDeliveryOption) {
                return null; // Skip if no delivery option is selected
              }
              return (
                <div
                  key={item.productId}
                  className="cart-item-container">
                  <div className="delivery-date">
                    Delivery date: {dayjs(selectedDeliveryOption.estimatedDeliveryTimeMs).format('dddd, MMMM D')}
                  </div>

                  <div className="cart-item-details-grid">
                    <img className="product-image"
                      src={item.product.image} />

                    <div className="cart-item-details">
                      <div className="product-name">
                        {item.product.name}
                      </div>
                      <div className="product-price">
                        {formatMoney(item.product.priceCents)}
                      </div>
                      <div className="product-quantity">
                        <span>
                          Quantity: <span className="quantity-label">{item.quantity}</span>
                        </span>
                        <span className="update-quantity-link link-primary">
                          Update
                        </span>
                        <span className="delete-quantity-link link-primary">
                          Delete
                        </span>
                      </div>
                    </div>

                    <DeliveryOptions item={item} deliveryOptions={deliveryOptions} />
                  </div>
                </div>
              )
            })}
          </div>
  );
}
export default OrderSummary;