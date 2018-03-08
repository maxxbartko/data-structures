var Queue = function() {
	var newQueue = Object.create(queueMethods);
	newQueue.storage = {};
	newQueue.index = -1;
	return newQueue;
};

var queueMethods = {
	enqueue: function(val) {
		this.index++;
		this.storage[this.index] = val;
	},

	dequeue: function() {
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
	},

	size: function() {
		return this.index + 1;
	}
};