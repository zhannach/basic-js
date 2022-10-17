const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
   let finalStr = String(str)
   const {repeatTimes, 
    separator = '+', 
    addition, 
    additionRepeatTimes, 
    additionSeparator = "|" } = options


    if (addition || addition === null || addition === false) {
      for (let i = 0; i < (additionRepeatTimes || 1); i++) {
       finalStr += String(addition) + additionSeparator
      }
      finalStr = finalStr.slice(0, -additionSeparator.length)   
    }

    let newFinStr = ""
    if(repeatTimes) {
      for (let j = 0; j < repeatTimes; j++) {
        newFinStr += finalStr + separator
      }
    } else {
      newFinStr = finalStr
    }

    return repeatTimes ? newFinStr.slice(0, -separator.length) : newFinStr
}


module.exports = {
  repeater
};
