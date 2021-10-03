import { NotImplementedError } from '../extensions/index.js';

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
export default function countCats(a) {
    let catsIn = a;
    var count = 0;
    for(var i = 0; i < a.length; i++){
        for(var j = 0; j < a[i].length; j++){
            if(a[i][j] == "^^"){
                count++;
            }
        }
    }
    return count;
}
