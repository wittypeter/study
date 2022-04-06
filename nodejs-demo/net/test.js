const net = require('net');

const server = net.createServer(function(socket) {
    socket.on('data', function(data) {
        // socket.write(`what?, you said `, data.toString());
        socket.write(`i'm so sorry, i cannot help you!`);
    });

    socket.on('end', function() {
        console.log('client disconnected');
    })
    socket.write('hello, what do you want?')
});

server.listen(8134, function() {
    console.log('server connected');
});