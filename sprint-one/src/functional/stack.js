var Stack = function() {
  var someInstance = {};
  var storage = {};
  var index = -1; //using 0-indexing

  someInstance.push = function(value) {
  	index++;
  	storage[index] = value;
  };

  someInstance.pop = function() {
  	let output = storage[index];
  	delete storage[index];
  	if (index > -1) { index-- };
  	return output;
  };

  someInstance.size = function() {
  	return index + 1; //ensured 1-indexing
  };

  return someInstance;
};