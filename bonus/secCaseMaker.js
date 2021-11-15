const makeCase = function(input, cases) {
    input = input.trim()
    let temp = ""
    let final = ""   
    for(j = 0; j < cases.length; j++){
        if(cases[j] === 'camel'){
            for(i = 0; i < input.length; i++){
                if(input[i] === ' '){
                    temp += input[i+1].toUpperCase()
                    i++
                } else {
                    temp += input[i]
                }
            }
            input = temp
            temp = "" 
        }

        else if(cases[j] === 'pascal'){
            temp += input[0].toUpperCase()
            for(i = 1; i < input.length; i++){
                
                if(input[i] === " "){
                    temp += input[i+1].toUpperCase()
                    i++
                } else {
                    temp += input[i]
                }
            }
            input = temp
            temp = "" 
        }

        else if(cases[j] === 'snake') {
            for(i = 0; i < input.length; i++){
                if(input[i] === ' '){
                    temp += '_';
                } else {
                    temp += input[i]
                }
            }
            input = temp
            temp = ""
        }

        else if(cases[j] === 'kebab'){
            for(i = 0; i < input.length; i++){
                if(input[i] === ' '){
                    temp += '-';
                } else {
                    temp += input[i]
                }
            }
            input = temp
            temp = "" 
        }

        else if(cases[j] === 'title'){
            temp += input[0].toUpperCase()
            for(i = 1; i < input.length; i++){
                if(input[i-1] === ' '){
                    temp += input[i].toUpperCase();
                } else {
                    temp += input[i]
                }
            }
            input = temp
            temp = ""  
        }

        else if(cases[j] === 'vowel'){
            let sound = ['a', 'e', 'i', 'o', 'u']
            for(i = 0; i < input.length; i++){
                if(sound.includes(input[i])){
                    temp += input[i].toUpperCase()
                } else {
                    temp += input[i]
                }
            }
            input = temp
            temp = "" 
        }

        else if(cases[j] === 'consonant'){
            let sound = ['a', 'e', 'i', 'o', 'u']
            for(i = 0; i < input.length; i++){
                if(!sound.includes(input[i])){
                    temp += input[i].toUpperCase()
                } else {
                    temp += input[i]
                }
            }
            return temp
        }
        
        else if(cases[j] === 'upper'){
            for(i = 0; i < input.length; i++){
                temp += input[i].toUpperCase()
            }
            input = temp
            temp = ""
        }

        else if(cases[j] === 'lower'){
            for(i = 0; i < input.length; i++){
                temp += input[i].toLowerCase()
            }
            input = temp
            temp = "" 
        }
    }
    return input
}
//   console.log(makeCase("this is a string", "camel"));
//    console.log(makeCase("this is a string", "pascal"));
//    console.log(makeCase("this is a string", "snake"));
//  console.log(makeCase("this is a string", "kebab"));
//    console.log(makeCase("this is a string", "title"));
//  console.log(makeCase("this is a string", "vowel"));
//  console.log(makeCase("this is a string", "consonant"));
   console.log(makeCase("this is a string", ["upper", "snake"]));