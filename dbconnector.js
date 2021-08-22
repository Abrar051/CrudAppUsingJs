var express = require('express')
var mysql = require('mysql2');

var con = mysql.createConnection({
  host: "localhost",
  user: "user",
  password:"p",
  database: "mydb"
});

con.connect(function(err) {
    console.log(err);
    console.log("Connected!");
});