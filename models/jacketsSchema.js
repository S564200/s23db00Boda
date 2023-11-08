const mongoose = require("mongoose")
const jacketsSchema = mongoose.Schema({
JacketName: String,
JacketSize: String,
JacketPrice: Number
})
module.exports = mongoose.model("jackets",jacketsSchema)


