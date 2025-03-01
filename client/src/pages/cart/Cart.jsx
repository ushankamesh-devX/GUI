import React, { useState } from 'react';
import "./cart.css";
import { FaTrash } from 'react-icons/fa';

const Cart = () => {

  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      image: "https://m.media-amazon.com/images/I/61D4Z3yKPAL._AC_SL1500_.jpg",
      title: "SmartGadget Pro X",
      price: 28999.99,
      quantity: 1,
    },
    {
      id: 2,
      image: "https://example.com/food-product.jpg",
      title: "Organic Apples",
      price: 299.99,
      quantity: 2,
    },
  ]);


  const removeItem = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };


  const increaseQuantity = (id) => {
    setCartItems(cartItems.map(item => 
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    ));
  };


  const decreaseQuantity = (id) => {
    setCartItems(cartItems.map(item => 
      item.id === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
    ));
  };


  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="shopping-cart">
  <h1 className="cart-title">Shopping Cart</h1>
  {cartItems.length === 0 ? (
    <p className="cart-empty-message">Your cart is empty.</p>
  ) : (
    <div className="cart-container">
      {cartItems.map(item => (
        <div key={item.id} className="cart-item">
          <div className="cart-item-info">
            <img src={item.image} alt={item.title} className="cart-item-image" />
            <div>
              <h2 className="cart-item-title">{item.title}</h2>
              <p className="cart-item-price">Price: LKR {item.price.toFixed(2)}</p>
              <div className="cart-item-quantity">
                <button 
                  onClick={() => decreaseQuantity(item.id)} 
                  className="quantity-button quantity-decrease"
                >
                  -
                </button>
                <span className="quantity-value">{item.quantity}</span>
                <button 
                  onClick={() => increaseQuantity(item.id)} 
                  className="quantity-button quantity-increase"
                >
                  +
                </button>
              </div>
            </div>
          </div>
          <button onClick={() => removeItem(item.id)} className="cart-item-remove">
            <FaTrash />
          </button>
        </div>
      ))}
      <div className="cart-total">
        <h2 className="cart-total-title">Total Price:</h2>
        <p className="cart-total-price">LKR {totalPrice.toFixed(2)}</p>
      </div>
      <button className="cart-checkout-button">
        Proceed to Checkout
      </button>
    </div>
  )}
</div>

  );
};

export default Cart;