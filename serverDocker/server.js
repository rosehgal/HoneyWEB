var express = require("express");
var app = express();
var path = require("path");
/*
var Mitm = require("mitm")
var mitm = Mitm()
*/
app.set('port',80);


var server = app.listen(app.get('port'),function(){
  var port = server.address().port;
  console.log('Listening on Port'+port);
});


app.use(express.static(path.join(__dirname,'cse.iitk.ac.in')));
/*
mitm.on("request",function(req,res){
  console.log("Intercepting Connection...");
});
*/
/*var StaticServer = require("static-server");
var server = new StaticServer({
  rootPath:'./cse.iitk.ac.in',
  port : '8080'
});

server.start(function(){
  console.log("Listening on server",server.port);
});


server.on('request',function(req,res){
  console.log("Got a connection from"+ req.ip);
});

server.on('response',function(req,res){
  console.log("Serving request");
});
*/
/*
var port = process.env.PORT || 8080;

app.use(express.static('www.iitk.ac.in'));

app.listen(port,function(){
  console.log("Listening on port"+port);
});
*/
