var Stack = function() {
  var newStack = {
    storage: {},
    index: -1
  };

  extend(newStack, stackMethods);
  return newStack;
};

var extend = function(to, from) { //via giraffeExtend
  for (var key in from) {
    to[key] = from[key];
  }
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