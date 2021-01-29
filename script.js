var diceOne  = document.getElementById('dice1');
var diceTwo = document.getElementById('dice2');
var roll  = document.getElementById('roll');


function rollDice() {

var randomDiceOne = Math.floor((Math.random() * 6) + 1);
 var randomDiceTwo = Math.floor((Math.random() * 6) + 1);
  
  for (var i = 1; i <= 6; i++) {
    diceOne.classList.remove('show-' + i);
    if (randomDiceOne === i) {
      diceOne.classList.add('show-' + i);
    }
  }
  
  for(var j=1;j <= 6; j++) {
    diceTwo.classList.remove('show-' + j);
    if(randomDiceTwo === j) {
      diceTwo.classList.add('show-' + j);
    }
  }
  console.log(randomDiceOne);
console.log(randomDiceTwo);
roll.onclick = function () {rollDice();};
if(randomDiceOne > randomDiceTwo) {
		document.querySelector("h1").innerHTML = "🚩Player 1 Wins!";
	} else if (randomDiceTwo > randomDiceOne) {
		document.querySelector("h1").innerHTML = "Player 2 Wins!🚩"
	} else {
		document.querySelector("h1").innerHTML = "Draw!";
	}	 
}

