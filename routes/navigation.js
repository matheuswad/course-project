const Router = require("express").Router();
const { getProducts } = require("../controllers/products");

Router.get("/", getProducts);

Router.get("/add-product", (req, res) => {
  res.render("add-product", { link: "/add-product" });
});

module.exports = Router;
