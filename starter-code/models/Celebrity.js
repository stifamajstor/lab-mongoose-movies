const mongoose = require("mongoose");

const celebSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  occupation: String,
  catchPhrase: String
});

const Celebrity = mongoose.model("Celebrity", celebSchema);

module.exports = Celebrity;
