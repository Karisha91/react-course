
import DeliveryOptions from './DeliveryOptions';
import CartItemDetails from './CartItemDetails';
import DeliveryDate from './DeliveryDate';

function OrderSummary({ cart, deliveryOptions, loadCart }) {
  return (
    <div className="order-summary">
      {cart.map((item) => {
        const selectedDeliveryOption = deliveryOptions.find(
          option => option.id === item.deliveryOptionId
        );
        
        if (!selectedDeliveryOption) {
          return null; // Skip if no delivery option is selected
        }
        
        return (
          <div key={item.productId} className="cart-item-container">
            <DeliveryDate deliveryOption={selectedDeliveryOption} />
            
            <div className="cart-item-details-grid">
              <CartItemDetails item={item} loadCart={loadCart} />
              <DeliveryOptions 
                item={item} 
                deliveryOptions={deliveryOptions}
                loadCart={loadCart} 
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default OrderSummary;