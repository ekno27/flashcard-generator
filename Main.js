var BasicCard = require("./BasicCard");
var ClozeCard = require("./ClozeCard");
var inquirer = require("inquirer");


//function declaration 
function askQuestion(question, type){
    if(type ==="cloze"){
        inquirer.prompt([
            {
                type:"input",
                message: question.partial,
                name: "userInput"
            }
            
        ]).then(function(response){
            if(response.userInput.toLowerCase() ===question.cloze.toLowerCase()){
                correctCount++;
                console.log("Correct!")
            }else{
                incorrectCount++;
                console.log("incorrect. The correct answer is: \n"+ question.fullText);
            }
            counter++;
            if (counter<questions.length){
                askQuestion(questions[counter], questions[counter].type);
            }else{
                gameOver();
            }
        });

    }
    else if(type ==="basic"){
        inquirer.prompt([
            {
                type:"input",
                message: question.front,
                name: "userInput"
                
            }
            
        ]).then(function(response){
            if(response.userInput ===question.back){
                correctCount ++;
                console.log("Correct!")
            }else{
                incorrectCount++;
                console.log("incorrect. The correct answer is: "+ question.back);
            }
            counter++;
            if (counter<questions.length){
                askQuestion(questions[counter], questions[counter].type);
            }else{
               gameOver();
            }
        });

    }
   
}

function gameOver(){
    console.log("\n\nend of Questions!");
    console.log("Number of Correct: "+ correctCount);
    console.log("Number of incorrect: "+ incorrectCount);

}
//variable declaration
var counter = 0;
var correctCount=0;
var incorrectCount=0;

//question making
questions = [];

//questions. Only wrote 6 because let's be honest--You don't really wanna go through 10 questions for each person when 6 is enough to show profficiency at the subject at hand 
var q1 = new BasicCard("How many states does the US Have?", "50");
questions.push(q1);
var q2 = new BasicCard("Is this gonna be another dumb quiz full of illogical answers ", "No");
questions.push(q2);
var q3 = new ClozeCard("The author of this program was kidding in the previous question", "kidding");
questions.push(q3);
var q4 = new ClozeCard("If a cow falls in the middle of the forest, it moos", "cow");
questions.push(q4);
var q5 = new BasicCard("Who is a very nice lady?", "Everyone's mom");
questions.push(q5);
var q6 = new ClozeCard("Christopher Columbus's name in spanish is Cristobal Colon ", "Cristobal Colon");
questions.push(q6);



askQuestion(questions[counter], questions[counter].type);






