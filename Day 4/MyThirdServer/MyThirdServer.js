const { prototype } = require('events');
var http = require('http');
var url = require('url');
var adr = 'http://localhost:8080/default.htm?year=2017&month=february';
var q = url.parse(adr, true);
var port = 8080;

http.createServer(function(req, res) {
    res.write('Hi for the third time');
    console.log(q.protocol);
    console.log(q.host)
    res.end();    
}).listen(port);