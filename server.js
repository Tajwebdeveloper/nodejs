var http = require('http');
var fs = require('fs');
//create a server object:
http.createServer(function (req, res) {
  var file = "404.html"
  var status = 200
  var contentType = {'Content-Type': 'text/html'}
  switch(req.url){
    case "/":
      file = "index.html"
      break;
    case "/books":
      file = "books/index.html"
      break;
    case (req.url.match(/^\/books/) || {}).input:
      file = "books/index.html"
      break;
    case "/posts":
      file = "test.html"
      break;
      case "/json":
        file = "json.html"
        contentType = {'Content-Type': 'text/json'}
        break;
    default:
      file = "404.html"
      status = 404
  }
  fs.readFile(file, function(err, data) {
    res.writeHead(status, contentType)
    res.write(data)
    return res.end()
  });
}).listen(8080); //the server object listens on port 8080