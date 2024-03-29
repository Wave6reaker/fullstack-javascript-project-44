import readlineSync from 'readline-sync';
import welcomeUser from '../cli.js';

const generateProgression = () => {
  const progressionLength = Math.floor(Math.random() * 6) + 5;
  const start = Math.floor(Math.random() * 50);
  const step = Math.floor(Math.random() * 10) + 1;

  const progression = [start];
  for (let i = 1; i < progressionLength; i += 1) {
    progression.push(progression[i - 1] + step);
  }

  return progression;
};

const hideElementInArray = (arr) => {
  const newArr = [...arr];
  const hiddenIndex = Math.floor(Math.random() * newArr.length);
  const hiddenValue = newArr[hiddenIndex];
  newArr[hiddenIndex] = '..';
  return { progression: newArr, hiddenValue };
};

const playProgressionGame = () => {
  const playerName = welcomeUser();

  console.log('What number is missing in the progression?\n');

  let correctAnswersCount = 0;

  while (correctAnswersCount < 3) {
    const { progression, hiddenValue } = hideElementInArray(generateProgression());

    console.log(`Question: ${progression.join(' ')}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (Number(userAnswer) === hiddenValue) {
      console.log('Correct!\n');
      correctAnswersCount += 1;
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${hiddenValue}'.\n`);
      console.log(`Let's try again, ${playerName}!\n`);
      return;
    }
  }

  console.log(`Congratulations, ${playerName}!\n`);
};

export default playProgressionGame;
