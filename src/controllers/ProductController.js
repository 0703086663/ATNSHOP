var express = require("express");
var router = express.Router();
const Products = require("../models/Products");
const {
  multipleMongooseToObject,
  mongooseToObject,
} = require("../util/mongoose");

router.get("/search", searchProduct);
function searchProduct(req, res) {
  try {
    if (req.query.query === null || req.query.query === undefined) {
      return res.render("products/product-detail", {
        title: "Detail",
        product: null,
      });
    }
    const query = req.query.query;
    Products.findOne({ ProductName: query }).then((product) => {
      if (product) {
        return res.render("products/product-detail", {
          title: product.ProductName,
          product: mongooseToObject(product),
        });
      } else {
        return res.render("products/product-detail", {
          title: "Detail",
          product: null,
        });
      }
    });
  } catch (err) {
    console.log(err);
  }
}

router.get("/", getProduct);
function getProduct(req, res) {
  Products.find({})
    .then((product) => {
      return res.render("product", {
        title: "Product Page",
        product: multipleMongooseToObject(product),
      });
    })
    .catch((err) => {
      console.log(err);
    });
}

////SEARCHING

/// - NEW --> Create
router.get("/new", getNewProduct);
function getNewProduct(req, res) {
  res.render("products/product-new", { title: "Create a New Product" });
}
/// - CRUD - C - Create / Post - Add
router.post("/store", createNewProduct);
function createNewProduct(req, res) {
  let newProducts = new Products({
    ProductName: req.body.ProductName,
    Information: req.body.Information,
    Price: req.body.Price,
    Unit: req.body.Unit,
    ImgLink: req.body.ImgLink,
  });
  newProducts.save();
  return res.redirect("/product");
}

/// - reEDIT --> Update
router.get("/:id/edit", getEditProduct);
function getEditProduct(req, res) {
  Products.findOne({ _id: req.params.id }).then((product) => {
    return res.render("products/product-edit", {
      title: "Edit a Product",
      product: mongooseToObject(product),
    });
  });
}

/// - CRUD - U - Update / Put
router.post("/:id/edit", updateProduct);
function updateProduct(req, res) {
  Products.findOneAndUpdate({ _id: req.params.id }, req.body)
    .then((product) => res.redirect("back"))
    .catch((err) => console.log(err));
  // res.render("product-update", { title: "Update a Product" });
}

/// - CRUD - D - Delete
router.get("/:id/delete", deleteProduct);
function deleteProduct(req, res) {
  Products.findOneAndDelete({ _id: req.params.id })
    .then(() => res.redirect("back"))
    .catch((err) => console.log(err));
}

/// --- EXports
module.exports = router;
