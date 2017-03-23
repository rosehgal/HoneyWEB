var httpProxy = require("http-proxy");
var fs = require("fs");
var date = require("date-and-time");



const LOG_DIR="/app/proxy/logs/";

var proxy = httpProxy.createServer({target:'http://server:80'});
proxy.listen(80);


proxy.on('proxyRes', function (proxyRes, req, res) {
        console.log('RAW Response from the target', JSON.stringify(proxyRes.headers, true, 2));
    }
);

proxy.on('proxyReq',function(proxyReq,req,res){
        var now = new Date();
        var dir = LOG_DIR+req.socket.remoteAddress;
        if(!fs.existsSync(dir))
        fs.mkdirSync(dir);
        var fileToWrite = dir +"/"+date.format(now,'YYYY-MM-DD');
        var proxyLogFile = LOG_DIR + "/proxy_capture_"+date.format(now,'YYYY-MM-DD');

        fs.appendFile(fileToWrite,"URL Access for"+req.url+"\n",function(err){if(err)console.log("Unable to write data to the file")});
        fs.appendFile(fileToWrite,JSON.stringify(req.headers,true,2)+"\n",function(err){if(err)console.log("Unable to write datat to file")});
        
        fs.appendFile(proxyLogFile,date.format(now,'YYYY-MM-DD_HH-mm-ss')+"\t"+req.socket.remoteAddress+"\t"+req.socket.remotePort+"\t"+req.url+"\t"+req.headers['host']+"\t"+req.headers['user-agent']+"\n",function(err){if(err)console.log("Not able to write proxy logs")})
    }
);

proxy.on('open', function (proxySocket) {
        // listen for messages coming FROM the target here
    proxySocket.on('data', hybiParseAndLogMessage);
    }
);

proxy.on('close', function (res, socket, head) {
        // view disconnected websocket connections
    console.log('Client disconnected');
    }
);

