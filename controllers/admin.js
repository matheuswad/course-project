const Product = require('../models/Product');

exports.postAddProduct = (req, res) => {
	req.user
		.createProduct({
			name: req.body.name
		})
		.then((result) => {
			console.log(`Created a new entry on Database with Id = ${result.id}`);
			res.render('add-product', { link: '/add-product' });
		})
		.catch((err) => {
			console.log(err);
			res.render('add-product', { link: '/add-product' }); // Ideally, a variable should be passed here to inform an error
		});
};

exports.getEditProducts = (req, res) => {
	//Product.findAll()
	req.user
		.getProducts()
		.then((result) => res.render('edit-product', { prods: result, link: '/edit-product' }))
		.catch((err) => console.log(err));
};

exports.getEdit = (req, res) => {
	//Product.findByPk(req.params.id)
	req.user
		.getProducts({ where: { id: req.params.id } })
		.then((products) => {
			const product = products[0];
			res.render('edit', { prod: product, link: '/edit-product' });
		})
		.catch((err) => {
			console.log(err);
			res.sendHtml('<h2>Internal server error</h2>');
		});
};

exports.postEdit = async (req, res) => {
	try {
		let prodEdit = await Product.findByPk(req.params.id);
		prodEdit.name = req.body.name;
		const edited = await prodEdit.save();
		res.redirect('/edit-product');
	} catch (err) {
		console.log(err);
		res.status(500).send('<h2>Internal server error<h2>');
	}
};

exports.postDeleteProduct = (req, res) => {
	Product.findByPk(req.params.id)
		.then((product) => {
			return product.destroy();
		})
		.catch((err) => {
			console.log(err);
		})
		.finally(() => res.redirect('/edit-product'));
};
