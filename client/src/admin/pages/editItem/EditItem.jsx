import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './editItem.css';

const EditItem = () => {
  const { id } = useParams(); 
  const [item, setItem] = useState({
    title: '',
    image: '',
    price: '',
    oldPrice: '',
    rating: '',
    sold: '',
    category: '',
  });
  const navigate = useNavigate();

 
  useEffect(() => {
    axios
      .get(`http://localhost:5000/admin/products/${id}`) 
      .then((response) => {
        setItem(response.data); 
      })
      .catch((error) => {
        console.error('Error fetching item details:', error);
      });
  }, [id]);

  
  const handleChange = (e) => {
    setItem({
      ...item,
      [e.target.name]: e.target.value,
    });
  };

 
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:5000/admin/products/${id}`, item)
      .then(() => {
        alert('Item updated successfully!');
        navigate('/admin'); 
      })
      .catch((error) => {
        console.error('Error updating item:', error);
      });
  };

  return (
    <div className="edititem-container">
      <h1 className="edititem-title">Edit Item</h1>
      <form onSubmit={handleSubmit} className="edititem-form">
        <div className="edititem-field">
          <label className="edititem-label">Title:</label>
          <input
            type="text"
            name="title"
            value={item.title}
            onChange={handleChange}
            placeholder="Item Title"
            className="edititem-input"
          />
        </div>
        <div className="edititem-field">
          <label className="edititem-label">Image URL:</label>
          <input
            type="text"
            name="image"
            value={item.image}
            onChange={handleChange}
            placeholder="Image URL"
            className="edititem-input"
          />
        </div>
        <div className="edititem-grid">
          <div className="edititem-field">
            <label className="edititem-label">Price:</label>
            <input
              type="number"
              name="price"
              value={item.price}
              onChange={handleChange}
              placeholder="Price"
              className="edititem-input"
            />
          </div>
          <div className="edititem-field">
            <label className="edititem-label">Old Price:</label>
            <input
              type="number"
              name="oldPrice"
              value={item.oldPrice}
              onChange={handleChange}
              placeholder="Old Price"
              className="edititem-input"
            />
          </div>
        </div>
        <div className="edititem-grid">
          <div className="edititem-field">
            <label className="edititem-label">Rating:</label>
            <input
              type="number"
              step="0.1"
              name="rating"
              value={item.rating}
              onChange={handleChange}
              placeholder="Rating"
              className="edititem-input"
            />
          </div>
          <div className="edititem-field">
            <label className="edititem-label">Sold:</label>
            <input
              type="number"
              name="sold"
              value={item.sold}
              onChange={handleChange}
              placeholder="Number Sold"
              className="edititem-input"
            />
          </div>
        </div>
        <div className="edititem-field">
          <label className="edititem-label">Category:</label>
          <select
            name="category"
            value={item.category}
            onChange={handleChange}
            className="edititem-select"
          >
            <option value="">Select Category</option>
            <option value="electronics">Electronics</option>
            <option value="food">Food</option>
            <option value="clothing">Clothing</option>
            <option value="kids">Kids</option>
          </select>
        </div>
        <div className="edititem-buttons">
          <button type="submit" className="edititem-button edititem-submit">
            Update Item
          </button>
          <button
            type="button"
            onClick={() => navigate('/admin')}
            className="edititem-button edititem-cancel"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditItem;
