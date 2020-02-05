const Sequelize = require('sequelize').Sequelize;
const sequelize = require('../utils/database');

const User = sequelize.define('user', {
	id: {
		type: Sequelize.INTEGER,
		primaryKey: true,
		autoIncrement: true,
		allowNull: false
	},
	name: Sequelize.STRING,
	email: {
		type: Sequelize.STRING,
		validate: {
			len: [ 0, 25 ],
			isEmail: true
		}
	}
});

module.exports = User;
