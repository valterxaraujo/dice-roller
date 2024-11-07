function rollDice(dice){
    var randomDice = Math.floor((Math.random()*6)+1);
    document.querySelector(dice).setAttribute("src","./images/dice" + randomDice + ".png");
    return randomDice
}

var randomDice1 = rollDice(".img1");
var randomDice2 = rollDice(".img2")

if(randomDice1 > randomDice2){
    document.querySelector("h1").textContent = "🚩 Player 1 Wins!"
}else if(randomDice2 > randomDice1){
    document.querySelector("h1").textContent = "Player 2 Wins! 🚩"
}else{
    document.querySelector("h1").textContent = "Draw"
}


