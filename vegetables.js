const judgeVegetable = function (vegetables, metric) {
    if (vegetables.length < 1 || metric === null) {
        return 0;
    }
    let target = vegetables[0];

    if(metric === "redness"){
        let max = target.redness;
        for (let i = 1; i < vegetables.length; i++){
            const curr = vegetables[i];
            if (curr.redness > max){
                max = curr.redness;
                target = curr
            }
        }
    }
    if(metric === "plumpness"){
        let max = target.plumpness;
        for (let i = 1; i < vegetables.length; i++){
            const curr = vegetables[i];
            if (curr.plumpness > max){
                max = curr.plumpness;
                target = curr
            }
        }
    } 
    return target.submitter;
}
