const calculateChange = function(total, cash) {
    let need = cash - total;
    let hand = {}

    for(i = 0; i < cash; i++) {
        if(need - 2000 >= 0) {
            need -= 2000;
            if(Object.keys(hand).includes('TwentyDollars')){
                hand['TwentyDollars'] += 1;
            } else {
                hand['TwentyDollar'] = 1;
            } 
        }
        else if(need - 1000 >= 0) {
            need -= 1000;
            if(Object.keys(hand).includes('TenDollar')) {
                hand['TenDollar'] += 1;
            } else {
                hand['TenDollar'] = 1;
            }
        }
        else if(need - 500 >= 0){
            need -= 500;
            if(Object.keys(hand).includes('FiveDollar')) {
                hand['FiveDollar'] += 1;
            } else {
                hand['FiveDollar'] = 1;
            }
        }
        else if(need - 200 >= 0){
            need -= 200;
            if(Object.keys(hand).includes('TwoDollar')) {
                hand['TwoDollar'] += 1;
            } else {
                hand['TwoDollar'] = 1;
            }
        }
        else if(need - 100 >= 0){
            need -= 100;
            if(Object.keys(hand).includes('OneDollar')) {
                hand['OneDollar'] += 1;
            } else {
                hand['OneDollar'] = 1;
            }
        }
        else if(need - 25 >= 0){
            need -= 25;
            if(Object.keys(hand).includes('Quarter')) {
                hand['Quarter'] += 1;
            } else {
                hand['Quarter'] = 1;
            }
        }
        else if(need - 10 >= 0){
            need -= 10;
            if(Object.keys(hand).includes('Dime')) {
                hand['Dime'] += 1;
            } else {
                hand['Dime'] = 1;
            }
        }
        else if(need - 5 >= 0){
            need -= 5;
            if(Object.keys(hand).includes('Nickel')) {
                hand['Nickel'] += 1;
            } else {
                hand['Nickel'] = 1;
            }
        }
        else if(need - 1 >= 0){
            need -= 1;
            if(Object.keys(hand).includes('Penny')) {
                hand['Penny'] += 1;
            } else {
                hand['Penny'] = 1;
            }
        }
        else if(need == 0){
            return hand
        }
    }

  };
  
  console.log(calculateChange(1787, 2000));
  console.log(calculateChange(2623, 4000));
  console.log(calculateChange(501, 1000));