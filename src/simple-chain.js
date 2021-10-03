import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement chainMaker object according to task description
 * 
 */
 export default {
  chMake: [],
  getLength() {
      return this.chMake.length;
  },
  addLink(value = '') {
      this.chMake.push('( ' + value + ' )');
      return this;
  },
  removeLink(position) {
      if (this.chMake[position - 1] !== undefined) {
          this.chMake.splice(position - 1, 1);
          return this;
      }
      this.chMake = [];
      throw Error("You can't remove incorrect link!");
  },
  reverseChain() {
      this.chMake.reverse();
      return this;
  },
  finishChain() {
      let finishchMake = this.chMake.slice(0);
      this.chMake = [];
      return finishchMake.join('~~');

  }
};