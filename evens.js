var _ = require('lodash');

var evens_array = function(num) {

  return _.map(_.range(5), function (i) {
    return 2 * i;
  });
};

module.exports.evens_array = evens_array;
