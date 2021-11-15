const instructorWithLongestName = function(instructors) {
    // Put your solution here
    let max = 0
    let target = []
    for(i = 0; i < instructors.length; i++){
        let temps = instructors[i];
        if(max < temps.name.length) {
            max = temps.name.length
            target = temps
        }
    }
    return target
}
  

console.log(instructorWithLongestName([
    {name: "Matthew", course: "Web"},
    {name: "David", course: "iOS"},
    {name: "Domascus", course: "Web"}
  ]));