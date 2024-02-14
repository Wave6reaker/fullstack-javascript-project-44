import readlineSync from 'readline-sync';
console.log("Welcome to the Brain Games!");
const name = readlineSync.question('May I have your name? ');
console.log("Hello, " + name + "!");
console.log('Answer "yes" if the number is even, otherwise answer "no". ');

function isEven(num) {
    return num % 2 === 0;
}
function Game() {
    const need = 3;
    let correct = 0;

    while (correct < need) {
        const num = Math.floor(Math.random() * 100) + 1;
        console.log(`Question: ${num}`);
        const user = readlineSync.question("Your answer: ").toLowerCase().trim();

        if ((isEven(num) && user === 'yes') || (!isEven(num) && user === 'no')) {
            console.log("Correct!");
            correctAnswers++;
        } else {
            const correct = isEven(num) ? 'yes' : 'no';
            console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correct}'.`);
            console.log("Let's try again");
            return;
        }
    }
    console.log('Congratulations!');
}
Game();
  