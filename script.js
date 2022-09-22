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
        
        }
    },
    getGuess: function(){
        let getGuess = parseInt(prompt("Enter a guess between 1 - 100"))
        console.log(this.prevGuesses.push(this.getGuess));
        return
        if(getGuess === secretNum){
            alert("You are right!")
        }else if(getGuess > secretNum){
            alert("You are wrong! Try again")
        }
    }


  }

