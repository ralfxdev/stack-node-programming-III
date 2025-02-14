// Stack.js
class Stack {
    constructor() {
        this.items = []; // Array to store stack elements
    }

    // Method to add an element to the stack
    push(element) {
        this.items.push(element);
    }

    // Method to remove and return the top element of the stack
    pop() {
        if (this.isEmpty()) {
            throw new Error("Stack is empty");
        }
        return this.items.pop();
    }

    // Method to view the top element without removing it
    peek() {
        if (this.isEmpty()) {
            throw new Error("Stack is empty");
        }
        return this.items[this.items.length - 1];
    }

    // Method to check if the stack is empty
    isEmpty() {
        return this.items.length === 0;
    }

    // Method to get the size of the stack
    size() {
        return this.items.length;
    }

    // Method to print the stack
    print() {
        console.log(this.items.toString());
    }
}

module.exports = Stack;