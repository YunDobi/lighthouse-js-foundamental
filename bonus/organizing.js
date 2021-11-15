const organizeInstructors = function(instructors) {
    let organizedList = {};

    for (let i = 0; i < instructors.length; i++) {
        let currentInst = instructors[i];
        if (Object.keys(organizedList).includes(currentInst.course)) {
            organizedList[currentInst.course].push(currentInst.name);
        } else {
            organizedList[currentInst.course] = [ currentInst.name ];
        }
    }

    return organizedList;
};

console.log(organizeInstructors([
    {name: "Samuel", course: "iOS"},
    {name: "Victoria", course: "Blockchain"},
    {name: "Karim", course: "Web"},
    {name: "Donald", course: "Web"}
  ]));