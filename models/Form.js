const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const formSchema = new Schema({
  firstName: String,
  lastName: String,
  email: String,
  address: String,
  donationType: String,
  otherDonationType: String,
  message: String,
  location: String,
  recurring: Boolean,
  agree: Boolean,
});

module.exports = mongoose.model("Form", formSchema);
