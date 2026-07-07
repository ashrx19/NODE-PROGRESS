const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    console.log("Request made");
    console.log(req.url);
    console.log(req.method);

    res.setHeader('Content-Type', 'text/html');

    let path ="./";

    if(req.url=='/'){
        path +='home.html';
        res.statusCode = 200;
    }else if(req.url=='/home'){
        // Redirect
        res.statusCode = 301;
        res.setHeader('Location','/');
        res.end()
    }else if(req.url=='/about'){
        path +='about.html';
        res.statusCode = 200;
    }else{
        path +='error.html';
        res.statusCode = 404;

    }

    fs.readFile(path, (err, data) => {
        if (err) {
            console.log(err.message);
            res.statusCode = 404;
            res.end('Error loading the HTML file');
        } else {
            res.write(data);
            res.end();
        }
    });
});

server.listen(9999, 'localhost', () => {
    console.log("Server is loading");
});