import readlineSync from 'readline-sync';
console.log("Welcome to the Brain Games!");
const name = readlineSync.question('May I have your name? ');
console.log("Hello, " + name + "!");
console.log('Answer "yes" if the number is even, otherwise answer "no". ');

function isEven(num) {
    return num % 2 === 0;
}

function playGame() {
    const correctAnswersNeeded = 3;
    let correctAnswers = 0;

    while (correctAnswers < correctAnswersNeeded) {
        const num = Math.floor(Math.random() * 100) + 1;
        console.log(`Question: ${num}`);
        const userAnswer = readlineSync.question("Your answer: ").toLowerCase().trim();

        if ((isEven(num) && userAnswer === 'yes') || (!isEven(num) && userAnswer === 'no')) {
            console.log("Correct!");
            correctAnswers++;
        } else {
            const correctAnswer = isEven(num) ? 'yes' : 'no';
            console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
            console.log("Let's try again");
            return;
        }
    }

    console.log('Congratulations!');
}

playGame();
  