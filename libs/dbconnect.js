// Nhớ cài Mongoose
//  npm      i       --S      mongoose
const mongoose = require("mongoose");

/// Thông tin Database Collection / Tables

/////////////////////////////////////////////////.
const userName = "atn-thanh";
const userPassword = "abc123123";

const dbName = "ATN_SHOP";
 

const url = "mongodb+srv://" +
    userName + ":" + userPassword +     
    "@cluster0.jfvvt.mongodb.net/" + dbName;

///////////////////////////////////////////////////a
function connectDB(xURL) {
    // kết nối MongoDB bằng LIB Mongoose
    mongoose.connect(xURL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }, (err) => {
        if (err) {
            console.log("\n Error !", err);
        } else {
            console.log("\n DB connected !");
        }
    });
}

module.exports = {
    connectDB: connectDB,
    xURL: url,
}