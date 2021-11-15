// const blocksAway = function(directions) {
//     // [east, west, south, north]
//     let position = [0,0,0,0]
//     let out = {}
//     defaultview = (directions1, directions2) => {
//         if(directions1 === "right") {
//             position[0] += directions2
//         }
//         else if(directions1 === "left") {
//             position[1] += directions2
//         }
//     }

//     eastview = (directions1, directions2) => {
//         if(directions1 === "right") {
//             position[2] += directions2    
//         }
//         else if(directions1 === "left") {
//             position[3] += directions2
//         }
//     }
//     westview = (directions1, directions2) => {
//         if(directions1 === "right") {
//             position[3] += directions2  
//         }
//         else if(directions1 === "left") {
//             position[2] += directions2
//         }
//     }
//     reverseview = (directions1, directions2) => {
//         if(directions1 === "right") {
//             position[1] += directions2   
//         }
//         else if(directions1 === "left") {
//             position[0] += directions2
//         }
//     }

//     if(directions[0] === 'right' || directions[0] === 'left') {
//         defaultview(directions[0], directions[1])
//     }
    
//     for(let i = 2; i < directions.length; i += 2) {
//         if(directions[i - 2] === 'right' && directions[i] === 'right') {
//             eastview(directions[i], directions[i + 1])
//         }
//         else if(directions[i - 2] === 'right' && directions[i] === 'left') {
//             eastview(directions[i], directions[i + 1])
//         }
//         else if(directions[i - 2] === 'left' && directions[i] === 'right') {
//             westview(directions[i], directions[i + 1])
//         }
//         else if(directions[i - 2] === 'left' && directions[i] === 'left') {
//             westview(directions[i], directions[i + 1])
//         }
//         console.log(i)
//         console.log(position)
//     }
        
    


//     if(position[0] > position[1]) {
//         out['east'] = (position[0] - position[1])
//     }
//     if(position[1] > position[0]) {
//         out['west'] = (position[1] - position[0])
//     }
//     if(position[2] > position[3]) {
//         out['south'] = [position[2] - position[3]]
//     }
//     if(position[3] > position[2]) {
//         out['north'] = (position[3] - position[2])
//     }

//     console.log(out)
// }
// console.log(blocksAway(["right", 2, "left", 3, "left", 1]));
// console.log(blocksAway(["left", 1, "right", 1, "left", 1, "right", 1, "left", 1, "right", 1]));

const blocksAway = function(directions) {
    let x = 0
    let y = 0
    let out = {}

    //start from right
    if(directions[0] === 'right') {
        x += directions[1]
        if(directions[2] === 'left') {
            y += directions[3];

        for (let i = 4; i < directions.length; i+= 2) {
            if(directions[i] === "left" && directions[i-2] === 'right') {
                y += directions[i+1]
            }
            else if(directions[i] === 'right' && directions[i-2] === 'right') {
                y -= directions[i+1]
            }
            else if(directions[i] === "left" && directions[i-2] === 'left') {
                x -= directions[i + 1]
            }
            else if(directions[i] === 'right' && directions[i-2] === 'left') {
                x += directions[i + 1]
            }
        }
        }
    }
    //start form left
    if(directions[0] === 'left') {
        y += directions[1]
        if(directions[2] === 'right') {
            x += directions[3]

        for (let i = 4; i < directions.length; i+=2) {
            if(directions[i] === "left" && directions[i-2] === 'right') {
                y += directions[i+1]
            }
            else if(directions[i] === 'right' && directions[i-2] === 'right') {
                y -= directions[i+1]
            }
            else if(directions[i] === "left" && directions[i-2] === 'left') {
                x -= directions[i + 1] //y
            }
            else if(directions[i] === 'right' && directions[i-2] === 'left') {
                x += directions[i + 1] //y
            }
        }
    }
    }
    out.east = x
    out.north = y
    return out
  };
  
  console.log(blocksAway(["right", 2, "left", 3, "left", 1]));
  console.log(blocksAway(["left", 1, "right", 1, "left", 1, "right", 1, "left", 1, "right", 1]));
  console.log(blocksAway(["left", 3, "right", 1, "right", 3, "right", 1]));