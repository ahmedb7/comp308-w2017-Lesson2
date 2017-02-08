//our server
// imported 3rd party module 'connect'
let connect = require('connect');

// created the connect server object
let app = connect();

// assigned a port to a constant
const port = 3000;

// setup the event loop - listens on port 3000
app.listen(port);
console.log(`Server listening at port: ${port}`);
// mounted two routes on the server

// hello route
app.use('/hello', (req, res, next) => {
    res.setHeader('Content-Type', 'text/plain');
    res.end("Hello World!");
  next();
});

// main route for the root of my website
app.use('/', (req, res, next) => {
    res.setHeader('Content-Type', 'text/plain');
    res.end("Welcome!");
  next();
});