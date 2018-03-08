var Stack = function() {
  	this.storage = {};
  	this.index = -1;
};

Stack.prototype.push = function(val) {
	this.index++;
	this.storage[this.index] = val;
}

Stack.prototype.pop = function() {
	let output = this.storage[this.index];
	delete this.storage[this.index];
	if (this.index > -1) {this.index--};
	return output;
}

Stack.prototype.size = function() {
	return this.index + 1;
}