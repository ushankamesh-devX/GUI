require('dotenv').config();
const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());

// MySQL Connection Without Database to Create Database First
const db = mysql.createConnection({
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || ''
});

// Connect and Create Database if Not Exists
db.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL:', err);
    } else {
        console.log('MySQL Connected...');

        // Create the database if it doesn't exist
        db.query(`CREATE DATABASE IF NOT EXISTS db_buynest`, (err) => {
            if (err) {
                console.error('Error creating database:', err);
            } else {
                console.log('Database db_buynest created or already exists.');
            }
        });

        // Connect to the newly created database
        db.changeUser({ database: 'db_buynest' }, (err) => {
            if (err) {
                console.error('Error switching to db_buynest:', err);
            } else {
                console.log('Using database db_buynest.');

                // Create products table if it doesn't exist with 'category' column
                const createTableQuery = `
                CREATE TABLE IF NOT EXISTS products (
                    id INT PRIMARY KEY AUTO_INCREMENT,
                    image VARCHAR(255) NOT NULL,
                    title VARCHAR(100) NOT NULL,
                    price DECIMAL(10,2) NOT NULL,
                    oldPrice DECIMAL(10,2),
                    rating FLOAT,
                    sold INT,
                    category VARCHAR(50) NOT NULL
                )`;

                db.query(createTableQuery, (err) => {
                    if (err) {
                        console.error('Error creating table:', err);
                    } else {
                        console.log('Products table created or already exists.');
                    }
                });
            }
        });
    }
});

// Fetch All Products
app.get('/products', (req, res) => {
    const sql = 'SELECT * FROM products';
    db.query(sql, (err, results) => {
        if (err) {
            res.status(500).send('Error fetching products');
        } else {
            res.json(results);
        }
    });
})

// Fetch Best Choice Products Based on Rating * Sold, Limit 15 (for / and /products/best-choice)
app.get(['/','/products/best-choice'], (req, res) => {
    const sql = 'SELECT * FROM products ORDER BY (rating * sold) DESC LIMIT 15';
    db.query(sql, (err, results) => {
        if (err) {
            res.status(500).send('Error fetching best choice products');
        } else {
            res.json(results);
        }
    });
});

// Fetch Products by Category
app.get('/store/:category', (req, res) => {
    const category = req.params.category.toLowerCase(); // Get category from URL
    const validCategories = ['electronics', 'food', 'clothing', 'kids']; // Define valid categories

    if (!validCategories.includes(category)) {
        return res.status(400).json({ error: 'Invalid category' });
    }

    const sql = 'SELECT * FROM products WHERE category = ?';
    db.query(sql, [category], (err, results) => {
        if (err) {
            res.status(500).send('Error fetching products by category');
        } else {
            res.json(results);
        }
    });
});
// Fetch Products (with optional category filter)
app.get('/products', (req, res) => {
    const category = req.query.category?.toLowerCase(); 
    const validCategories = ['electronics', 'food', 'clothing', 'kids']; 

    let sql = 'SELECT * FROM products';
    const values = [];

    if (category && validCategories.includes(category)) {
        sql += ' WHERE LOWER(category) = ?';
        values.push(category);
    }

    db.query(sql, values, (err, results) => {
        if (err) {
            console.error('Error fetching products:', err);
            res.status(500).send('Error fetching products');
        } else {
            res.json(results);
        }
    });
});


// Fetch Product by ID
app.get('/admin/products/:id', (req, res) => {
    const { id } = req.params;
    const sql = 'SELECT * FROM products WHERE id = ?';
    db.query(sql, [id], (err, results) => {
        if (err) {
            res.status(500).send('Error fetching product');
        } else if (results.length === 0) {
            res.status(404).send('Product not found');
        } else {
            res.json(results[0]); // Send the first matching product
        }
    });
});


// Add a New Product
app.post('/admin/products', (req, res) => {
    const { image, title, price, oldPrice, rating, sold, category } = req.body;
    const sql = 'INSERT INTO products (image, title, price, oldPrice, rating, sold, category) VALUES (?, ?, ?, ?, ?, ?, ?)';
    db.query(sql, [image, title, price, oldPrice, rating, sold, category], (err, result) => {
        if (err) {
            res.status(500).send('Error adding product');
        } else {
            res.send('Product added successfully');
        }
    });
});

// Update Product
app.put('/admin/products/:id', (req, res) => {
    const { id } = req.params;
    const { image, title, price, oldPrice, rating, sold, category } = req.body;
    const sql = 'UPDATE products SET image = ?, title = ?, price = ?, oldPrice = ?, rating = ?, sold = ?, category = ? WHERE id = ?';
    db.query(sql, [image, title, price, oldPrice, rating, sold, category, id], (err, result) => {
        if (err) {
            res.status(500).send('Error updating product');
        } else {
            res.send('Product updated successfully');
        }
    });
});

// Delete Product
app.delete('/admin/products/:id', (req, res) => {
    const { id } = req.params;
    const sql = 'DELETE FROM products WHERE id = ?';
    db.query(sql, [id], (err, result) => {
        if (err) {
            res.status(500).send('Error deleting product');
        } else {
            res.send('Product deleted successfully');
        }
    });
});


// Start the Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
