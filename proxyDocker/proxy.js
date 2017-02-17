var httpProxy = require("http-proxy");
var http = require("http");

var proxy = httpProxy.createProxyServer({target:'http://server_1:80'}).listen(80);

proxy.on('proxyReq',function(proxyReq,req,res){
  console.log("got a connection"+ typeof(req));
});
