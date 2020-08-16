"use strict"

	const port = 3000,
		express = require("express"),
		app = express();
	app
		.get("/", (req, res) => {
			console.log(req.params);
			console.log(req.query);
			console.log(req.body);
			console.log(req.url);
			res.send("Hello");
		})
		.listen(port, () => {
			console.log(`The new Express.js server has started and is listening on port number : ${port}`);
		});
