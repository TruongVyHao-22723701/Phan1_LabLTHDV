const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

// Web routes
router.get('/', productController.getAllProducts);

// API routes
router.get('/api', productController.getAllProductsAPI);
router.get('/api/:id', productController.getProductAPI);
router.post('/api', productController.createProductAPI);
router.put('/api/:id', productController.updateProductAPI);
router.delete('/api/:id', productController.deleteProductAPI);

module.exports = router;
