const Router = require("express").Router();
const { postAddProduct } = require("../controllers/products");

Router.post("/add-product", postAddProduct);

module.exports = Router;
