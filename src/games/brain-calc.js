import readlineSync from 'readline-sync';
import welcomeUser from '../cli.js';


const generateRandomNumber = () => Math.floor(Math.random() * 100) + 1;

const generateRandomOperator = () => {
  const operators = ['+', '-', '*'];
  const randomIndex = Math.floor(Math.random() * operators.length);
  return operators[randomIndex];
};

const calculateExpression = (num1, operator, num2) => {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      return NaN;
  }
};

const playCalcGame = () => {
  const playerName = welcomeUser(); 

  console.log('What is the result of the expression?\n');

  let correctAnswersCount = 0;

  while (correctAnswersCount < 3) {
    const num1 = generateRandomNumber();
    const num2 = generateRandomNumber();
    const operator = generateRandomOperator();

    console.log(`Question: ${num1} ${operator} ${num2}`);
    const userAnswer = readlineSync.question('Your answer: ');

    const correctAnswer = calculateExpression(num1, operator, num2);

    if (Number(userAnswer) === correctAnswer) {
      console.log('Correct!\n');
      correctAnswersCount += 1;
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\n`);
      console.log(`Let's try again, ${playerName}!\n`);
      return;
    }
  }

  console.log(`Congratulations, ${playerName}!\n`);
};

export default playCalcGame;