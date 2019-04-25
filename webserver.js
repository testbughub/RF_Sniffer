// required modules
var http = require('http').createServer(handler);
var fs = require('fs');
var io = require('socket.io')(http)

http.listen(8080);  // Server listens to port 8080

// Handles request from client, sends index.html
function handler(req, res) {
    fs.readFile(__dirname + '/index.html', function (err, data) {
        if (err) {
            res.writeHead(404, { 'Content-Type': 'text/html' });
            return res.end("404 Not Found");
        }
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(data);
        return res.end();
    });
}


var rpi433    = require('rpi-433'),
    rfSniffer = rpi433.sniffer({
      pin: 2,                     //Snif on GPIO 2 (or Physical PIN 13)
      debounceDelay: 500          //Wait 500ms before reading another code
    }),
    rfEmitter = rpi433.emitter({
      pin: 0,                     //Send through GPIO 0 (or Physical PIN 11)
      pulseLength: 350            //Send the code with a 350 pulse length
    });
 
// Receive (data is like {code: xxx, pulseLength: xxx})
rfSniffer.on('data', function (data) {
  console.log('Code received: '+data.code+' pulse length : '+data.pulseLength);
});


// Astablishes a socket connection with client
io.sockets.on('connection', function (socket) {

    socket.on('test', function (data) {
        console.log("erhalten.")
    });

});