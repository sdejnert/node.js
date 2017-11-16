var mysql = require("mysql");

var con = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "931026",
	database:"mydb"
});

con.connect(function(err) {
	if(err) throw err;
	console.log("Connected!");
	var sql = "CREATE TABLE customers (id INT(255), product_name VARCHAR(255))";
	con.query(sql, function (err, result) {
		if(err) throw err;
		console.log("Table created");
	});
});