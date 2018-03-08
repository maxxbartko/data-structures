var Stack = function() {
  var newStack = Object.create(stackMethods);
  newStack.storage = {};
  newStack.index = -1;
  return newStack;
};

var stackMethods = {
  push: function(val) {
    this.index++;
    this.storage[this.index] = val;
  },
  
  pop: function() {
    let output = this.storage[this.index];
    delete this.storage[this.index];
    if (this.index > -1) { this.index-- };
    return output;
  },

  size: function() {
  	return this.index + 1;
  }
};