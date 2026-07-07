const http = require('http');

const Server = http.createServer((req,res)=>{
    console.log("Request made");
    console.log(req.url);
    console.log(req.method)

    res.setHeader('Content-Type', 'text/html');
    res.write('<h1>Good Morning!</h1>');
    res.end();
})



Server.listen(9999,'localhost',()=>{
    console.log("server is loading ");
})