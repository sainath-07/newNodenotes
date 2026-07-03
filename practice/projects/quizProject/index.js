import fs from "fs";
import readline from "readline";
import chalk from "chalk";

// load questions
const questions = JSON.parse(fs.readFileSync("options.json", "utf8"));

// CL setup

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// quiz logic
let score = 0;
let index = 0;

console.log(chalk.blue.bold("WELCOME TO QUIZ APP."));

function askQuestion() {
  if (index < questions.length) {
    const q = questions[index];
    console.log(`Question ${index + 1} : ${q.question}`);

    q.options.forEach((element, index) => {
      console.log(`options ${index + 1} : ${element}`);
    });

    rl.question("Enter ANSWER: ", (answer) => {
      if (q.answer === parseInt(answer)) {
        console.log(`Congrats  you are ANSWER is  CORRECT !!!`);
        index++;
        score++;
        askQuestion()
      } else {
        console.log(`WRONG ANSWER !!`);
        index++;
        askQuestion()
      }
    });


  }
  else{
    console.log(`Game ended! , score: ${score}/${questions.length} `)

    console.log(`BYE!! HAVE A GOOD DAY...`)
    rl.close()
  }
}

askQuestion()
