const mongoose = require("mongoose");

const jacketsSchema = mongoose.Schema({
  JacketName: {
    type: String,
    required: true
  },
  JacketSize: {
    type: String,
    required: true
  },
  JacketPrice: {
    type: Number,
    required: true,
    min: [5.0, "The minimum value for JacketPrice is 5.0"],
    max: [50.0, "The maximum value for JacketPrice is 50.0"]
  }
});

module.exports = mongoose.model("Jacket", jacketsSchema);
