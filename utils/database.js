const Sequelize = require('sequelize').Sequelize;
const sequelize = new Sequelize('node_complete', 'root', '123456', {
	host: 'localhost',
	dialect: 'mysql'
});

/*
sequelize
.authenticate()
	.then(() => console.log('connection to Database is OK'))
	.catch((err) => console.log('unable to connect to Database\n\n', err));*/

module.exports = sequelize;
