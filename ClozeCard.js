function ClozeCard(text, cloze){
    this.fullText = text;
    this.type = "cloze";

    this.cloze = cloze;
    if(this.fullText.indexOf(this.cloze)>=0){
        var wordArray = this.fullText.split(this.cloze);
        //check to see if the given cloze is in the given text
        this.partial= createPartial(wordArray);
    }
    else{
        console.log(" Error: Cloze is not in the given text!");
        return;
    }
}
function createPartial(wordArray){
    
    // console.log(wordArray);
    // wordArray.splice(1,0,"...");
    // console.log("After sploce: " + wordArray);
    if(wordArray[0]===""){
        // console.log("first is empty");
        wordArray[0]="...";
    }
    else if(wordArray[wordArray.length-1]===""){
        // console.log("this is last");
        wordArray[wordArray.length-1]= "...";
    }
    else if(wordArray[0]!=="" && wordArray[wordArray.length-1]!=="" ){
        // console.log("this is middle");
        wordArray.splice(1,0,"...");
    }
    
    var partial = wordArray.join(" ");

   return partial;
}

//Coded portion used to test functions 
// var q1 = new ClozeCard("George Washington is a huge man", "is a" );
// console.log("q1:  "+ q1.cloze);
// console.log("q1:  "+ q1.partial);
// console.log("q1:  "+ q1.fullText);

// var q2 = new ClozeCard("Nat is secretly Michael Cera", "George Washington" );

module.exports = ClozeCard;





