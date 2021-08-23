var http = require ('http');

const express = require ('express');
const exphbs = require ('express-handlebars');
const app = express ();
const prompt = require ('prompt');
prompt.start();
var mysql = require('mysql2');

var con = mysql.createConnection({
  host: "localhost",
  user: "user",
  password:"p",
  database: "mydb"
});


app.engine ('hbs',exphbs({
    defaultLayout:'main',
    extname:'.hbs'
}));

app.get ('/',(req,res)=>{
    res.render('home');
});

app.listen(5000,()=>{
    console.log ('Web server started on Port 5000');
});

app.use(express.static(__dirname + '/public'));

app.set ('view engine','hbs');

con.connect(function(err) {
    if (err) throw err;
    con.query ("SELECT first_name,last_name,status FROM user", function (err,result,fields){
        if (err) throw err;
        console.log (result);
    });
    console.log("Connected!");
});

