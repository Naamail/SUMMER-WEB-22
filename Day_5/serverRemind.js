var http = require('http');
var fs = require('fs');
var url = require('url');
const { runInNewContext } = require('vm');
var port = 8080;

http.createServer(function (req, res) {
        console.log("in server");
        var q = url.parse(req.url, true);
        console.log("       after q");
        var filename = "." + q.pathname;
        console.log(filename);
        fs.readFile(filename, function (err, data ) {
            if (err) {
                res.write("Somthing went wrong");
                return res.end("404 not found");
            }
            res.write(data);
            return res.end();
        });
    }).listen(port);
