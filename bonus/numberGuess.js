let prompt = require("prompt-sync")();
let target = Math.floor(Math.random() * 100)
let history = []
let counter = 0
console.log(target)

while(true) {
    let answer = prompt("Guess a number: ");
    let numberAnswer = Number(answer)

    if(history.includes(numberAnswer)) {
        console.log('Already Guessesd!')
        continue
    }
    if((numberAnswer) < target) {
        console.log(`Low!`);
        counter += 1
        history.push(numberAnswer)
    }
    else if(numberAnswer > target) {
        console.log('High');
        counter +=1
        history.push(numberAnswer)
    }
    else if(numberAnswer === target) {
        console.log(typeof(numberAnswer))
        console.log(`You got it! You took ${counter} attemps!`);
        break;
    }
    else {
        console.log('Not a Number. Try again!')
    }
}