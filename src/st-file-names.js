import { NotImplementedError } from '../extensions/index.js';

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
 export default function renameFiles(names) {
  let number = 1;
  for(let i = 0; i < names.length; i++) {
    let currentName = names[i];
    let temp;
    if(currentName != temp) number = 1;
    for(let j = 0; j < names.length; j++) {
      temp = currentName;
      if(names[j] == currentName && j != i) {
        names[j] = names[j] + `(${number})`;
        number++;
      }
    }
  }
  return names;
}

