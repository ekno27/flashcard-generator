var BasicCard = require("./BasicCard");
var ClozeCard = require("./ClozeCard");
var inquirer = require("inquirer");

var q1 = new BasicCard("Who is the king?", "natalie");
console.log(q1.front);
var q2 = new ClozeCard("Your mom is a very nice lady", "Your mom");
console.log(q2.partial);

inquirer.prompt([
    
])