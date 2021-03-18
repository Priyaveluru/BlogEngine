'user strict';
var mysql = require('mysql');

/* database credentials need to be updated */
const connection = mysql.createConnection({
	  host     : '127.0.0.1',
	  port :     3306,
	  user     : 'root',
	  password : 'password',
	  database : 'blogapp'
	});
	connection.connect(function(err) {
		if (err) throw err;
	});

module.exports = connection;
