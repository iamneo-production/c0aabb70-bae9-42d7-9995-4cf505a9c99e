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

connection.connect(function(error){
    if(error)
    {
        throw error;
    }
    else
    {
        console.log('MySQL Database is connected Successfully');
    }
});

module.exports = connection;