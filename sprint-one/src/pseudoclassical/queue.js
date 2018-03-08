var Queue = function() {
	this.storage = {};
	this.index = -1;
};

Queue.prototype.enqueue = function(val) {
	this.index++;
	this.storage[this.index] = val;
};

Queue.prototype.dequeue = function() {
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
};

Queue.prototype.size = function() {
	return this.index + 1;
};