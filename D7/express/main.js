"use strict";

const port = 3000,
	express = require("express"),
	app = express();
app
	.get("/", (req, res) => {
		res.send("Hello, TechXers");
	})
	.listen(port, () => {
		console.log(`The new Express.js server has started an is listening on port number: ${port}`)
	})