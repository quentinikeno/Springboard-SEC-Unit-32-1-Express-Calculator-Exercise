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
	median() {
		const values = this.array.sort((a, b) => a - b);
		const val_len = values.length;
		const middle = Math.floor(val_len / 2);
		return val_len % 2 === 1
			? values[middle]
			: (values[middle - 1] + values[middle]) / 2;
	}
}

module.exports = QueryMath;
