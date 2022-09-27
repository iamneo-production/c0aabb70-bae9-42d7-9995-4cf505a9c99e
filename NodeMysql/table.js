const express = require('express');
const app = express();
const port=8081;
app.use(express.static('public'))
app.listen(port,()=>console.log('listening on port ${port}!'))
const mysql = require('mysql');

const connection = mysql.createConnection({
    host : 'localhost',
    database : 'db',
    user : 'root',
    password : 'examly',
    port:3306
});
connection.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    var sql = "create table userdata(username varchar(255),password varchar(255))";
    connection.query(sql, function (err, result) {
      if (err) throw err;
      console.log("Table created");
    });
  });
  
module.exports = connection;