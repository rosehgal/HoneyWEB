var httpProxy = require("http-proxy");
var http = require("http");

var proxy = httpProxy.createProxyServer({target:'http://0.0.0.0:80'}).listen(80);

proxy.on('proxyReq',function(proxyReq,req,res){
  console.log("got a connection");
});
