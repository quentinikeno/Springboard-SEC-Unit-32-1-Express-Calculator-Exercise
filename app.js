const express = require("express");
const res = require("express/lib/response");
const app = express();

app.use(express.json());

// mean
app.get("/mean", () => {
	response = { operation: "mean" };
	return res.json({ response });
});

app.listen(3000, function () {
	console.log("Server started on port 3000.");
});
