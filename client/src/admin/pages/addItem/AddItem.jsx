import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './addItem.css'; 

const AddItem = () => {
  const [item, setItem] = useState({
    image: '',
    title: '',
    price: '',
    oldPrice: '',
    rating: '',
    sold: '',
    category: '',
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setItem({ ...item, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post('http://localhost:5000/admin/products', item)
      .then(() => navigate('/admin'))
      .catch((error) => console.error('Error adding product:', error));
  };

  return (
    <div className="additem-container">
      <h1 className="additem-title">Add New Item</h1>
      <form onSubmit={handleSubmit} className="additem-form">
        <div className="additem-field">
          <label className="additem-label">Title:</label>
          <input
            type="text"
            name="title"
            placeholder="Item Title"
            onChange={handleChange}
            className="additem-input"
          />
        </div>
        <div className="additem-field">
          <label className="additem-label">Image URL:</label>
          <input
            type="text"
            name="image"
            placeholder="Image URL"
            onChange={handleChange}
            className="additem-input"
          />
        </div>
        <div className="additem-grid">
          <div className="additem-field">
            <label className="additem-label">Price:</label>
            <input
              type="number"
              name="price"
              placeholder="Price"
              onChange={handleChange}
              className="additem-input"
            />
          </div>
          <div className="additem-field">
            <label className="additem-label">Old Price:</label>
            <input
              type="number"
              name="oldPrice"
              placeholder="Old Price"
              onChange={handleChange}
              className="additem-input"
            />
          </div>
        </div>
        <div className="additem-grid">
          <div className="additem-field">
            <label className="additem-label">Rating:</label>
            <input
              type="number"
              step="0.1"
              name="rating"
              placeholder="Rating"
              onChange={handleChange}
              className="additem-input"
            />
          </div>
          <div className="additem-field">
            <label className="additem-label">Sold:</label>
            <input
              type="number"
              name="sold"
              placeholder="Number Sold"
              onChange={handleChange}
              className="additem-input"
            />
          </div>
        </div>
        <div className="additem-field">
          <label className="additem-label">Category:</label>
          <select
            name="category"
            onChange={handleChange}
            className="additem-select"
          >
            <option value="">Select Category</option>
            <option value="electronics">Electronics</option>
            <option value="food">Food</option>
            <option value="clothing">Clothing</option>
            <option value="kids">Kids</option>
          </select>
        </div>
        <div className="additem-buttons">
          <button type="submit" className="additem-submit-button">
            Add Item
          </button>
          <button
            type="button"
            onClick={() => navigate('/admin')}
            className="additem-cancel-button"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddItem;
