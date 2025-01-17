import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

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
    fetchProducts(category); // Fetch products based on the current category
  }, [category]);

  const handleFilter = (selectedCategory) => {
    setCategory(selectedCategory);
  };

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:5000/admin/products/${id}`)
      .then(() =>
        setProducts(products.filter((product) => product.id !== id))
      )
      .catch((error) => console.error('Error deleting product:', error));
  };

  return (
    <div className="p-6 bg-myGray min-h-screen">
      <h1 className="text-3xl font-bold text-myBlack mb-6">Admin - Item List</h1>
      <div className="mb-6 flex flex-wrap gap-4">
        <button
          onClick={() => handleFilter('all')}
          className={`px-4 py-2 rounded-lg font-semibold ${
            category === 'all' ? 'bg-myOrange text-myWhite' : 'bg-myBlackLite text-myWhite'
          } hover:bg-myBlack focus:ring-2 focus:ring-myOrange`}
        >
          All
        </button>
        <button
          onClick={() => handleFilter('electronics')}
          className={`px-4 py-2 rounded-lg font-semibold ${
            category === 'electronics' ? 'bg-myOrange text-myWhite' : 'bg-myBlackLite text-myWhite'
          } hover:bg-myBlack focus:ring-2 focus:ring-myOrange`}
        >
          Electronics
        </button>
        <button
          onClick={() => handleFilter('food')}
          className={`px-4 py-2 rounded-lg font-semibold ${
            category === 'food' ? 'bg-myOrange text-myWhite' : 'bg-myBlackLite text-myWhite'
          } hover:bg-myBlack focus:ring-2 focus:ring-myOrange`}
        >
          Food
        </button>
        <button
          onClick={() => handleFilter('clothing')}
          className={`px-4 py-2 rounded-lg font-semibold ${
            category === 'clothing' ? 'bg-myOrange text-myWhite' : 'bg-myBlackLite text-myWhite'
          } hover:bg-myBlack focus:ring-2 focus:ring-myOrange`}
        >
          Clothing
        </button>
        <button
          onClick={() => handleFilter('kids')}
          className={`px-4 py-2 rounded-lg font-semibold ${
            category === 'kids' ? 'bg-myOrange text-myWhite' : 'bg-myBlackLite text-myWhite'
          } hover:bg-myBlack focus:ring-2 focus:ring-myOrange`}
        >
          Kids
        </button>
        <button
          onClick={() => navigate('/admin/add')}
          className="px-4 py-2 rounded-lg bg-myRed text-myWhite font-semibold hover:bg-myBlack focus:ring-2 focus:ring-myRed"
        >
          Add New Item
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.length > 0 ? (
          products.map((product) => (
            <div
              key={product.id}
              className="p-4 bg-myWhite rounded-lg shadow-md hover:shadow-lg border border-myGray"
            >
              <h3 className="text-lg font-semibold text-myBlack mb-2">
                {product.title}
              </h3>
              <p className="text-myBlackLite mb-2">Category: {product.category}</p>
              <p className="text-myOrange font-semibold mb-4">
                Price: ${product.price}
              </p>
              <div className="flex justify-between">
                <button
                  onClick={() => navigate(`/admin/edit/${product.id}`)}
                  className="px-4 py-2 bg-myOrange text-myWhite rounded-lg hover:bg-myRed focus:ring-2 focus:ring-myOrange"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(product.id)}
                  className="px-4 py-2 bg-myBlackLite text-myWhite rounded-lg hover:bg-myBlack focus:ring-2 focus:ring-myBlack"
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-myBlack">No products available in this category.</p>
        )}
      </div>
    </div>
  );
};

export default ItemList;
