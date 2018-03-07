var Queue = function() {
  var someInstance = {};
  var storage = {};
  var index = -1;

  // Implement the methods below
  someInstance.enqueue = function(value) {
  	index++;
  	storage[index] = value;
  };

  someInstance.dequeue = function() {
  	let output = storage[0];
  	delete storage[0];
  	let keys = Object.keys(storage);

  	keys.forEach(function(i) {
  		if (!storage.hasOwnProperty(i - 1)) { storage[i - 1] = storage[i];  }
  	});

  	index = keys.length - 1;
  	return output;
  };

  someInstance.size = function() {
  	return index + 1;
  };

  return someInstance;
};
