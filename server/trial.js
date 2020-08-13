"use strict";

const routeResponseMap={"/info":"<h1>Info Page</h1>",
			"/contact":"<h1>Contact</h1>",
			"/error ":"<h1>Error</h1>"};
const port=3000,
   http = require("http"),
   httpStatus = require("http-status-codes"),
   app=http.createServer((request,response) => {
   console.log("Received an incoming request!");
   response.writeHead(httpStatus.OK,{"Content-Type":"text/html"});
   if(routeResponseMap[request.url]){
	response.end(routeResponseMap[request.url]);}
   else{
	response.end("<h1>Welcome</h1>");
}


//   let responseMessage="<h1>Hello, TechXer</h1>";
//   response.write(responseMessage);
//   response.end();
  //console.log(`Sent a response:${responseMessage}`);
});

app.listen(port);
console.log(`The server has started and is listening on port ${port}`);

