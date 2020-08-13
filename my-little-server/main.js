"use strict";

const port = 5000,
	http = require("http"),
	httpStatus = require("http-status-codes"),
	router = require("./router"),
	fs = require("fs"),
	plainTextContentType = {
		"ContentType" : "text/plain"
	},
	htmlContentType = {
		"ContentType" : "text/html"
	},
	jsContentType = {
                "ContentType" : "application/javascript"
        },
	jsonContentType = {
                "ContentType" : "application/json"
        },
	customReadFile = (file, res)=> {
		fs.readFile(`./${file}`, (errors, data) => {
			if (errors) {
				console.log("There was an error when reading the file");
			}
			res.end(data);
		});
	};
router.get("/", (req, res) => {
	res.writeHead(httpStatus.OK, plainTextContentType);
	res.end("INDEX");
});
router.get("/index.html", (req, res) => {
	res.writeHead(httpStatus.OK, htmlContentType);
	customReadFile("index.html", res);
});
router.get("/Home.html", (req, res) => {
        res.writeHead(httpStatus.OK, htmlContentType);
        customReadFile("Home.html", res);
});
router.get("/JourneyAtTechX.html", (req, res) => {
        res.writeHead(httpStatus.OK, htmlContentType);
        customReadFile("JourneyAtTechX.html", res);
});
http.createServer(router.handle).listen(port);
console.log(`The server is listening on port number: ${port}`);
