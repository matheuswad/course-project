const products = [];

exports.postAddProduct = (req, res) => {
  console.log(req.body.product);
  products.push(req.body.product);
  res.render("add-product", { link: "/add-product" });
};

exports.getProducts = (req, res) => {
  res.render("index", { prods: products, link: "/" });
};
