//basic card
function BasicCard(front, back){
    this.type ="basic";
    this.front = front;
    this.back = back.toLowerCase();
    
}

module.exports = BasicCard;

// var firstPresident = new BasicCard("Who was the first president of the US", "George W. ");

// console.log(firstPresident.front);
// console.log(firstPresident.back);
