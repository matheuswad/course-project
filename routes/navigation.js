const Router = require('express').Router();
const { getProducts, getViewProduct, postAddToCart } = require('../controllers/navigation');

Router.get('/', getProducts);
Router.get('/viewproduct/:id', getViewProduct);
Router.post('/add-cart/:id', postAddToCart);

module.exports = Router;
