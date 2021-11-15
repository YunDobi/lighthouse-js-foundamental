const camelCase = function(input) {
    input = input.trim();
    
    let result = ''
    let index = 100;

    for (let i = 0; i < input.length; i++) {
        if (input[i] === ' ' && i != input.length - 1) {
            result += input[i + 1].toUpperCase();
            i++;
        } else {
            result += input[i];
        }
    }
    return result;
  };
  
  console.log(camelCase("this is a string"));
  console.log(camelCase("loopy lighthouse"));
  console.log(camelCase("supercalifragalisticexpialidocious"));
