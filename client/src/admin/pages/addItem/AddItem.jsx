import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

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
    <div className="p-6 bg-myGray min-h-screen flex flex-col items-center">
      <h1 className="text-3xl font-bold text-myBlack mb-6">Add New Item</h1>
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-screen-lg bg-myWhite shadow-md rounded-lg p-6"
      >
        <div className="mb-4">
          <label className="block text-myBlack font-semibold mb-2">Title:</label>
          <input
            type="text"
            name="title"
            placeholder="Item Title"
            onChange={handleChange}
            className="w-full px-4 py-2 border border-myGray rounded-lg focus:outline-none focus:ring-2 focus:ring-myOrange"
          />
        </div>
        <div className="mb-4">
          <label className="block text-myBlack font-semibold mb-2">
            Image URL:
          </label>
          <input
            type="text"
            name="image"
            placeholder="Image URL"
            onChange={handleChange}
            className="w-full px-4 py-2 border border-myGray rounded-lg focus:outline-none focus:ring-2 focus:ring-myOrange"
          />
        </div>
        <div className='grid grid-cols-2 gap-4'>
        <div className="mb-4">
          <label className="block text-myBlack font-semibold mb-2">Price:</label>
          <input
            type="number"
            name="price"
            placeholder="Price"
            onChange={handleChange}
            className="w-full px-4 py-2 border border-myGray rounded-lg focus:outline-none focus:ring-2 focus:ring-myOrange"
          />
        </div>
        <div className="mb-4">
          <label className="block text-myBlack font-semibold mb-2">
            Old Price:
          </label>
          <input
            type="number"
            name="oldPrice"
            placeholder="Old Price"
            onChange={handleChange}
            className="w-full px-4 py-2 border border-myGray rounded-lg focus:outline-none focus:ring-2 focus:ring-myOrange"
          />
        </div>
        </div>
        <div className='grid grid-cols-2 gap-4'>
        <div className="mb-4">
          <label className="block text-myBlack font-semibold mb-2">Rating:</label>
          <input
            type="number"
            step="0.1"
            name="rating"
            placeholder="Rating"
            onChange={handleChange}
            className="w-full px-4 py-2 border border-myGray rounded-lg focus:outline-none focus:ring-2 focus:ring-myOrange"
          />
        </div>
        <div className="mb-4">
          <label className="block text-myBlack font-semibold mb-2">Sold:</label>
          <input
            type="number"
            name="sold"
            placeholder="Number Sold"
            onChange={handleChange}
            className="w-full px-4 py-2 border border-myGray rounded-lg focus:outline-none focus:ring-2 focus:ring-myOrange"
          />
        </div>
        </div>
        <div className="mb-6">
          <label className="block text-myBlack font-semibold mb-2">
            Category:
          </label>
          <select
            name="category"
            onChange={handleChange}
            className="w-full px-4 py-2 border border-myGray rounded-lg focus:outline-none focus:ring-2 focus:ring-myOrange"
          >
            <option value="">Select Category</option>
            <option value="electronics">Electronics</option>
            <option value="food">Food</option>
            <option value="clothing">Clothing</option>
            <option value="kids">Kids</option>
          </select>
        </div>
        <div className="flex justify-between">
          <button
            type="submit"
            className="bg-myOrange text-myWhite font-semibold py-2 px-6 rounded-lg hover:bg-myRed focus:outline-none focus:ring-2 focus:ring-myOrange focus:ring-offset-2"
          >
            Add Item
          </button>
          <button
            type="button"
            onClick={() => navigate('/admin')}
            className="bg-myBlackLite text-myWhite font-semibold py-2 px-6 rounded-lg hover:bg-myBlack focus:outline-none focus:ring-2 focus:ring-myBlack focus:ring-offset-2"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddItem;
