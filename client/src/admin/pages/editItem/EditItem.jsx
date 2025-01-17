import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const EditItem = () => {
  const { id } = useParams(); // Get the item ID from the URL
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

  // Fetch the item details when the component mounts
  useEffect(() => {
    axios
      .get(`http://localhost:5000/admin/products/${id}`) // Adjust the endpoint to fetch item details by ID
      .then((response) => {
        setItem(response.data); // Set the item details to the state
      })
      .catch((error) => {
        console.error('Error fetching item details:', error);
      });
  }, [id]);

  // Handle input changes
  const handleChange = (e) => {
    setItem({
      ...item,
      [e.target.name]: e.target.value,
    });
  };

  // Submit the updated item details
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:5000/admin/products/${id}`, item)
      .then(() => {
        alert('Item updated successfully!');
        navigate('/admin'); // Redirect to the item list page after successful update
      })
      .catch((error) => {
        console.error('Error updating item:', error);
      });
  };

  return (
    <div className="p-6 bg-myGray min-h-screen flex flex-col items-center">
      <h1 className="text-3xl font-bold text-myBlack mb-8">Edit Item</h1>
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-screen-lg bg-myWhite shadow-md rounded-lg p-6"
      >
        <div className="mb-4">
          <label className="block text-myBlack font-semibold mb-2">Title:</label>
          <input
            type="text"
            name="title"
            value={item.title}
            onChange={handleChange}
            placeholder="Item Title"
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
            value={item.image}
            onChange={handleChange}
            placeholder="Image URL"
            className="w-full px-4 py-2 border border-myGray rounded-lg focus:outline-none focus:ring-2 focus:ring-myOrange"
          />
        </div>
        <div className='grid grid-cols-2 gap-4'>

        <div className="mb-4">
          <label className="block text-myBlack font-semibold mb-2">Price:</label>
          <input
            type="number"
            name="price"
            value={item.price}
            onChange={handleChange}
            placeholder="Price"
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
            value={item.oldPrice}
            onChange={handleChange}
            placeholder="Old Price"
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
            value={item.rating}
            onChange={handleChange}
            placeholder="Rating"
            className="w-full px-4 py-2 border border-myGray rounded-lg focus:outline-none focus:ring-2 focus:ring-myOrange"
          />
        </div>
        <div className="mb-4">
          <label className="block text-myBlack font-semibold mb-2">Sold:</label>
          <input
            type="number"
            name="sold"
            value={item.sold}
            onChange={handleChange}
            placeholder="Number Sold"
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
            value={item.category}
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
            Update Item
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

export default EditItem;
