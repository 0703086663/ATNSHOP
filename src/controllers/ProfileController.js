var express = require('express');
var router = express.Router();

/////////// --- Khai báo các xử lý trong 1 Controller
router.get("/", getProfile);

function getProfile(req, res) {
    res.render("profile", { title: "Profile Page" });
    //res.sendFile(__dirname + "/view/profile.html");
}

/// --- EXports
module.exports = router;