import readlineSync from 'readline-sync';
import playCalcGame from './games/brain-calc.js';
import playEvenGame from './games/brain-even.js';
import playGCDGame from './games/brain-gcd.js';
import playProgressionGame from './games/brain-progression.js';
import playPrimeGame from './games/brain-prime.js';
import welcomeUser from './cli.js';

export const chooseGame = () => {
  console.log('Please choose a game:');
  console.log('1. Calculator Game');
  console.log('2. Even Number Game');
  console.log('3. Greatest Common Divisor Game');
  console.log('4. Arithmetic Progression Game');
  console.log('5. Prime Number Game');

  const choice = readlineSync.question('Enter the number of the game you want to play: ');

  switch (choice) {
    case '1':
      playCalcGame();
      break;
    case '2':
      playEvenGame();
      break;
    case '3':
      playGCDGame();
      break;
    case '4':
      playProgressionGame();
      break;
    case '5':
      playPrimeGame();
      break;
    default:
      console.log('Invalid choice. Please enter a valid number.');
      chooseGame();
  }
};

export const startGame = () => {
  welcomeUser();
  chooseGame();
};