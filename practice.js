const conditionalSum =function(values, condition){
    let temps= []
    let result = 0
    for(let i = 0; i <= values.length -1; i++){
        if(condition === "even"){
            if(0 === values[i]%2){
                temps.push(values[i])
            }
        }
        else if(condition === "odd"){
            if(1 === values[i] % 2){
                temps.push(values[i])
            }
        }
    }
    for (var i = 0; i < temps.length; i++) {
        result += temps[i]
      }
      return result
}
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));