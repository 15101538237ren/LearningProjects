const http = require("http");

const port = 3000; // port number likes 'doors' into a computer.
const domain = 'localhost'; // IP : '127.0.0.1'

const server = http.createServer( (req, res) => {
    console.log("request made");
});

server.listen(port, domain, () => {
    console.log(`Listening for request on port ${port}`);
});

