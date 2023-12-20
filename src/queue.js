const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {

 constructor(){
  this.queue = {};
  this.head = 0;
  this.tail = 0;
  }
  getUnderlyingList(){
    let UnderlyingList = null;
    function addList(list){
      UnderlyingList = creation(UnderlyingList, list);

      function creation(UnderlyingList, list){
      if(!UnderlyingList){
      return new ListNode(list);
      } else {
        UnderlyingList.next = creation(UnderlyingList.next, list);
      }
      return UnderlyingList;
      }
    }
    let i = this.head;
    while(i < this.tail){
      addList(this.queue[i]);
      i++;
    }   
    return UnderlyingList; 

  }
  enqueue(value) {
  this.queue[this.tail] = value;
  this.tail++;
  }

  dequeue() {
    let residue = this.queue[this.head];
    delete this.queue[this.head];
    this.head++;
    return residue;
  }
}

module.exports = {
  Queue
};
