const mongoose = require('mongoose')
const Schema = require("mongoose");

const userSchema = new mongoose.Schema( //create model using schema
    {
      name: {
        type: String,
        required: true,
        trim: true, //removes white spaces
      },
      email: {
        type: String,
        required: true,
        unique: true, //one user from one email id
      },
      password: {
        type: String,
        required: true,
      },
      phone: {
        type: String,
        required: true,
      },
      address: {
        type: String,
        required: true,
      },
      role: {
        type: Number,
        default: 0,
      },
    },
    { timestamps: true }
  );
  


  module.exports = mongoose.model("users", userSchema);