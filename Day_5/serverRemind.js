var http = require('http');
var fs = require('fs');
var url = require('url');
const { runInNewContext } = require('vm');
var port = 8080;

/*
http.createServer(function (req, res) {
        console.log("in server");
        var q = url.parse(req.url, true);
        console.log("after q");
        var filename = "." + q.pathname;
        console.log(filename);
        fs.readFile(filename, function (err, data ) {
            if (err) {
                res.write("Somthing went wrong");
                return res.end("404 not found");
            }
            res.writeHead(404, {'Content-Type': 'text/html'})
            res.write(data);
            return res.end();
        });
    }).listen(port);

*/

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  var q = url.parse(req.url, true).query;
  var txt = q.year + " " + q.month;
  console.log(txt);
  res.end(txt);
}).listen(8080);

    