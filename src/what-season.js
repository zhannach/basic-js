const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(d) {
  if (d == undefined) {
    return 'Unable to determine the time of year!'
  } if (Object.prototype.toString.call(d) !== "[object Date]" || Object.getOwnPropertyNames(d).length) {
    throw new Error('Invalid date!')
  }

 
  var seasonArray = [
    {name: 'spring', date: new Date(d.getFullYear(),2,1).getTime()},
    {name: 'summer', date: new Date(d.getFullYear(),5,1).getTime()},
    {name: 'autumn', date: new Date(d.getFullYear(),8,1).getTime()},
    {name: 'winter', date: new Date(d.getFullYear(),11,1).getTime()}
];

const season = seasonArray.filter(({ date }) => date <= d).slice(-1)[0] || {name: "winter"}

return season.name
}


module.exports = {
  getSeason
};
