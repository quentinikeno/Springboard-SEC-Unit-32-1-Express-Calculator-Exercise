class QueryMath {
	constructor(nums) {
		this.array = this.createArray(nums);
	}
	createArray(nums) {
		return nums.split(",").map((num) => parseInt(num));
	}
	mean() {
		return (
			this.array.reduce((total, next) => total + next) / this.array.length
		);
	}
}

module.exports = QueryMath;
