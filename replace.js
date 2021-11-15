const urlEncode = function(text) {
    let temp = []
    let result = ""
    for(i=0;i < text.length; i++){
        if(text[i] === " "){
            temp.push("%20")
        }
        else{
            temp.push(text[i])
        }
    }
    result = temp.join("")
    return result

}

console.log(urlEncode("Lighthouse Labs"));