const multiplicationTable = function(maxValue) {
    let final = ""
    // vert
    for (i = 1; i <= maxValue; i++) {
        // horiz
        for (j = 1; j <= maxValue; j++) {
            let temp = j * i;
            final += temp

            if (j != maxValue) {
                final += ' ';
            } else {
                final += '\n';
            }
        }
    }

    return final
  };
  
  console.log(multiplicationTable(10));