let currentInput = '';
let resultElement = document.getElementById('result');

function appendCharacter(character) {
  currentInput += character;
  updateResult();
}

function performOperation(operation) {
  currentInput += operation;
  updateResult();
}

function calculateResult() {
  try {
    const result = evaluateExpression(currentInput);
    currentInput = result.toString();
    updateResult();
  } catch (error) {
    currentInput = 'Error';
    updateResult();
  }
}

function clearResult() {
  currentInput = '';
  updateResult();
}

function updateResult() {
  resultElement.value = currentInput;
}

function isOperator(token) {
  return ['+', '-', '*', '/'].includes(token);
}

function getPrecedence(operator) {
  if (operator === '+' || operator === '-') return 1;
  if (operator === '*' || operator === '/') return 2;
  return 0;
}

function shuntingYard(tokens) {
  const outputQueue = [];
  const operatorStack = [];

  tokens.forEach(token => {
    if (!isNaN(token)) {
      outputQueue.push(parseFloat(token));
    } else if (isOperator(token)) {
      while (
        operatorStack.length > 0 &&
        getPrecedence(operatorStack[operatorStack.length - 1]) >= getPrecedence(token)
      ) {
        outputQueue.push(operatorStack.pop());
      }
      operatorStack.push(token);
    }
  });

  while (operatorStack.length > 0) {
    outputQueue.push(operatorStack.pop());
  }

  return outputQueue;
}

function evaluateExpression(expression) {
  const tokens = expression.split(/([+\-*/])/).map(token => token.trim()).filter(Boolean);
  const postfixExpression = shuntingYard(tokens);
  const stack = [];

  postfixExpression.forEach(token => {
    if (!isNaN(token)) {
      stack.push(token);
    } else if (isOperator(token)) {
      const operand2 = stack.pop();
      const operand1 = stack.pop();
      switch (token) {
        case '+':
          stack.push(operand1 + operand2);
          break;
        case '-':
          stack.push(operand1 - operand2);
          break;
        case '*':
          stack.push(operand1 * operand2);
          break;
        case '/':
          stack.push(operand1 / operand2);
          break;
      }
    }
  });

  return stack.pop();
}