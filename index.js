const { repeater } = require('./src/extended-repeater.js');


   console.log(repeater(true, { repeatTimes: 3, separator: '??? ', addition: false, additionRepeatTimes: 2, additionSeparator: '!!!' }),11, 'truefalse!!!false??? truefalse!!!false??? truefalse!!!false');
      console.log(repeater(null, { repeatTimes: 3, separator: '??? ', addition: null, additionRepeatTimes: 3, additionSeparator: '!!!' }),22, 'nullnull!!!null!!!null??? nullnull!!!null!!!null??? nullnull!!!null!!!null');