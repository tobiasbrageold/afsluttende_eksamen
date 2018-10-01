module.exports = function(app) {

const mysql = require('mysql');

const connection = mysql.createConnection({
	host     : 'localhost',
	user     : 'root',
	password : 'root',
	database : 'magasinet',
	port : 8888
});

connection.connect();

global.db = connection;

};