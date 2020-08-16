"use strict"

const port = 5000,
    http = require("http"), //common.js import a module
    httpStatus = require("http-status-codes"),
    router = require('./router'),
    fs = require("fs"),
    plainTextContentType = {
        "Content-Type": "text/plain"
    },
    htmlContentType = {
        "Content-Type": "text/html"
    },
    cssContentType = {
        "Content-Type": "text/css"
    },
    jpgContentType = {
        "Content-Type": "image/jpg"
    },
    customReadFile = (file, res) => {
        fs.readFile(`./${file}`, (errors, data) => {
                if (errors){
                    console.log("there is an error when reading the file");
                }
                res.end(data);
        })
    };
    router.get("/", (req, res) =>{
        res.writeHead(httpStatus.OK, plainTextContentType);
        res.end("INDEX");
    });
    router.get("/index.html", (req, res) =>{
        res.writeHead(httpStatus.OK, htmlContentType);
        customReadFile("views/index.html", res);
    });
    router.get("/index.css", (req, res) =>{
        res.writeHead(httpStatus.OK, cssContentType);
        customReadFile("views/index.css", res);
    });
    router.get("/index.jpg", (req, res) =>{
        res.writeHead(httpStatus.OK, jpgContentType);
        customReadFile("views/index.jpg", res);
    })

    http.createServer(router.handle).listen(port);
    console.log(`The server is listening on port number: ${port}`);