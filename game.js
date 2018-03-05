        let wins = 0;
        let losses = 0;
        let guessesLeft = 10;
        let guesses = [];
        let userGuess;

        letterArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n",
                        "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

        let guesssIndex = Math.floor(Math.random() * letterArray.length);
        let chosenLetter = letterArray[guessIndex];
        //chooses letter from array

        document.onkeyup =  function(event) {
            let userGuess = String.fromCharCode(event.keyCode).toLowerCase();

            if(chosenLetter === userGuess){
                wins++;
                guessesLeft = 10;
                guesses = []; 
                let guesssIndex = Math.floor(Math.random() * letterArray.length);
                let chosenLetter = letterArray[guessIndex];
            }//if key pressed by user is the same as the selected letter of letterArray, wins increases while remaining data is reset
            else if(guessesLeft>0){
                guesses.concat(userGuess);
                guessesLeft--;
            }//if user did not correctly guess and they still have guesses remaining, what they did guess is added to guesses array and their guesses decrease
            else{
                losses++;
                guessesLeft = 10;
                guesses = []; 
                let guesssIndex = Math.floor(Math.random() * letterArray.length);
                let chosenLetter = letterArray[guessIndex];
            }//if user did not correctly guess and they have no guesses remaining, their "losses" increases by one and game resets

        
        var html = "<h1>PSYCHIC GAME</h1>" + "<h2>What Letter Am I Thinking?</h2>" + "<h3>Wins: " + wins + "</h3>" + "<h3>Losses: " + losses + "</h3>" + "<h3>Guesses Left: " + guessesLeft + "</h3>" + "<h3>You Have Guessed: " + guesses + "</h3>";

	    document.querySelector("#game").innerHTML = html;

        } //was having a lot of trouble figurng out how to get javascript events to appear and function in html for hangman & psychic game. found an example online that used this "var html = etcetcetc" format to push javascript events to html but it is not working for my code and i'm unsure why. similar is done with "document.querySelector..." in the solution for the questions game posted on gitlab. not sure why none of the activity is being displayed here though? 
        

