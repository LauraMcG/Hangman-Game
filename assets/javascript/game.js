
//PSEUDOCODE
// start by selecting a random word to guess
// display dashes equal to the number of characters in word
// start with remaining guesses at 12


//  when player enters a letter check whether it is a match
//  if it is a match, display it within the word
//  	if it has already been guessed, take no action
//  	else take away a remaining guess and list the guessed letter below

// when the player wins (all letters are guessed)
// choose another word at random for the player to guess





//make word options by making a set of arrays w/each word as [w,o,r,d]
//then make array full of those arrays, select item at random?

var pikachu = ['p', 'i', 'k', 'a', 'c', 'h', 'u'];
var bulbasaur = ['b', 'u', 'l', 'b', 'a', 's', 'a', 'u', 'r'];
var charmander = ['c', 'h', 'a', 'r', 'm', 'a', 'n', 'd', 'e', 'r'];
var squirtle = ['s', 'q', 'u', 'i', 'r', 't', 'l', 'e'];

var words = [pikachu, bulbasaur, charmander, squirtle];

var wordToGuess = words[Math.floor(Math.random() * words.length)];

console.log(wordToGuess);

// display wordToGuess as dashes

// NTS: how do I remove the commas?

var winCount = 0;

document.write('<p id="wins"> Wins: '+ winCount +'</p>');

var wordDisplay = [];

for (i = 0; i < wordToGuess.length; i++) {
	(wordDisplay).push('_ ');
}

document.write('<p id="wordDisplay">'+ wordDisplay +'</p>');

//create function for finding new word

var guessesLeft = 12;


//display the number of remaining guesses
document.write('<p id="guessesLeft">'+ guessesLeft +'</p>');


//to collect the  incorrect letters guessed by the user
var guessedLetters = [];

//display guessed letters
document.write('<p id="guessedLetters"> Guessed letters: '+ guessedLetters +'</p>');


//NTS: don't repeat yourself -- how do i get something like this to run on load?
function resetGame () {

	document.getElementById("wins").innerHTML = 'Wins: '+ winCount;

	wordToGuess = words[Math.floor(Math.random() * words.length)];
	console.log(wordToGuess);

	wordDisplay.length = 0;

	for (i = 0; i < wordToGuess.length; i++) {
		(wordDisplay).push('_ ');
	}

	document.getElementById("wordDisplay").innerHTML = wordDisplay;

	guessesLeft = 12;
	document.getElementById("guessesLeft").innerHTML = guessesLeft;

	guessedLetters.length = 0;
	document.getElementById("guessedLetters").innerHTML = 'Guesssed Letters: ' + guessedLetters;

 //end resetGame
 }

//check to see if the guess matches any of the letters in the word.
//start checkWord
function checkWord(x) {

	//if there is a match, replace the dashes in the word with the guess. 
	if (wordToGuess.includes(x)) {

		for (i = 0; i < wordToGuess.length; i++) {
			if (x === wordToGuess[i]) {
				wordDisplay.splice(i, 1, x);
				document.getElementById("wordDisplay").innerHTML = wordDisplay;
			}
		}	

		//then check to see if there is a win
		if (wordDisplay.includes("_ ")) {
			console.log("you've got more to guess");
		} else {
			winCount = winCount + 1;

			console.log("you won this many times:" + winCount);
			document.getElementById("wins").innerHTML = 'Wins: '+ winCount;

			alert("you won!");
			
			resetGame();
		}

	//if it is not a correct guess, then check to see if the letter has already been guessed
	} else  if (guessedLetters.includes(x)){

				console.log("you already guessed " + x );

	// if it is a new incorrect guess, decrease the guess count and add the letter to the guess list
	} else {
				guessesLeft = guessesLeft - 1;

				document.getElementById("guessesLeft").innerHTML = guessesLeft;

				guessedLetters.push(x);

				document.getElementById("guessedLetters").innerHTML = 'Guessed letters: '+ guessedLetters;
				console.log("You incorrectly guessed " + x);

				if (guessesLeft === 0) {
					alert("you lost!");
					resetGame();
				}

// end if/else for correct guess
	}

// end checkWord
}

//capture user input
 document.onkeyup = function(event) {

 	var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

 	console.log(userGuess);
 	checkWord(userGuess);
}