// LimitedStack.js
class LimitedStack {
    // Constructor takes a max size for the stack
    constructor(limit) {
      this.limit = limit;  // Maximum number of elements allowed
      this.items = [];  // The stack will be represented by an array
    }
  
    // Method to add an item to the stack
    push(element) {
      if (this.items.length >= this.limit) {
        console.log("Error: The stack is full");
      } else {
        this.items.push(element);
      }
    }
  
    // Method to remove and return the top element from the stack
    pop() {
      if (this.items.length === 0) {
        console.log("Error: The stack is empty");
        return undefined;
      }
      return this.items.pop();
    }
  
    // Method to check the current size of the stack
    size() {
      return this.items.length;
    }
  
    // Method to see the top item of the stack without removing it
    peek() {
      if (this.items.length === 0) {
        console.log("Error: The stack is empty");
        return undefined;
      }
      return this.items[this.items.length - 1];
    }
  }
  
  // Example usage:
  let myStack = new LimitedStack(3);
  
  myStack.push("A");
  myStack.push("B");
  myStack.push("C");
  myStack.push("D");  // "Error: The stack is full"
  