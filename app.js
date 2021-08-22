var http = require ('http');
//var mysql = require ('mysql');

/*http.createServer (function (req,res){
    res.writeHead (200,{'Content-Type':'text/plain'});
    res.end ('something');
}).listen (8080);*/

/*var con = mysql.createConnection ({
    host: "localhost",
});*/


const express = require ('express');
const exphbs = require ('express-handlebars');
const app = express ();

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


/*con.connect (function(err){
    if (err) throw err;
    console.log ("Database connected");
})*/