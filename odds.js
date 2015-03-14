var _ = require('lodash');

var odds_array = function(num) {
  return _.map(_.range(5), function (i) {
    return 2 * i + 1;
  });
};

module.exports.odds_array = odds_array;
