const ListNode = require('../extensions/list-node');
/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 *
 */

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  size() {
    // console.log(this.length);
    return this.length;
  }

  enqueue(element) {
    const newNode = new ListNode(element);
    // console.log(newNode);
    newNode.next = this.head;
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.length++;
  }

  dequeue() {
    if (!this.head) return null;
    const tmp = this.head;
    this.head = this.head.next;

    if (this.head === this.tail) {
      this.tail = null;
    }

    this.length--;
    return tmp.value;
  }
}

module.exports = Queue;
