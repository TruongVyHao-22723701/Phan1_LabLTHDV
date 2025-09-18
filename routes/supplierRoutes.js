const express = require('express');
const router = express.Router();
const supplierController = require('../controllers/supplierController');

// Web routes
router.get('/', supplierController.getAllSuppliers);

// API routes
router.get('/api', supplierController.getAllSuppliersAPI);
router.get('/api/:id', supplierController.getSupplierAPI);
router.post('/api', supplierController.createSupplierAPI);
router.put('/api/:id', supplierController.updateSupplierAPI);
router.delete('/api/:id', supplierController.deleteSupplierAPI);

module.exports = router;
