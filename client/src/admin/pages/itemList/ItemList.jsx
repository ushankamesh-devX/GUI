import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './itemList.css'; 

const ItemList = () => {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState('all');
  const navigate = useNavigate();
  
  const fetchProducts = (selectedCategory) => {
    const endpoint =
      selectedCategory === 'all'
        ? 'http://localhost:5000/products'
        : `http://localhost:5000/products?category=${selectedCategory}`;

    axios
      .get(endpoint)
      .then((response) => setProducts(response.data))
      .catch((error) => console.error('Error fetching products:', error));
  };

  useEffect(() => {
    fetchProducts(category);
  }, [category]);

  const handleFilter = (selectedCategory) => {
    setCategory(selectedCategory);
  };

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:5000/admin/products/${id}`)
      .then(() => setProducts(products.filter((product) => product.id !== id)))
      .catch((error) => console.error('Error deleting product:', error));
  };

  return (
    <div className="itemlist-container">
      <h1 className="itemlist-title">Admin - Item List</h1>
      <div className="itemlist-filter-buttons">
        <button
          onClick={() => handleFilter('all')}
          className={`itemlist-button ${category === 'all' ? 'itemlist-button-active' : ''}`}
        >
          All
        </button>
        <button
          onClick={() => handleFilter('electronics')}
          className={`itemlist-button ${category === 'electronics' ? 'itemlist-button-active' : ''}`}
        >
          Electronics
        </button>
        <button
          onClick={() => handleFilter('food')}
          className={`itemlist-button ${category === 'food' ? 'itemlist-button-active' : ''}`}
        >
          Food
        </button>
        <button
          onClick={() => handleFilter('clothing')}
          className={`itemlist-button ${category === 'clothing' ? 'itemlist-button-active' : ''}`}
        >
          Clothing
        </button>
        <button
          onClick={() => handleFilter('kids')}
          className={`itemlist-button ${category === 'kids' ? 'itemlist-button-active' : ''}`}
        >
          Kids
        </button>
        <button
          onClick={() => navigate('/admin/add')}
          className="itemlist-add-button"
        >
          Add New Item
        </button>
      </div>
      <div className="itemlist-grid">
        {products.length > 0 ? (
          products.map((product) => (
            <div
              key={product.id}
              className="itemlist-card"
            >
              <h3 className="itemlist-card-title">
                {product.title}
              </h3>
              <p className="itemlist-card-category">Category: {product.category}</p>
              <p className="itemlist-card-price">
                Price: ${product.price}
              </p>
              <div className="itemlist-card-buttons">
                <button
                  onClick={() => navigate(`/admin/edit/${product.id}`)}
                  className="itemlist-edit-button"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(product.id)}
                  className="itemlist-delete-button"
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="itemlist-no-products">No products available in this category.</p>
        )}
      </div>
    </div>
  );
};

export default ItemList;
