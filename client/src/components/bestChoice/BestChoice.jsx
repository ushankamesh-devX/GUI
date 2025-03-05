import React, { useEffect, useState } from "react";
import axios from "axios";
import "./bestChoice.css";
import ItemCard from "../itemCard/ItemCard";

function BestChoice() {
  const [products, setProducts] = useState([]);

  
  useEffect(() => {
    axios.get("http://localhost:5000/") 
      .then((response) => {
        setProducts(response.data);  
        console.log("Data fetched successfully");
      })
      .catch((error) => {
        console.error("Error fetching best choice products:", error);
      });
  }, []);

  return (
    <div className="best-choice-section">
    <h1 className="best-choice-title">Best Choice</h1>
    <div className="best-choice-container">
      <div className="best-choice-grid">
        {products.map((product) => (
          <div key={product.id} className="best-choice-card">
            <ItemCard product={product} />
          </div>
        ))}
      </div>
    </div>
  </div>
  
  );
}

export default BestChoice;
