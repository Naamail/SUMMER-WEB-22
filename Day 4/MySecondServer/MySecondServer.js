var http = require('http');
var fs = require('fs');
var port = 3030;

http.createServer(
    function(req, res) {
        fs.readFile('fsEXAMPLE.html', function(err, data) {
          res.write(data);
          return res.end();  
        });      
    }).listen(port);
