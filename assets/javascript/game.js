
//PSEUDOCODE
// start by selecting a random word to guess
// display dashes equal to the number of characters in word
// start with remaining guesses at 12


//  when player enters a letter check whether it is a match
//  if it is a match, display it within the word
//  	if it has already been guessed, take no action
//  	else take away a remaining guess and list the guessted letter below

// when the player wins (all numbers are guessed)
// choose another word at random for the player to guess


var guessesLeft = 12;

//make word options by making a set of arrays w/each word as [w,o,r,d]
//then make array full of those arrays, select item at random?

var pikachu = ['p', 'i', 'k', 'a', 'c', 'h', 'u'];
var bulbasaur = ['b', 'u', 'l', 'b', 'a', 's', 'a', 'u', 'r'];
var charmander = ['c', 'h', 'a', 'r', 'm', 'a', 'n', 'd', 'e', 'r'];
var squirtle = ['s', 'q', 'u', 'i', 'r', 't', 'l', 'e'];

var words = [pikachu, bulbasaur, charmander, squirtle];

var wordToGuess = words[Math.floor(Math.random() * words.length)];

console.log(wordToGuess);

//display wordToGuess as dashes

//NTS: how do I remove the commas?

var wordDisplay = [];

for (i = 0; i < wordToGuess.length; i++) {
	(wordDisplay).push('_ ');
}

document.write('<p id="wordDisplay">'+ wordDisplay +'</p>');


//display the number of remaining guesses
document.write(guessesLeft);


//check to see if the guess matches any of the letters in the word.
function checkWord(x) {
	for (i = 0; i < wordToGuess.length; i++) {
		if (x === wordToGuess[i]) {
			var correctGuess = true;
			break;
		} else {
			 correctGuess = false;
		}
	//end for loop to chec kfor matches	
	}

//if there is a match, replace the dashes in the word with the guess. if not, decrease the guess count and add the letter to the guess list	

	if (correctGuess) {
		console.log("You correctly guessed " + x);
		for (i = 0; i < wordToGuess.length; i++) {
			if (x === wordToGuess[i]) {
				wordDisplay.splice(i, 1, x);
				console.log(wordDisplay);
				document.getElementById("wordDisplay").innerHTML = wordDisplay;
			}
		}		
	} else {
		console.log("You incorrectly guessed " + x);
	}



// end checkWord 
}



//capture user input
 document.onkeyup = function(event) {
 	var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
 	console.log(userGuess);
 	checkWord(userGuess);
}



 //NTS: when solving the puzzle, have the letters disply in a array,

 //solving the thing will mean not having any more dashes
