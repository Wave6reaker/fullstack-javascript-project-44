import { randomInt } from 'lodash';
import runGame from '../index.js';

const gameDescription = 'What is the result of the expression?';
const operations = ['+', '-', '*'];

const generateRoundData = () => {
  const num1 = randomInt(1, 100);
  const num2 = randomInt(1, 100);
  const operation = operations[randomInt(0, operations.length - 1)];
  const question = `${num1} ${operation} ${num2}`;

  let correctAnswer;
  switch (operation) {
    case '+':
      correctAnswer = String(num1 + num2);
      break;
    case '-':
      correctAnswer = String(num1 - num2);
      break;
    case '*':
      correctAnswer = String(num1 * num2);
      break;
    default:
      break;
  }

  return { question, correctAnswer };
};

export default () => runGame(gameDescription, generateRoundData);