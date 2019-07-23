

var express = require('express');
var app = express();
app.set("view engine" , "ejs");

app.get('/',function(request,response){

  response.render("index");

});

const port = process.env.PORT || 3000; 
app.listen(port);
console.log("Listening to port");
