var Letter = require("./letter");

var Word = function(txt) {
	this.currentWord = txt;
	this.letters = [];
	this.wordDisplay = "";

	this.wordSearch function() {
		for (i = 0; i < this.currentWord.length; i++) {
			var letter = new Letter(this.currentWord[i]);
			this.letter.push(letter);
		}
	};

	this.displayWord function() {
		//displays the word if the letters are guess correctly  
	};
	// wordSearch();
	// displayWord();

};
// var newWord = new Word("apple");
// console.log(newWord);