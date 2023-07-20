const Product = require('../models/product')
const products = []

exports.postAddProduct = (req, res, next) => {

    const title = req.body.title;
    const imageUrl = req.body.imageUrl;
    const price = req.body.price;
    const deskripsi = req.body.description;

    Product.create({
        title : title,
        price : price,
        imageUrl : imageUrl,
        description : deskripsi,
        userId : req.body.userId
    }).then( result => {
        console.log(result.toJSON())
        console.log("product sukses ditambah")
        //res.send(result.toJSON())

        res.redirect("/shop")
    }).catch(err => {
        console.log(err)
        res.send(err)
    })

    
}

exports.getProducts = (req,res,next) => {

    const query = req.query

    if(!query){
        Product.findAll().then( result => {
            res.json({data: result, total: result.length})
        }).catch( err => {
            console.log(err)
        })
    }else{
        Product.findAll({
            where : {
                title : query.title,
                price : query.price
            }
        }).then( result => {
            res.json({data: result, total: result.length})
        }).catch( err => {
            console.log(err)
        })
    }

    
}

exports.getProduct = (req,res,next) => {
    const prod_id = req.params.id

    Product.findByPk(prod_id).then( result => {
        res.json({data: result, total: result.length})
    }).catch( err => {
        console.log(err)
    })
}