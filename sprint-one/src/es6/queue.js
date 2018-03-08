class Queue {
	constructor() {
		this.storage = {};
		this.index = -1;
	}

	enqueue(val) {
		this.index++;
		this.storage[this.index] = val;
	}

	dequeue() {
		let output = this.storage[0];
		delete this.storage[0];
		let keys = Object.keys(this.storage);

		let self = this;
		keys.forEach(function(i) {
			if (!self.hasOwnProperty(i - 1)) {
				self.storage[i - 1] = self.storage[i];
			}
		});

		this.index = keys.length - 1;
		return output;
	}

	size() {
		return this.index + 1;
	}

};