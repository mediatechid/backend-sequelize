const express = require('express');
const router = express.Router();
const productsController = require('../controllers/products')

router.get("/", productsController.getProducts)

router.get("/product/:id", productsController.getProduct)

module.exports = router