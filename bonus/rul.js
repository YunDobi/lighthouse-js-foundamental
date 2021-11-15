const urlDecode = function(text) {  
   let final = {}
   text = text.replaceAll('%20', ' ')
   let temp = text.split(/[&=]/)
   for(i = 0; i < temp.length; i+=2){
    final[temp[i]] = temp[i+1]   
    }
    return final
}
 console.log(urlDecode("duck=rubber"));
 console.log(urlDecode("bootcamp=Lighthouse%20Labs"));
 console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain"));
 console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain").weather);


//   const urlDecode = function(text) {
//     let final = {}
//     let temp = ""
//     let temp2 = ""
//     text = text.replaceAll("%20", ' ')

//     for(i = 0; i < text.length; i++){
//         if(text[i] === "="){
//             for(j = i+1; j < text.length; j++){
//                 temp2 += text[j]
//                 if(text[j+1] === "&"){
//                     final[temp] = temp2
//                     i = j + 1
//                     break
//                 }
//             }
//             final[temp] = temp2
    
//         }
//         else {
//             temp += text[i]
//         }
//     }return(final)
//   };