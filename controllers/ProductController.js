var express = require('express');
var router = express.Router();

/// DATA
const mongoose = require("mongoose");
const Product = require("../models/Products");

/////////// --- Khai báo các xử lý trong 1 Controller
router.get("/", getProduct);

async function getProduct(req, res) {
    var productlist = await Product.find({});
    console.log(productlist);
    res.render("product", { title: "Product Page", product: productlist });
}

////SEARCHING



/// - NEW --> Create
router.get("/new", getNewProduct);

function getNewProduct(req, res) {
    res.render("products/product-new", { title: "Create a New Product" });
}
/// - CRUD - C - Create / Post - Add
router.post("/", createNewProduct);

function createNewProduct(req, res) {
    console.log(req.params);
    //console.log(req.body.Price);
    res.end(JSON.stringify(req.body));
    //res.render("product-new", { title: "Create a New Product" });
    let newProducts = new Product({
        ProductName: req.body.ProductName,
        ProductCode: req.body.ProductCode,
        Information: req.body.Information,
        Price: req.body.Price,
        Unit: req.body.Unit,
        ImgLink: req.body.ImgLink 
    });
    newProducts.save();
}


/// - reEDIT --> Update
router.get("/edit", getEditProduct);

function getEditProduct(req, res) {
    res.render("product-edit", { title: "Create a New Product" });
}

/// - CRUD - U - Update / Put 
router.put("/:id", updateProduct);

function updateProduct(req, res) {
    res.render("product-update", { title: "Update a Product" });
}


/// - CRUD - D - Delete 
router.delete("/:id", deleteProduct);

function deleteProduct(req, res) {
    res.render("product-delete", { title: "Update a Product" });
}





/// --- EXports
module.exports = router;