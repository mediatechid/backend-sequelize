const express = require('express');
const router = express.Router();
const productsController = require('../controllers/products')

router.post("/product", (req,res,next) => {

    console.log(req.body)
    res.redirect("/shop")
})

router.delete("/delete-product", (req,res,next) => {

    console.log(req.body)
    res.redirect("/shop")
})

router.get("/ambil-product", (req,res,next) => {

    console.log(req.body)
    res.redirect("/shop")
})

router.post("/add-product", productsController.postAddProduct)

module.exports = router;