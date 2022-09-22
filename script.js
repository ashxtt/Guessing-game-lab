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
        while(this.guess !== this.secretNum){
            guess = this.getGuess();
            this.prevGuesses.push(guess);
            this.render(guess);
            if(guess === this.secretNum){
                return;
            }
        }
    },
    getGuess: function(){
        let getGuess = parseInt(prompt("Enter a guess between 1 - 100"))
        console.log(this.prevGuesses.push(this.getGuess));
        return guess;
        
    },
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
  console.log(game.getGuess())

