const Router = require("express").Router();

exports.get404 = Router.get("*", (req, res) => {
  res.render("404");
});
