const Sequelize = require('sequelize');
const sequelize = require('../utils/database');

const CartItem = sequelize.define('cartItem', {
	id: {
		type: Sequelize.INTEGER,
		allowNull: false,
		autoIncrement: true,
		primaryKey: true
	},
	quantity: {
		allowNull: false,
		type: Sequelize.INTEGER
	}
});

module.exports = CartItem;
