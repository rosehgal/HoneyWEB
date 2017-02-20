var httpProxy = require("http-proxy");
var fs = require("fs");
var proxy = httpProxy.createServer({target:'http://server:80'});
var date = require("date-and-time");


const LOG_DIR="/app/proxy/logs/";

proxy.listen(80);


proxy.on('proxyRes', function (proxyRes, req, res) {
    console.log('RAW Response from the target', JSON.stringify(proxyRes.headers, true, 2));
});

proxy.on('proxyReq',function(proxyReq,req,res){
  var now = new Date();
  var dir = LOG_DIR+req.socket.remoteAddress;
  if(!fs.existsSync(dir))
    fs.mkdirSync(dir);
  var fileToWrite = dir +"/"+date.format(now,'YYYY-MM-DD');
  console.log("Writing to a file"+fileToWrite);

  fs.appendFile(fileToWrite,JSON.stringify(req.headers,true,2),function(err){if(!err)console.log("data written to file")});
  //console.log('Request is coming via ip',req.socket.remoteAddress);
  //console.log('RAW request from client',JSON.stringify(req.headers,true,2));
});

proxy.on('open', function (proxySocket) {
  // listen for messages coming FROM the target here
  proxySocket.on('data', hybiParseAndLogMessage);
});

proxy.on('close', function (res, socket, head) {
 // view disconnected websocket connections
  console.log('Client disconnected');
});

