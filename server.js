// import express from "express";
// "type": "module"   to replace const with import and require with from  replace const express = require('express') with import express from 'express'
const express = require('express')
const colors = require('colors')
const dotenv = require('dotenv')
const morgan = require('morgan')
const connectDB = require('./config/db.js')
const authRoutes = require("./routes/authRoute.js")

//configure env
dotenv.config();//in () add path we are already in root so not required

//databse config
connectDB();

//rest object
const app = express();

//middelwares
app.use(express.json());
app.use(morgan("dev"));

//routes
app.use("/api/v1/auth", authRoutes);

//rest api
app.get("/", (req, res) => {
  res.send("<h1>Welcome to A&APisces app by Amritansha Patnaik</h1>");
});

//PORT
const PORT = process.env.PORT || 8080;

//run listen
app.listen(PORT, () => {
  console.log(
    `Server Running on ${process.env.DEV_MODE} mode on port ${PORT}`.bgCyan
      .white
  );
});