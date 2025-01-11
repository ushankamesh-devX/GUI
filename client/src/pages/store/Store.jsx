import React from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import ItemCard from "../../components/itemCard/ItemCard";
const Store = () => {
  const { storeCategory } = useParams();

  // Sample products data based on category
  const products = {
    electronics: [
      {
        id: 1,
        image: "https://m.media-amazon.com/images/I/61D4Z3yKPAL._AC_SL1500_.jpg",
        title: "SmartGadget Pro X",
        price: "28999.99",
        oldPrice: "32999.99",
        rating: 4.5,
        sold: 555,
      },
      {
        id: 1,
        image: "https://m.media-amazon.com/images/I/61D4Z3yKPAL._AC_SL1500_.jpg",
        title: "SmartGadget Pro X",
        price: "28999.99",
        oldPrice: "32999.99",
        rating: 4.5,
        sold: 555,
      },
      {
        id: 1,
        image: "https://m.media-amazon.com/images/I/61D4Z3yKPAL._AC_SL1500_.jpg",
        title: "SmartGadget Pro X",
        price: "28999.99",
        oldPrice: "32999.99",
        rating: 4.5,
        sold: 555,
      },
      {
        id: 1,
        image: "https://m.media-amazon.com/images/I/61D4Z3yKPAL._AC_SL1500_.jpg",
        title: "SmartGadget Pro X",
        price: "28999.99",
        oldPrice: "32999.99",
        rating: 4.5,
        sold: 555,
      },

    ],
    food: [
      {
        id: 1,
        image: "https://example.com/food-product.jpg",
        title: "Organic Apples",
        price: "299.99",
        oldPrice: "349.99",
        rating: 4.8,
        sold: 120,
      },
      {
        id: 1,
        image: "https://example.com/food-product.jpg",
        title: "Organic Apples",
        price: "299.99",
        oldPrice: "349.99",
        rating: 4.8,
        sold: 120,
      },
      {
        id: 1,
        image: "https://example.com/food-product.jpg",
        title: "Organic Apples",
        price: "299.99",
        oldPrice: "349.99",
        rating: 4.8,
        sold: 120,
      },

    ],
    clothing: [
      {
        id: 1,
        image: "https://example.com/clothing-product.jpg",
        title: "Stylish T-Shirt",
        price: "999.99",
        oldPrice: "1299.99",
        rating: 4.2,
        sold: 300,
      },
      {
        id: 1,
        image: "https://example.com/clothing-product.jpg",
        title: "Stylish T-Shirt",
        price: "999.99",
        oldPrice: "1299.99",
        rating: 4.2,
        sold: 300,
      },
      {
        id: 1,
        image: "https://example.com/clothing-product.jpg",
        title: "Stylish T-Shirt",
        price: "999.99",
        oldPrice: "1299.99",
        rating: 4.2,
        sold: 300,
      },

    ],
    kids: [
      {
        id: 1,
        image: "https://example.com/kids-product.jpg",
        title: "Kids Toy Set",
        price: "1499.99",
        oldPrice: "1999.99",
        rating: 4.7,
        sold: 200,
      },
      {
        id: 1,
        image: "https://example.com/kids-product.jpg",
        title: "Kids Toy Set",
        price: "1499.99",
        oldPrice: "1999.99",
        rating: 4.7,
        sold: 200,
      },
      {
        id: 1,
        image: "https://example.com/kids-product.jpg",
        title: "Kids Toy Set",
        price: "1499.99",
        oldPrice: "1999.99",
        rating: 4.7,
        sold: 200,
      },

    ],
  };

  const selectedProducts = products[storeCategory] || [];


  return (
    <div className="fledx flex-col items-center">
    <div className="max-w-screen-xl">
    <div className="p-4">
    <h1 className="text-2xl font-bold mb-4">Store Category: {storeCategory}</h1>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      {selectedProducts.length > 0 ? (
        selectedProducts.map((product) => (
          <ItemCard key={product.id} product={product} />
        ))
      ) : (
        <p>No products available in this category.</p>
      )}
    </div>
  </div>
  </div>
  </div>
  );
};

export default Store;
