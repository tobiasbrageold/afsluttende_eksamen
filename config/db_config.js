module.exports = function(app) {

const mysql = require('mysql');

const connection = mysql.createConnection({
	host     : 'localhost',
	user     : 'root',
	password : 'root',
	database : 'magasinet',
	port : 8889
});

connection.connect();

global.db = connection;

};