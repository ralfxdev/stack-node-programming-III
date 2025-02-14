class UndoManager {
    // Constructor initializes the actions stack
    constructor() {
      this.actions = [];  // Stack to store the actions
    }
  
    // Method to add an action to the stack
    addAction(action) {
      this.actions.push(action);
    }
  
    // Method to undo the last action by removing it from the stack
    undo() {
      if (this.actions.length === 0) {
        console.log("Error: No actions to undo");
        return;
      }
      this.actions.pop();
    }
  
    // Method to get the current history of actions
    getHistory() {
      return this.actions;
    }
  }
  
  // Example usage:
  const manager = new UndoManager();
  
  manager.addAction("Write 'Hello'");
  manager.addAction("Write 'World'");
  console.log(manager.getHistory()); // ["Write 'Hello'", "Write 'World'"]
  
  manager.undo();
  console.log(manager.getHistory()); // ["Write 'Hello'"]
  