var httpProxy = require("http-proxy");

var proxy = httpProxy.createServer({target:'http://localhost:8080'});

proxy.listen(80);

proxy.on('proxyRes', function (proxyRes, req, res) {
    console.log('RAW Response from the target', JSON.stringify(proxyRes.headers, true, 2));
});

proxy.on('proxyReq',function(proxyReq,req,res){
  console.log('Request is coming via ip',req);
  console.log('RAW request from client',JSON.stringify(req.headers,true,2));
});

proxy.on('open', function (proxySocket) {
  // listen for messages coming FROM the target here
  proxySocket.on('data', hybiParseAndLogMessage);
});

proxy.on('close', function (res, socket, head) {
 // view disconnected websocket connections
  console.log('Client disconnected');
});

