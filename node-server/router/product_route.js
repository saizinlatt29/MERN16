//create routes / api's for user singin-up
let express = require("express");
let productRoute = express.Router();
const productDataModel = require("../data-model/productDataModel");



//localhost:9000/product/api/submit
productRoute.post("/api/submit", (req, res)=>{
    let product = req.body
    console.log(product)

    productDataModel.findOne({name:req.body.name}).then((existingProduct)=>{
        if(existingProduct) {
            console.log("sigin in success ", existingProduct);
            res.send(existingProduct)
        } else { 
            let newProduct = new productDataModel(product)
            
            newProduct.save().then((newProduct)=>{
                console.log("successful submit ", newProduct);
                res.send(newProduct)
            }).catch((err1)=>{
                console.log("err submit", err1);
                res.send("error while submit")
            })
        }
    }).catch((err)=>{
        console.log("err while Submit ", err);
        res.send("Error while Submit - existing product");
    })
})

//localhost:9000/product/api/getProducts
productRoute.get("/api/getProducts",(req, res)=>{
    productDataModel.find()
    .then((allProducts)=>{
        res.send(allProducts)
    })
    .catch(()=>{
        res.send("error while fetching product")
    })
})

module.exports = productRoute;