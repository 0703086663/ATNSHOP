var express = require('express');
var router = express.Router();

/////////// --- Khai báo các xử lý trong 1 Controller
router.get("/", getLogout);


function getLogout(req, res) {
    res.render("logout", { title: "Logout Page" });
    //res.sendFile(__dirname + "/view/logout.html");
}

/// --- EXports
module.exports = router;