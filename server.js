const express = require('express');
const app = express();
const path = require('path');
const navigationRoutes = require('./routes/navigation');
const adminRoutes = require('./routes/admin');
const rootDir = require('./utils/rootDir');
const errorController = require('./controllers/error');
const sequelize = require('./utils/database');

// Models
const Product = require('./models/product');
const User = require('./models/user');
const Cart = require('./models/cart');
const CartItem = require('./models/cartItem');

app.set('view engine', 'pug');
app.set('views', 'views');

app.use((req, res, next) => {
	// Attach sql user model to req object
	User.findByPk(1).then((result) => {
		req.user = result;
		next();
	});
});
app.use(express.static(path.join(rootDir, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json({ extended: true }));
app.use(navigationRoutes);
app.use(adminRoutes);
app.use(errorController.get404);

Product.belongsTo(User, { constraints: true, onDelete: 'CASCADE' });
User.hasMany(Product);
User.hasOne(Cart);
Cart.belongsToMany(Product, { through: CartItem });
Product.belongsToMany(Cart, { through: CartItem });

sequelize
	//.sync({ force: true })
	.sync()
	.then(() => {
		return User.findByPk(1)
			.then((user) => {
				if (!user) {
					User.create({ name: 'Someguy', email: 'someguy666@gmail.com' });
				}
				return user.getCart();
			})
			.then((cart) => {
				if (!cart) {
					return user.createCart();
				}
			})
			.catch((err) => {
				console.log(err);
			});
	})
	.then((user) => {
		app.listen(3000, () => {
			console.log('listening to port 3000');
		});
	})
	.catch((err) => console.log(err));
