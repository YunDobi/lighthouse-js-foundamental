const talkingCalendar = function(date) {
    let final = ""
    let number = date.split("/")
    let years = Number(number[0]);
    let months = Number(number[1]);
    let days = Number(number[2]);

    switch(months){
        case 1:
            final += 'January '
            break;
        case 2:
            final += 'Feburary '
            break;
        case 3:
            final += 'March '
            break;
        case 4:
            final += 'April '
            break;
        case 5:
            final += 'May '
            break;
        case 6:
            final += 'June '
            break;
        case 7:
            final += 'Junly ' 
            break;
        case 8:
            final += 'August '
            break;
        case 9:
            final += 'September '
            break;
        case 10:
            final += 'October '
            break;
        case 11:
            final += 'November '
            break;
        case 12:
            final += 'December '
            break;
    }
    
    switch(days){
        case 1:
            final += days + 'st, '
            break;
        case 2:
            final += days + 'nd, '
            break;
        case 3:
            final += days + 'rd, '
            break;
        default:
            final += days + 'th, '
    }
    
    final += years
    return final
  };
  
  console.log(talkingCalendar("2017/12/02"));//December 2nd, 2017
  console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/'24"));