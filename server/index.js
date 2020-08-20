"use strict";

const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const {
  handleSignUp,
  handleSignIn,
  handleGetBasicRecipe,
} = require("./handlers");

const PORT = process.env.PORT || 4000;

express()
  .use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Methods",
      "OPTIONS, HEAD, GET, PUT, POST, DELETE"
    );
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
  })
  .use(morgan("tiny"))
  .use(express.static("./server/assets"))
  .use(bodyParser.json())
  .use(express.urlencoded({ extended: false }))
  .use("/", express.static(__dirname + "/"))

  //Endpoints

  //GET
  .get("/signin", handleSignIn)
  .get("/getbasicrecipe", handleGetBasicRecipe)

  //POST

  .post("/signup", handleSignUp)

  //PUT

  .listen(PORT, () => console.info(`Listening on port ${PORT}`));
