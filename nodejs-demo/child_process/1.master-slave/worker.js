const http = require('http');

const server = http.createServer(function (req, res) {
    res.end('hello');
});

const port = Math.floor(1000 * Math.random()) + 1000;

server.listen(port, function() {
    console.log('server lisenting: ', port)
});