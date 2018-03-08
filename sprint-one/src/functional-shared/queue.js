var Queue = function() {
  var newQueue = {
  	storage: {},
  	index: -1
  }

  extend(newQueue, queueMethods);
  return newQueue;
};

var extend = function(to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
};

var queueMethods = {
	enqueue: function(value) {
  	this.index++;
  	this.storage[this.index] = value;
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