import React from "react";
import ItemCard from "../itemCard/ItemCard";

function BestChoice() {
  const products = [
    {
      id: 1,
      image: "https://m.media-amazon.com/images/I/61D4Z3yKPAL._AC_SL1500_.jpg",
      title: "SmartGadget Pro X: Your Ultimate Companion for Smart Living",
      price: "28999.99",
      oldPrice: "32999.99",
      currency: "LKR",
      rating: 1.5,
      sold: 555,
    },
    {
      id: 2,
      image: "https://m.media-amazon.com/images/I/61D4Z3yKPAL._AC_SL1500_.jpg",
      title: "4K Ultra HD Smart TV: Elevate Your Home Entertainment",
      price: "65999.99",
      oldPrice: "74999.99",
      currency: "LKR",
      rating: 5,
      sold: 1230,
    },
    {
      id: 3,
      image: "https://m.media-amazon.com/images/I/61D4Z3yKPAL._AC_SL1500_.jpg",
      title: "Wireless Noise-Canceling Headphones with Premium Sound",
      price: "11999.99",
      oldPrice: "14999.99",
      currency: "LKR",
      rating: 4.5,
      sold: 870,
    },
    {
      id: 4,
      image: "https://m.media-amazon.com/images/I/61D4Z3yKPAL._AC_SL1500_.jpg",
      title: "Portable Bluetooth Speaker: Crystal Clear Audio Anywhere",
      price: "7999.99",
      oldPrice: "9999.99",
      currency: "LKR",
      rating: 3.5,
      sold: 430,
    },
    {
      id: 5,
      image: "https://m.media-amazon.com/images/I/61D4Z3yKPAL._AC_SL1500_.jpg",
      title: "Fitness Tracker Pro: Stay on Top of Your Health Goals",
      price: "5999.99",
      oldPrice: "6999.99",
      currency: "LKR",
      rating: 4,
      sold: 1020,
    },
    {
      id: 6,
      image: "https://m.media-amazon.com/images/I/61D4Z3yKPAL._AC_SL1500_.jpg",
      title: "Ergonomic Office Chair: Comfort Meets Style",
      price: "12999.99",
      oldPrice: "15999.99",
      currency: "LKR",
      rating: 4.8,
      sold: 310,
    },
    {
      id: 7,
      image: "https://m.media-amazon.com/images/I/61D4Z3yKPAL._AC_SL1500_.jpg",
      title: "Electric Kettle Premium: Boil Water in Minutes",
      price: "3499.99",
      oldPrice: "4999.99",
      currency: "LKR",
      rating: 3,
      sold: 840,
    },
    {
      id: 8,
      image: "https://m.media-amazon.com/images/I/61D4Z3yKPAL._AC_SL1500_.jpg",
      title: "Smartwatch X-Series: Functionality Meets Design",
      price: "15999.99",
      oldPrice: "18999.99",
      currency: "LKR",
      rating: 4.9,
      sold: 675,
    },
    {
      id: 9,
      image: "https://m.media-amazon.com/images/I/61D4Z3yKPAL._AC_SL1500_.jpg",
      title: "Cordless Vacuum Cleaner: Make Cleaning a Breeze",
      price: "19999.99",
      oldPrice: "23999.99",
      currency: "LKR",
      rating: 4.3,
      sold: 520,
    },
    {
      id: 10,
      image: "https://m.media-amazon.com/images/I/61D4Z3yKPAL._AC_SL1500_.jpg",
      title: "Gaming Mouse Pro RGB: Precision and Performance",
      price: "3999.99",
      oldPrice: "5999.99",
      currency: "LKR",
      rating: 4.7,
      sold: 890,
    },
  ];

  return (
    <div>
        <h1 className="text-2xl font-semibold text-myBlack mb-16 mt-36">Best Choice</h1>
      <div className=" mx-auto p-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div key={product.id} className="  rounded-lg p-4">
              <ItemCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default BestChoice;
