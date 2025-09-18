const Product = require('../models/Product');
const Supplier = require('../models/Supplier');

// Web: Get all products (render view)
exports.getAllProducts = async (req, res) => {
    try {
        const products = await Product.find().populate('supplierId');
        res.render('products/index', { products, title: 'Products List' });
    } catch (err) {
        res.status(500).render('error', { title: 'Error', message: err.message });
    }
};

// API: Get all products
exports.getAllProductsAPI = async (req, res) => {
    try {
        const products = await Product.find().populate('supplierId');
        res.json(products);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// API: Get product by ID
exports.getProductAPI = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id).populate('supplierId');
        if (!product) return res.status(404).json({ error: 'Product not found' });
        res.json(product);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// API: Create product
exports.createProductAPI = async (req, res) => {
    try {
        const product = new Product(req.body);
        await product.save();
        res.status(201).json(product);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// API: Update product
exports.updateProductAPI = async (req, res) => {
    try {
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!product) return res.status(404).json({ error: 'Product not found' });
        res.json(product);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// API: Delete product
exports.deleteProductAPI = async (req, res) => {
    try {
        const product = await Product.findByIdAndDelete(req.params.id);
        if (!product) return res.status(404).json({ error: 'Product not found' });
        res.json({ message: 'Product deleted' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
