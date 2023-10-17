var express = require('express');
var router = express.Router();

/////////// --- Khai báo các xử lý trong 1 Controller
router.get("/", getReport);

function getReport(req, res) {
    res.render("report", { title: "Report Page" });
}


/// --- EXports
module.exports = router;