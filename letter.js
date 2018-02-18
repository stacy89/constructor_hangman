var Letter = function(letter) {
	this.guess = letter;
	this.guesses = false;
	this.charChecker function() {
		if (!this.guesses) {
			return this.guess;	
		} else {
			return "_";
		}	
	};
	this.correctGuess function(char) {
		if (char === this.guess) {
			this.guesses = true;
		} else {
			this.guesses = false;
		}	
	};
};

module.exports = Letter;