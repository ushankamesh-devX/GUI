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
});

// Add a New Product
app.post('/products', (req, res) => {
    const { image, title, price, oldPrice, rating, sold, category } = req.body;
    const sql = `INSERT INTO products (image, title, price, oldPrice, rating, sold, category) VALUES (?, ?, ?, ?, ?, ?, ?)`;
    db.query(sql, [image, title, price, oldPrice, rating, sold, category], (err, result) => {
        if (err) {
            res.status(500).send('Error adding product');
        } else {
            res.send('Product added successfully');
        }
    });
});

// Start the Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
