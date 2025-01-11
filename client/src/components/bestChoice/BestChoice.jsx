import React, { useEffect, useState } from "react";
import axios from "axios";
import ItemCard from "../itemCard/ItemCard";

function BestChoice() {
  const [products, setProducts] = useState([]);

  // Fetch best choice products from the backend on component mount
  useEffect(() => {
    axios.get("http://localhost:5000/")  // Corrected endpoint
      .then((response) => {
        setProducts(response.data);  // Set products state with fetched data
        console.log("Data fetched successfully");
      })
      .catch((error) => {
        console.error("Error fetching best choice products:", error);
      });
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-semibold text-myBlack mb-16 mt-36">Best Choice</h1>
      <div className="mx-auto p-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div key={product.id} className="rounded-lg p-4">
              <ItemCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default BestChoice;
