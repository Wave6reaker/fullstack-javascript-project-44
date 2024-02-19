import readlineSync from 'readline-sync';
import welcomeUser from '../cli.js';


const findGCD = (num1, num2) => {
  let a = num1;
  let b = num2;

  while (b !== 0) {
    const temp = b;
    b = a % b;
    a = temp;
  }

  return a;
};

const playGCDGame = () => {
  const playerName = welcomeUser(); 

  console.log('Find the greatest common divisor of given numbers.\n');

  let correctAnswersCount = 0;

  while (correctAnswersCount < 3) {
    const num1 = Math.floor(Math.random() * 100) + 1;
    const num2 = Math.floor(Math.random() * 100) + 1;

    console.log(`Question: ${num1} ${num2}`);
    const userAnswer = readlineSync.question('Your answer: ');

    const correctAnswer = findGCD(num1, num2);

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

export default playGCDGame;