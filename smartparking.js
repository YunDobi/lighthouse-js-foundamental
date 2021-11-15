const whereCanIPark = function (spots, vehicle) {
    for(let i = 0; i <spots.length; i++){
        for(let j = 0; j < spots[i].length; j++){
            console.log("Spots: ",spots[i][j])
        
            let spot = spots[i][j]

            if(vehicle === "regular"){
                if(spot === "R"){
                    return [j,i]
                }
            }
            else if(vehicle === "small"){
                if(spot === "S" || spot === "R"){
                    return [j,i]
                }

            }
            else if(vehicle === "motorcycle"){
                if(spot === "M" || spot === "S" || spot === "R"){
                    return [j,i]
                }
            }
        }
    } return false
};
  