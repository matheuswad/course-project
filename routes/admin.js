const Router = require('express').Router();
const adminController = require('../controllers/admin');

Router.post('/add-product', adminController.postAddProduct);

Router.get('/add-product', (req, res) => {
	res.render('add-product', { link: '/add-product' });
});

Router.get('/edit-product', adminController.getEditProducts);
Router.get('/edit/:id', adminController.getEdit);
Router.post('/edit/:id', adminController.postEdit);
Router.post('/delete/:id', adminController.postDeleteProduct);

module.exports = Router;
