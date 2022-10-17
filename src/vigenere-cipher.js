const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
    constructor(direct = true) {
      this.direct = direct;
    }
  
    encrypt(str, key) {
      if (!str || !key) {
        throw new Error('Incorrect arguments!')
      }
      str = str.toUpperCase();
      key = key.toUpperCase();
      const res = [];
      for (let i = 0, j = 0; i < str.length; i++) {
        if (str[i].match(/[A-Z]/)) {
          let char = (str[i].charCodeAt(0) - 'A'.charCodeAt(0) + (key[j % key.length].charCodeAt(0) - 'A'.charCodeAt(0))) % 26 + 'A'.charCodeAt(0);
          res.push(
            String.fromCharCode(char)
          );
          j++
        } else {
          res.push(str[i])
        }
      }
      return this.direct ? res.join('') : res.reverse().join('')
    }
  
    decrypt(str, key) {
      if (!str || !key) {
        throw new Error('Incorrect arguments!')
      }
      str = str.toUpperCase();
      key = key.toUpperCase();
      const res = [];
      for (let i = 0, j = 0; i < str.length; i++) {
        if (str[i].match(/[A-Z]/)) {
          let char = (str[i].charCodeAt(0) - 'A'.charCodeAt(0) + (26 - (key[j % key.length].charCodeAt(0) - 'A'.charCodeAt(0)))) % 26 + 'A'.charCodeAt(0)
          res.push(
            String.fromCharCode(char)
          );
          j++
        } else {
          res.push(str[i])
        }
      }
      return this.direct ? res.join('') : res.reverse().join('')
    }
  }

module.exports = {
  VigenereCipheringMachine
};
