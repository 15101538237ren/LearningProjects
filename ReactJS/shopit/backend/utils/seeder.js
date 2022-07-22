const Product = require("../models/product");

const dotenv = require('dotenv');

const connectDB = require('../config/database');

const products = require('../data/product.json')
const {connect} = require('mongoose');

//setting dotenv file
dotenv.config({ path: 'backend/config/config.env'});

connectDB();

const seedProducts = async () => {
    try {
        await Product.deleteMany();
        console.log('Existing products are deleted.');

        await Product.insertMany(products);
        console.log('Products are inserted.');
    } catch (error) {
        console.log(error.message);
        process.exit();
    }
}

seedProducts();