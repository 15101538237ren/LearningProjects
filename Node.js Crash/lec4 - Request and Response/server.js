const http = require("http");
const fs = require("fs");
const _ = require("lodash");

const port = 3000; // port number likes 'doors' into a computer.
const domain = 'localhost'; // IP : '127.0.0.1'
const views = "./views";



const server = http.createServer( (req, res) => {
    console.log(req.url, req.method);
    
    const num = _.random(0,20);
    console.log(num);

    res.setHeader('Content-Type', 'text/html');

    let view = views;
    switch(req.url){
        case "/":
            view = `${view}/index.html`;
            res.statusCode = 200;
            break;
        case "/about":
            view = `${view}/about.html`;
            res.statusCode = 200;
            break;
        case "/about-me":
            res.setHeader('Location', '/about');
            res.statusCode = 301;
            res.end();
            break;
        default:
            view = `${view}/404.html`;
            res.statusCode = 404;
            break;
    }

    fs.readFile(view, (err, data) => {
        if (err){
            console.log(err);
        }else{
            res.write(data);
        }
        res.end()
    });
});

server.listen(port, domain, () => {
    console.log(`Listening for request on port ${port}`);
});

