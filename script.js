const game = {
    title: "Guess the Number!",
    biggestNum: 100,
    smallestNum: 1,
    secretNum: null,
    prevGuesses: [],
    play: function () {
      this.secretNum =
        Math.floor(Math.random() * (this.biggestNum - this.smallestNum + 1)) +
        this.smallestNum

        let guess;
        //guess is not a property of object so your while loop should only use guess not this.guess
        while(guess !== this.secretNum){
            guess = this.getGuess();
            //i used the push in getGuess() so I commented this out
            //this.prevGuesses.push(guess);
            this.render(guess);
            if(guess === this.secretNum){
                return;
            }
            //break the loop if the user hits cancel
            if(!guess)break
        }
    },
    getGuess: function(){
        let getGuess = parseInt(prompt("Enter a guess between 1 - 100"))
        //instead of console.log() I changed it to the below using the getGuess variable above
        this.prevGuesses.push(getGuess)
        //console.log(this.prevGuesses.push(this.getGuess));

        //you need to return getGuess because that is what you named it on line 23
        return getGuess;
        
    },

    // your render function looks great doing exactly what render should do with a parameter passed to it
    render: function(guess){
        if(guess > this.secretNum){
            alert('Your guess is too high')
        }else if(guess < this.secretNum){
            alert('Your guess is too low')
        }else if(guess === this.secretNum){
            alert(`congrats! You guessed the number in ${this.prevGuesses.length} Guesses!`)
        }

    }


  }
game.play()
  //console.log(game.getGuess())

