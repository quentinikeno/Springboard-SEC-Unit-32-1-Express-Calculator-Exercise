const express = require("express");
const app = express();
const QueryMath = require("./QueryMath");

app.use(express.json());

app.get("/mean", (req, res) => {
	const nums = new QueryMath(req.query.nums);
	response = { operation: "mean", value: nums.mean() };
	return res.json({ response });
});

app.get("/median", (req, res) => {
	const nums = new QueryMath(req.query.nums);
	response = { operation: "median", value: nums.median() };
	return res.json({ response });
});

app.listen(3000, () => {
	console.log("Server started on port 3000.");
});
