var httpProxy = require("http-proxy");
var http = require("http");
var connect = require("connect");
var bodyParser = require("body-parser");

var proxy = httpProxy.createProxyServer({});

#console.log("Proxy listening on port 80");

proxy.on('proxyReq',function(proxyReq,req,res,options){
  //console.log("got a connection"+ typeof(req));
  if(req.body){
    var newBody = JSON.stringify(req.body);
    console.log("Request from the client",newBody);
    proxyReq.write(newBody);
  }
});

var app = connect().use(bodyParser.json()).use(bodyParser.urlencoded()).use(function(req,res){
  console.log('Proxy body',req.body);
  proxy.web(req,res,{target:"http://server:80"});
});

http.createServer(app).listen(80);
