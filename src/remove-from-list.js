const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */
function removeKFromList(l, k) {

  function has(l, k) {
    return searchNode(l, k);
    function searchNode(l, k) {
      if (l === null) {
        return false;
      }
      if (l.value === k) {
        return true;
      }
      return searchNode(l.next, k);
    }
  }
  // let prev = {};
  function removeNode(l, k) {
    
    if (k === l.value) {
      if (l.next){
      l.value = l.next.value;
      l.next = l.next.next;
      return l;
      } else {
        return null;
      }
    } else {
      // prev = l;
      l.next = removeNode(l.next, k);
      return l;
    }
  }

  while (has(l, k)) {
    removeNode(l, k);
  }

  return l;

}
  

  // l.forEach(function(l,k) {
  //  let
  //   if (l[i] = k) {
  // l.splice(i, 1);

//  return l;

module.exports = {
  removeKFromList
};


// function convertArrayToList(arr) {
//   return arr.reverse().reduce((acc, cur) => {
//     if (acc) {
//       const node = new ListNode(cur);
//       node.next = acc;
//       return node;
//     }

//     return new ListNode(cur);
//   }, null);
// }
// const initial = convertArrayToList([1, 2, 3]);
// console.log(initial);
// console.log(removeKFromList(initial, 3));