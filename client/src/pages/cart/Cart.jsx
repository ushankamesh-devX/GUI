import React, { useState } from 'react';
import { FaTrash } from 'react-icons/fa';

const Cart = () => {
  // Sample cart items
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

  // Function to remove item from cart
  const removeItem = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  // Function to increase quantity
  const increaseQuantity = (id) => {
    setCartItems(cartItems.map(item => 
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    ));
  };

  // Function to decrease quantity
  const decreaseQuantity = (id) => {
    setCartItems(cartItems.map(item => 
      item.id === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
    ));
  };

  // Calculate total price
  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="max-w-screen-xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <p className="text-lg">Your cart is empty.</p>
      ) : (
        <div className="bg-white shadow-md rounded-lg p-6">
          {cartItems.map(item => (
            <div key={item.id} className="flex items-center justify-between border-b py-4">
              <div className="flex items-center">
                <img src={item.image} alt={item.title} className="w-20 h-20 object-cover rounded-md mr-4" />
                <div>
                  <h2 className="text-lg font-semibold">{item.title}</h2>
                  <p className="text-gray-600">Price: LKR {item.price.toFixed(2)}</p>
                  <div className="flex items-center">
                    <button 
                      onClick={() => decreaseQuantity(item.id)} 
                      className="bg-myOrange text-myWhite px-2 rounded-l-md"
                    >
                      -
                    </button>
                    <span className="px-4">{item.quantity}</span>
                    <button 
                      onClick={() => increaseQuantity(item.id)} 
                      className="bg-myOrange text-myWhite px-2 rounded-r-md"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
              <button onClick={() => removeItem(item.id)} className="text-red-500 hover:text-red-700">
                <FaTrash />
              </button>
            </div>
          ))}
          <div className="flex justify-between mt-4">
            <h2 className="text-xl font-bold">Total Price:</h2>
            <p className="text-xl font-bold">LKR {totalPrice.toFixed(2)}</p>
          </div>
          <button className="mt-4 w-full bg-myBlack text-myWhite py-2 rounded-md hover:bg-myBlackLite transition duration-200">
            Proceed to Checkout
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;