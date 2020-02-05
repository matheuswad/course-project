const Product = require('../models/Product');

exports.getProducts = (req, res) => {
	Product.findAll()
		.then((result) => res.render('index', { prods: result, link: '/' }))
		.catch((err) => console.log(err));
};

exports.getViewProduct = (req, res) => {
	Product.findByPk(req.params.id)
		.then((result) => {
			res.render('view-product', { prod: result, link: '/' });
		})
		.catch((err) => console.log(err));
};

exports.postAddToCart = async (req, res) => {
	const product = await Product.findByPk(req.params.id);
	const cart = await req.user.getCart();
	const prodExists = await cart.getProducts({ ...product });
	let quantity = 1;
	if (prodExists.length === 0) {
		await cart.addProduct(product.id, { through: { quantity: quantity } });
	} else {
		await cart.setProducts(product.id, { through: { quantity: quantity + 1 } });
	}
};
