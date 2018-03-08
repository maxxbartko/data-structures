class Stack {
	constructor() {
		this.storage = {};
		this.index = -1;
	}

	push(val) {
		this.index++;
		this.storage[this.index] = val;
		}

	pop() {
		let output = this.storage[this.index];
		delete this.storage[this.index];
		if (this.index > -1) {this.index--};
		return output;
	}

	size() {
		return this.index + 1;
	}

};