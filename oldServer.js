var fs = require('fs');
var http = require('http');


var server = http.createServer(function(request,response){

  var requestUrl = request.url;
  console.log("Request was made from: " + requestUrl);

  if(requestUrl == "/home" || requestUrl == "/"){

    response.writeHead(200, {'Content-Type': 'text/html'});
    var readStream = fs.createReadStream(__dirname + '/index.html','utf8');
    readStream.pipe(response);
  }
  else if(requestUrl == "/contact-us"){

    response.writeHead(200, {'Content-Type': 'text/html'});
    var readStream = fs.createReadStream(__dirname + '/contact.html','utf8');
    readStream.pipe(response);

  }
  else{
    response.writeHead(404, {'Content-Type': 'text/html'});
    response.end();

  }

});

server.listen(3000,'127.0.0.1');
console.log("Listening to port 3000");
