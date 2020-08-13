"use strict";

const port=1000,
    express = require ("express"),
    app=express();
app
    .get("/",(req,res)=>{
        res.send("Hello,TechXers");
    })
    .listen(port,()=>{
        console.log(`Express.js server has started running and is 
listening on port number: ${port}`);
    });