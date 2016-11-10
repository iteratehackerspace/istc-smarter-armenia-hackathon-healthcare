const http = require('http');
const fs = require('fs');
//const WebSocketServer = require('ws').Server;

const port = 8080;


// Basic HTTP httpServer
const httpServer = http.createServer((req, res) => {
  switch (req.url) {
  case '/':
    fs.readFile('public/index.html',
		'utf-8',
		(_, data) => res.end(data));
    break;
  // case '/logo.png':
  //   fs.readFile('public/logo.png', (err, data) => res.end(data));
  //   break;
  case '/ppl.webm':
    fs.readFile('public/ppl.webm',
    (_, data) => res.end(data));
    break;
  case '/bundle.js':
    fs.readFile('public/bundle.js',
		'utf-8',
		(_, data) => res.end(data));
    break;
  default: res.end();
  }
});

httpServer.listen(port, () =>
		  console.log(`Server started on port:${port}, check localhost:${port}`)
);
