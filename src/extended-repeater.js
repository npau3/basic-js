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
  let strings = []
  let additions = []
  let addition = ''

  if (!options.hasOwnProperty('repeatTimes') || options.repeatTimes === undefined) {
    options.repeatTimes = 0;
  }
  if (!options.hasOwnProperty('separator')) {
    options.separator = '+';
  }
  if (!options.hasOwnProperty('addition')) {
    options.addition = ''
  }
  if (!options.hasOwnProperty('additionRepeatTimes') || options.additionRepeatTimes === undefined) {
    options.additionRepeatTimes = 1;
  }
  if (!options.hasOwnProperty('additionSeparator')) {
    options.additionSeparator = '|';
  }

  if (options.repeatTimes === 0) strings.push(String(str))

  while (options.repeatTimes > 0) {
    strings.push(String(str))
    options.repeatTimes -= 1;
  }

  while (options.additionRepeatTimes > 0) {
    additions.push(String(options.addition))
    options.additionRepeatTimes -= 1;
  }
  addition = additions.join(options.additionSeparator)
  return strings.map(item => item + addition).join(options.separator)
};
