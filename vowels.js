const numberOfVowels = function(data){
    let counter = 0
    for(let letter of data){
        if(letter ==="a" || letter === "e" || letter === "i" || letter === "o" || letter === "u"){
            counter += 1;
        }
    }
    return counter
}

console.log(numberOfVowels("lighthouse labs"));