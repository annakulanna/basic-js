import { NotImplementedError } from '../extensions/index.js';

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
export default function repeater(str, options) {
  if (arguments.length === 1)
    return str;

  if (!options.hasOwnProperty('separator'))
    options.separator = '+';
  if (!options.hasOwnProperty('additionSeparator'))
    options.additionSeparator = '|';
  if (!options.hasOwnProperty('repeatTimes'))
    options.repeatTimes = 1;
  if (!options.hasOwnProperty('additionRepeatTimes'))
    options.additionRepeatTimes = 1;
  if (!options.hasOwnProperty('addition') || options.hasOwnProperty('addition') === null)
    options.addition = '';

  let arr = [];
  for (let i = 0; i < options.repeatTimes; i++) {
    let par = [];
    for (let j = 0; j < options.additionRepeatTimes; j++) {
      par.push(String(options.addition));
    }
    arr.push(str + par.join(options.additionSeparator));
  }

  return arr.join(options.separator)

}
