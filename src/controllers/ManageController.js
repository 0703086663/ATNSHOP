var express = require('express');
var router = express.Router();

const Products = require("../models/Products");
const { multipleMongooseToObject } = require('../util/mongoose')

/////////// --- Khai báo các xử lý trong 1 Controller
router.get("/", getManage);

function getManage(req, res) {
    
    Products.find({})
    .then(product => {
        return res.render("manage", { title: "Manage Page", product: multipleMongooseToObject(product) })
    })
    .catch(err => {console.log(err)})
}


/// --- EXports
module.exports = router;