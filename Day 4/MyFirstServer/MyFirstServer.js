var http = require('http');
var port = 8080;

http.createServer(
    function(req, res) {
        res.write("Hello World! This is my first node.js server");
        res.end();        
    }
).listen(port);

