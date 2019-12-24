const Router = require("express").Router();
//const path = require("path");
//const rootDir = require("../utils/rootDir");
const fs = require("fs");

const products = [];

Router.get("/", (req, res) => {
  res.render("index", { prods: products, link: "/" });
});

Router.get("/add-product", (req, res) => {
  res.render("add-product", { link: "/add-product" });
});

Router.post("/add-product", (req, res) => {
  console.log(req.body.product);

  products.push(req.body.product);
  res.send();
});

module.exports = Router;
