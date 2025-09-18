const Supplier = require('../models/Supplier');

// Web: Get all suppliers (render view)
exports.getAllSuppliers = async (req, res) => {
    try {
        const suppliers = await Supplier.find();
        res.render('suppliers/index', { suppliers, title: 'Suppliers List' });
    } catch (err) {
        res.status(500).render('error', { title: 'Error', message: err.message });
    }
};

// API: Get all suppliers
exports.getAllSuppliersAPI = async (req, res) => {
    try {
        const suppliers = await Supplier.find();
        res.json(suppliers);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// API: Get supplier by ID
exports.getSupplierAPI = async (req, res) => {
    try {
        const supplier = await Supplier.findById(req.params.id);
        if (!supplier) return res.status(404).json({ error: 'Supplier not found' });
        res.json(supplier);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// API: Create supplier
exports.createSupplierAPI = async (req, res) => {
    try {
        const supplier = new Supplier(req.body);
        await supplier.save();
        res.status(201).json(supplier);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// API: Update supplier
exports.updateSupplierAPI = async (req, res) => {
    try {
        const supplier = await Supplier.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!supplier) return res.status(404).json({ error: 'Supplier not found' });
        res.json(supplier);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// API: Delete supplier
exports.deleteSupplierAPI = async (req, res) => {
    try {
        const supplier = await Supplier.findByIdAndDelete(req.params.id);
        if (!supplier) return res.status(404).json({ error: 'Supplier not found' });
        res.json({ message: 'Supplier deleted' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
