# Hangman-Game
_Created as part of the Northwestern Coding Boot Camp curriculum._

## A game of hangman with a Pokemon theme! 

The game itself is written with the logic of comparing the characters guessed by the user to the actual word. The word is stored as an array, allowing for ease of tracking and comparison. The player is given 12 "lives" in which to guess letters. The game counts the players wins, and tracks the letters guessed.

Play it here: https://pokeguess.herokuapp.com

## If I were to refactor this project, I would do the following:
* Break down some of the reset tasks (like resetting the word to guess) into their own functions to avoid the repetive code that occurs when the game is initially loaded and when the game is reset.
* Change the presentation of the word to guess from being an array to a string in order to avoid the problem of commas displaying on screen.
* Add some of the interactive language that is currently occuring in the console.log (such as, "you already guessed this letter") to the actual DOM display.


## Technologies Used
* HTML
* CSS
* JavaScript
