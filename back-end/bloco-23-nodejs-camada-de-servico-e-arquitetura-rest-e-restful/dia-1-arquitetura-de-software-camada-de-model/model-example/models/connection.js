const mysql = require('mysql2/promise');

const connection = mysql.createPool({
	host: 'localhost',
	user: 'Alline',
	password: '08091995',
	database: 'model_example' });

module.exports = connection;