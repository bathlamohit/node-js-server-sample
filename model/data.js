const { Schema, model } = require("mongoose");

const schema = new Schema({
  input1: {
    type: Number,
  },
  input2: {
    type: Number,
  },
  result: {
    type: Number
  }
});

module.exports = model("Data", schema);