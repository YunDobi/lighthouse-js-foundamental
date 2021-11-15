const squareCode = function(message) {
    message = message.replaceAll(' ', '')
    let size = Math.ceil(Math.sqrt(message.length));
    let list = []
    let out = []
    let counter = 0

    for(let i = 0; i < size; i++){
        for(let j = 0 + counter; j < message.length; j += size){
            list.push(message[j])
        }
        counter ++
        out.push(list.join(''))
        list = []
    }
    
    return out.join(' ')
  };
  
  console.log(squareCode("chill out"));
//   console.log(squareCode("feed the dog"));
//   console.log(squareCode("have a nice day"));
  //console.log(squareCode("if man was meant to stay on the ground god would have given us roots"));
  