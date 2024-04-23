#! /usr/bin/env node
import inquirer from "inquirer";
// 1) Computer will generate random number
// 2) User input for guessing the number
// 3) Compare user input with computer generated number and show result - done
const randomNumber = Math.floor(Math.random() * 10 + 1);
const answers = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "Please guess a number between 1-10: ",
    },
]);
if (answers.userGuessedNumber === randomNumber) {
    console.log("Congratulations! You Guessed it Right number!");
}
else {
    console.log("Oops! You Guessed it Wrong number!");
}
