#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk"; // fonts background color
console.log(`${chalk.bgMagentaBright.bold("\n\t\t.~~~~WELCOME TO TO-DO LIST APP~~~~.\n")}`);
let todos = [];
let condition = true;
while (condition) {
    //inquirer.prompt ([{ properties}])---> this is question of inquirer
    // let addTask =   its assign the answer of inquere now console this
    let addTask = await inquirer.prompt([
        {
            name: "todo",
            type: "input",
            message: "\tWhat you want to add in your Todos?"
        }, // sepration of objects
        {
            name: "addMore",
            type: "confirm",
            message: `${chalk.blueBright.bold('Do you want to add more element? in Todos?')}`,
            default: "false"
        }
    ]);
    todos.push(addTask.todo); // add element in todo
    condition = addTask.addMore;
    console.log(todos);
}
