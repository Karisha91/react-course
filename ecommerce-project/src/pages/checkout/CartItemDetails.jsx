import formatMoney from "../../utils/money";
import axios from "axios";
import { useState } from "react";

function CartItemDetails({ item, loadCart }) {
const [isUpdatingQuantity, setIsUpdatingQuantity] = useState(false);
const [quantity, setQuantity] = useState();

const updateCartItem = async () => {
   // Switch between true and false for isUpdatingQuantity.
    if (isUpdatingQuantity) {
      await axios.put(`/api/cart-items/${item.productId}`, {
        quantity: Number(quantity),
      });
      await loadCart();
      setIsUpdatingQuantity(false);
    } else {
      setIsUpdatingQuantity(true);
    }
  };
const handleQuantityChange = (event) => {
  const newQuantity = parseInt(event.target.value);
  
  if (newQuantity > 0) {
    setQuantity(newQuantity);
    
  }
};

const handleQuantityKeyDown = (event) => {
    const keyPressed = event.key;

    if (keyPressed === 'Enter') {
      updateCartItem();

    } else if (keyPressed === 'Escape') {
      setQuantity(item.quantity);
      setIsUpdatingQuantity(false);
    }
  };
  
 async function deleteCartItem() {
   await axios.delete(`/api/cart-items/${item.productId}`);
   await loadCart(); 
  }
  return (
    <>
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
            Quantity: {isUpdatingQuantity
              ? <input type="text" className="quantity-textbox"
                  value={quantity} onChange={handleQuantityChange}
                  onKeyDown={handleQuantityKeyDown}/>
              : <span className="quantity-label">{item.quantity}</span>
            }
          </span>
          <span 
          onClick={updateCartItem}
          className="update-quantity-link link-primary">
            Update
          </span>
          <span className="delete-quantity-link link-primary" onClick={deleteCartItem}>
            Delete
          </span>
        </div>
      </div>
    </>
  );

}

export default CartItemDetails;