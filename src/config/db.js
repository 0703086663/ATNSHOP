const mongoose = require("mongoose");

const url =
  "mongodb+srv://admin:admin@atncluster.iluqcg5.mongodb.net/?retryWrites=true&w=majority";

function connectDB(xURL) {
  mongoose.connect(
    xURL,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
    (err) => {
      if (err) {
        console.log("\n Error !", err);
      } else {
        console.log("\n DB connected !");
      }
    }
  );
}

module.exports = {
  connectDB: connectDB,
  xURL: url,
};
