class QueryMath {
	constructor(nums) {
		this.array = this.create_array(nums);
	}
	create_array(nums) {
		return nums.split(",").map((num) => {
			let int = parseInt(num);
			if (isNaN(int)) {
				throw `${num} must be a number`;
			} else {
				return int;
			}
		});
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
	mode() {
		const mode_data = this.array.reduce(
			(mode_accum, val) => {
				if (val !== mode_accum.mode) {
					const val_count = this.find_number_of_elements(val);
					if (val_count > mode_accum.mode_count) {
						mode_accum.mode = val;
						mode_accum.mode_count = val_count;
					}
				}
				return mode_accum;
			},
			{ mode: null, mode_count: 0 }
		);
		return mode_data.mode;
	}
	find_number_of_elements(val) {
		return this.array.filter((el) => el === val).length;
	}
}

module.exports = QueryMath;
