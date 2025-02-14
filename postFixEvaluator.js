// PostfixEvaluator.js

// Import the Stack class
const Stack = require('./Stack');

// Function to evaluate a postfix expression
function evaluatePostfix(expression) {
    const stack = new Stack(); // Create an instance of the stack
    const tokens = expression.split(' '); // Split the expression into tokens (numbers and operators)

    // Iterate through each token in the expression
    for (const token of tokens) {
        if (!isNaN(token)) {
            // If the token is a number, push it onto the stack
            stack.push(Number(token));
        } else {
            // If the token is an operator, pop the last two numbers and apply the operation
            const operand2 = stack.pop();
            const operand1 = stack.pop();

            // Check if the operands are valid
            if (typeof operand1 !== 'number' || typeof operand2 !== 'number') {
                throw new Error('Invalid postfix expression');
            }

            // Perform the corresponding operation
            let result;
            switch (token) {
                case '+':
                    result = operand1 + operand2;
                    break;
                case '-':
                    result = operand1 - operand2;
                    break;
                case '*':
                    result = operand1 * operand2;
                    break;
                case '/':
                    result = operand1 / operand2;
                    break;
                default:
                    throw new Error(`Unsupported operator: ${token}`);
            }

            // Push the result of the operation back onto the stack
            stack.push(result);
        }
    }

    // At the end, the result should be the only element in the stack
    if (stack.size() !== 1) {
        throw new Error('Invalid postfix expression');
    }

    return stack.pop(); // Return the final result
}

// Example usage
const expression = '3 4 + 5 *'; // Postfix expression: (3 + 4) * 5
try {
    const result = evaluatePostfix(expression);
    console.log(`The result of the expression "${expression}" is: ${result}`);
} catch (error) {
    console.error(error.message);
}