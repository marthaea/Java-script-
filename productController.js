
const productservice = require('../services/productservice');

const productController = {
  getAllProducts: (req, res) => {
    productservice.getAllProducts((err, results) => {
      if (err) return res.status(500).send(err);
      res.json(results);
    });
  },

  createProduct: (req, res) => {
    const newProduct = req.body;
    productservice.createProduct(newProduct, (err, results) => {
      if (err) return res.status(500).send(err);
      res.status(201).json(results);
    });
  },

  updateProduct: (req, res) => {
    const { id } = req.params;
    const updatedProduct = req.body;
    productService.updateProduct(id, updatedProduct, (err, results) => {
      if (err) return res.status(500).send(err);
      res.json(results);
    });
  },

  deleteProduct: (req, res) => {
    const { id } = req.params;
    productService.deleteProduct(id, (err, results) => {
      if (err) return res.status(500).send(err);
      res.json({ message: 'Product deleted' });
    });
  }
};

module.exports = productController;
