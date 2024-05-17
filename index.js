#! /usr/bin/env node
import inquirer from "inquirer";
let guess = 5;
let guessAns = await inquirer.prompt({
    name: "your guess",
    message: "Guess the number between 1 to 10",
    type: "number"
});
if (guessAns["your guess"] === guess) {
    console.log("Congratulations! your guess is correct");
}
else {
    console.log("Oops! your guess is wrong");
}
