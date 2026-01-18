const mongoose = require("mongoose");
const dotenv = require("dotenv").config();

const mongo =  mongoose.connect(process.env.URI)
  .then(() => {
    console.log("Mongo est fonctionnel...");
  })
  .catch((err) => console.log(err));
module.exports = mongo
