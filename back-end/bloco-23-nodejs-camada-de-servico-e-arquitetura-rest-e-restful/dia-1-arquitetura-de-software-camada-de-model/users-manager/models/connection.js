const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  host: 'localhost',
	user: 'Alline',
	password: '08091995',
	database: 'users_crud'
});

module.exports = connection;