const mysql = require('think-model-mysql');

module.exports = {
  handle: mysql,
  database: process.env.MYSQL_DATABASE || 'nideshop',
  prefix: 'nideshop_',
  encoding: 'utf8mb4',
  host: process.env.MYSQL_HOST || '127.0.0.1',
  port: '3306',
  user: process.env.MYSQL_USER || 'root',
  password: process.env.MYSQL_PASSWORD || '123456',
  dateStrings: true
};
