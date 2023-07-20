const express = require('express');
const app = express();
const router = express.Router();
const bodyparser = require('body-parser');
const cors = require('cors')
const sequelize = require("./util/database")

const adminRoutes = require("./routes/admin")
const shopRoutes = require("./routes/shop")

console.log("start express node server.....")

app.use(bodyparser.urlencoded({extended:false}))
app.use(cors())
app.use('/admin',adminRoutes)
app.use('/shop',shopRoutes)


router.use((req,res,next) => {
    console.log("middle 1:", Date.now())
    next()
})


router.use("/user/:id", function(req, res, next){
    console.log("middle user:", req.params.id)
    next()
})

router.get("/user/:id", function(req, res){
    res.send(req.method+"-"+req.params.id)
})

router.get("/print", function(req, res){
    res.send(req.method+"-"+req.query.text+"-"+req.query.name)
})

app.use("/", router)

app.use((req,res,next) => {
    res.status(409).send('<h1>Halaman tidak ditemukan</h1>')
})

const koneksi = async() => {
    try {
        await sequelize.authenticate()
        console.log("database terhubung....")
    }catch(error){
        console.error("error koneksi database", error)
    }
}

// koneksi();

sequelize.sync()
.then( result => {
    console.log(result)
    app.listen(8000);
})
.catch( err => {
    console.log(err)
})



