import { randomInt } from 'lodash';
import runGame from '../index.js';

const gameDescription = 'Find the greatest common divisor of given numbers.';

const findGcd = (num1, num2) => {
  while (num2 !== 0) {
    const temp = num2;
    num2 = num1 % num2;
    num1 = temp;
  }
  return Math.abs(num1);
};

const generateRoundData = () => {
  const number1 = randomInt(1, 100);
  const number2 = randomInt(1, 100);
  const question = `${number1} ${number2}`;
  const correctAnswer = String(findGcd(number1, number2));
  return { question, correctAnswer };
};

export default () => runGame(gameDescription, generateRoundData);