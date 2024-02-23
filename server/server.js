/*
import the module express and use the top-level function that module exports
*/
const express = require('express');
/*
an express app is a web server that listens on a specific ip address and port. multiple apps can be created that listen
on different ports, but we will just make one server.
*/
const app = express();
/*
express does minimal work. it gets most of its functionality from middleware. middleware is a function that takes in
an HTTP request and response object, plus the next middleware function in the chain. the function can modify the 
request and response objects, respond to requests, or call the next middleware function in the chain. here, we will
use express.static(), which generates a middleware function that looks at a request and returns the contents of a file
based on the request's url path. the argument is the directory where the middleware should look for the files.
const fileServerMiddleware = express.static('public')
*/
/*
now, we must mount the middleware on the app. express apps are mounted 
via the app.use() method. the first argument is the url path where the
middleware should be mounted, and the second argument is the middleware
function. if the first argument is '/', the middleware will be mounted
on the root url path.
app.use('/', fileServerMiddleware)
*/
/*
this app.use() call can be merged with the creation of the middleware in
a single line, like this: app.use(express.static('public')).
*/
app.use(express.static('public'));
/*
now that the app is set up, we need to start the server and let it serve
HTTP requests. the listen() method of the app starts the server and 
waits for requests. the first argument is the port number, and the second
argument is the ip address. if the second argument is omitted, the server
will listen on all ip addresses. the listen() method is asynchronous, so
it returns a promise that resolves when the server is ready to accept
requests. here, we are using port number and a callback function that
logs a message when the server is ready.
*/
app.listen(3000, function () {
  console.log('App started on port 3000');
});
