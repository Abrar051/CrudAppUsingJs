const prompt = require('prompt-sync')();
var http = require ('http');

const express = require ('express');
const exphbs = require ('express-handlebars');
const app = express ();

var mysql = require('mysql2');

var con = mysql.createConnection({
  host: "localhost",
  user: "user",
  password:"p",
  database: "mydb"
});

/*prompt.get(['username', 'password'], function (err, result) {
    //if (err) { return onErr(err); }
    console.log('Command-line input received:');
    console.log('  User: ' + result.username);
    console.log('  Password: ' + result.password);
    var sql = 'SELECT first_name,last_name,status FROM user WHERE email= ?';
    con.query (sql,[result.username,result.password], function (err,result,fields){
        if (err) throw err;
        console.log (result);
    });
});*/

//function to input data

/*prompt.get(['Firstname','Lastname','email','pass','status'],function(err,result){
    
    var sql = "INSERT INTO user (first_name,last_name,email,pass,status) VALUES ?";
    var values = [result.firstName,result.lastName,result.email,result.password,result.status];
    con.query (sql,[values], function (err,result,fields){
        if (err) throw err;
        console.log (result);
    });*/
const firstName = prompt ("Enter first name : ");
const lastName = prompt ("Enter last name : ");
const user = prompt ("Enter user : ");
const pass = prompt ("Enter pass : ");
const status = prompt ("Enter status : ");

var sql = "INSERT INTO user (first_name,last_name,email,pass,status) VALUES ?";
var values = [firstName,lastName,user,pass,status];
con.query (sql,[values], function (err,result,fields){
    if (err) throw err;
    console.log (result);
});


function onErr(err) {
    console.log(err);
    return 1;
}