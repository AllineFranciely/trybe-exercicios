const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  host: 'localhost',
  user: 'Alline',
  password: '08091995',
  database: 'rest_exercicios'});

module.exports = connection;