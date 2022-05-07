const QueryMath = require("./QueryMath");
let test, test2;

beforeAll(() => {
	test = new QueryMath("-2,4,4,8,6,10");
	test2 = new QueryMath("1,3,5,7,9");
});

describe("mean method", () => {
	it("calculates the mean", () => {
		expect(test.mean()).toEqual(5);
	});
});

describe("median method", () => {
	it("calculates the median of an even set", () => {
		expect(test.median()).toEqual(5);
	});
	it("calculates the median of an odd set", () => {
		expect(test2.median()).toEqual(5);
	});
});

describe("mode method", () => {
	it("calculates the mode", () => {
		expect(test.mode()).toEqual(4);
	});
});
