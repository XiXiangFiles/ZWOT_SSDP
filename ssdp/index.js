const Server = require('node-ssdp').Server
const server = new Server()
   
 
server.addUSN('upnp:rootdevice');
server.addUSN('urn:schemas-upnp-org:device:MediaServer:1');
server.addUSN('urn:schemas-upnp-org:service:ContentDirectory:1');
server.addUSN('urn:schemas-upnp-org:service:ConnectionManager:1');
server.on('advertise-alive', function (headers) {
  
})
            
server.on('advertise-bye', function (headers) {
})
server.start();
