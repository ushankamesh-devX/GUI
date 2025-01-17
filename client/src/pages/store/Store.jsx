import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import ItemCard from "../../components/itemCard/ItemCard";

const Store = () => {
  const { storeCategory } = useParams(); // Get category from URL
  const [products, setProducts] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    // Fetch products by category from the backend
    axios.get(`http://localhost:5000/store/${storeCategory}`)
      .then((response) => {
        setProducts(response.data); // Set fetched products
        setError(""); // Clear any previous errors
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
        setError("Failed to load products. Please try again.");
      });
  }, [storeCategory]);

  return (
    <div className="flex flex-col items-center">
      <div className="max-w-screen-xl">
        <div className="p-4">
          <h1 className="text-2xl font-bold mt-8 mb-16">
            Store Category: {storeCategory}
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {error ? (
              <p className="text-red-500">{error}</p>
            ) : products.length > 0 ? (
              products.map((product) => (
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
