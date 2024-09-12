"use strict";

const port = 5000,
    http = require("http"),//import
    httpStatus = require("http-status-codes"),
    router=require("./router"),
    fs = require("fs"),//for read file
    plainTextContentType = {
        "ContentType": "text/plain"
    },
    htmlContentType = {
        "ContentType":"text/html"
    },
    customReadFile = (file,res)=>{
        fs.readFile(`./${file}`,(errors,data)=>{
            if(errors){
                console.log("there's an error");
            }
            res.end(data);
        });
    };
    
/*
    router.get("/",(req,res)=>{
        res.writeHead(httpStatus.OK,plainTextContentType);
        res.end("INDEX");
    });*/
    router.get("/",(req,res)=>{
        res.writeHead(httpStatus.OK,htmlContentType);
        customReadFile("lounge/Louge.html",res);
        
    });
    router.get("/beverages/elixirs.html",(req,res)=>{//must be consistent with href link, 是此页相对于port的位置！可以改成任何名字
        res.writeHead(httpStatus.OK,htmlContentType);
        customReadFile("lounge/beverages/elixirs.html",res);//actual file path
        
    });

    router.get("/about/directions.html",(req,res)=>{//must be consistent with href link
        res.writeHead(httpStatus.OK,htmlContentType);
        customReadFile("lounge/about/directions.html",res);
        
    });

    router.get("/about/directions.html",(req,res)=>{//must be consistent with href link
        res.writeHead(httpStatus.OK,htmlContentType);
        customReadFile("lounge/about/directions.html",res);
        
    });

    router.get("../",(req,res)=>{//must be consistent with href link
        res.writeHead(httpStatus.OK,htmlContentType);
        customReadFile("lounge/Louge.html",res);
       
    });

    router.get("/images/coke.jpg",(req,res)=>{//must be consistent with href link
        res.writeHead(httpStatus.OK,htmlContentType);
        customReadFile("lounge/images/coke.jpg",res);
       
    });
    router.get("/images/7up.jpg",(req,res)=>{//must be consistent with href link
        res.writeHead(httpStatus.OK,htmlContentType);
        customReadFile("lounge/images/7up.jpg",res);
       
    });

    http.createServer(router.handle).listen(port);
    console.log(`The server is listening on port number: ${port}`);