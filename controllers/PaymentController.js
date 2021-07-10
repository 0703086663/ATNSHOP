var express = require('express');
var router = express.Router();

/////////// --- Khai báo các xử lý trong 1 Controller
router.get("/", getPayment);

function getPayment(req, res) {
    res.render("payment", { title: "Payment Page" });
}

/// --- EXports
module.exports = router;