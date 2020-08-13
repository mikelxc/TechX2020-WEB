"use strict";

const port=3000,
	http=require("http"),
	httpStatus=require("http-status-codes"),
	router=require("./router"),
	fs=require("fs"),
	plainTextContentType={
		"Content-Type":"text/plain",
	},
	htmlContentType={
		"Content-Type":"text/html",
	},
	customReadFile=(file,res)=>{
		fs.readFile(`./${file}`,(errors,data)=>{
			if (errors){
			console.log("There is an error reading the file");
			}
			res.end(data);
		});
	};
router.get("views/index.html",(req,res)=>{
	res.writeHead(httpStatus.OK,htmlContentType);
	customReadFile("/index.html",res);
});
http.createServer(router.handle).listen(port);
console.log(`The server is listening on port numbers:${port}`);
