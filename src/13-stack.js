/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
class Stack {
  constructor() {
    this.stack = [];
    this.count = 0;
  }

  push(element) {
    this.stack[this.count] = element;
    this.count++;
    return this.count - 1;
  }

  pop() {
    if (this.count === 0) return undefined;
    const delItem = this.stack[this.count - 1];
    this.count--;
    return delItem;
  }

  peek() {
    return this.stack[this.count - 1];
  }
}

module.exports = Stack;
