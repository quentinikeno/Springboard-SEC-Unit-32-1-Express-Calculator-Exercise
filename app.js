const express = require("express");
const app = express();
const QueryMath = require("./QueryMath");
const ExpressError = require("./ExpressError");

app.use(express.json());

app.use((req, res, next) => {
	// Before each route throw an error if there is no "nums" query string.
	try {
		if (req.query.nums) {
			next();
		} else {
			throw "Invalid query string: nums are required.";
		}
	} catch (error) {
		bad_request_error = new ExpressError(error, 400);
		next(bad_request_error);
	}
});

app.get("/mean", (req, res, next) => {
	// Route for mean.
	try {
		const nums = new QueryMath(req.query.nums);
		response = { operation: "mean", value: nums.mean() };
		return res.json({ response });
	} catch (error) {
		bad_request_error = new ExpressError(error, 400);
		next(bad_request_error);
	}
});

app.get("/median", (req, res, next) => {
	// Route for median.
	try {
		const nums = new QueryMath(req.query.nums);
		response = { operation: "median", value: nums.median() };
		return res.json({ response });
	} catch (error) {
		bad_request_error = new ExpressError(error, 400);
		next(bad_request_error);
	}
});

app.get("/mode", (req, res, next) => {
	// Route for mode.
	try {
		const nums = new QueryMath(req.query.nums);
		response = { operation: "mode", value: nums.mode() };
		return res.json({ response });
	} catch (error) {
		bad_request_error = new ExpressError(error, 400);
		next(bad_request_error);
	}
});

app.use((req, res, next) => {
	// 404 Route.
	const error = new ExpressError(
		"Route not found.  Please use mean, median, or mode.",
		404
	);
	next(error);
});

app.use((error, req, res, next) => {
	// Error handler.
	const { status = 500, message = "Something has gone wrong" } = error;
	return res.status(status).json({ error: { message, status } });
});

app.listen(3000, () => {
	console.log("Server started on port 3000.");
});
