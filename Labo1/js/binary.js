setInterval(clock,500);

function clock(){
let date = new Date();
let hours = date.getHours();
let minutes = date.getMinutes();
let seconds = date.getSeconds();

let klok = document.getElementById('binaryContainer2');
klok.innerHTML = hours+": "+minutes+": "+seconds+""
let on = "<img src='http://codepen.myxotod.de/binary-clock/dot_on.jpg' alt='' />";
let off ="<img src='http://codepen.myxotod.de/binary-clock/dot_off.jpg' alt='' />"

let zero= off + off + off + off;
let one= off + off + off + on;
let two= off + off + on + off;
let three= off + off + on + on;
let four= off + on + off + off;
let five= off + on + off + on;
let six= off + on + on + off;
let seven= off + on + on + on;
let eight= on + off + off + off;
let nine= on + off + off + on;


switch(hours){

    case 0:
        document.getElementById('hourLineOne').innerHTML = zero;
        document.getElementById('hourLineTwo').innerHTML = zero;
    break; 
    case 1:
        document.getElementById('hourLineOne').innerHTML = zero;
        document.getElementById('hourLineTwo').innerHTML = one;
    break; 
    case 2:
        document.getElementById('hourLineOne').innerHTML = zero;
        document.getElementById('hourLineTwo').innerHTML = two;
    break; 
    case 3:
        document.getElementById('hourLineOne').innerHTML = zero;
        document.getElementById('hourLineTwo').innerHTML = three;
    break; 
    case 4:
        document.getElementById('hourLineOne').innerHTML = zero;
        document.getElementById('hourLineTwo').innerHTML = four;
    break; 
    case 5:
        document.getElementById('hourLineOne').innerHTML = zero;
        document.getElementById('hourLineTwo').innerHTML = five;
    break; 
    case 6:
        document.getElementById('hourLineOne').innerHTML = zero;
        document.getElementById('hourLineTwo').innerHTML = six;
    break; 
    case 7:
        document.getElementById('hourLineOne').innerHTML = zero;
        document.getElementById('hourLineTwo').innerHTML = seven;
    break; 
    case 8:
        document.getElementById('hourLineOne').innerHTML = zero;
        document.getElementById('hourLineTwo').innerHTML = eight;
    break; 
    case 9:
        document.getElementById('hourLineOne').innerHTML = zero;
        document.getElementById('hourLineTwo').innerHTML = nine;
    break; 
    case 10:
        document.getElementById('hourLineOne').innerHTML = one;
        document.getElementById('hourLineTwo').innerHTML = zero;
    break; 
    case 11:
        document.getElementById('hourLineOne').innerHTML = one;
        document.getElementById('hourLineTwo').innerHTML = one;
    break; 
    case 12:
        document.getElementById('hourLineOne').innerHTML = one;
        document.getElementById('hourLineTwo').innerHTML = zero;
    break; 
    case 13:
        document.getElementById('hourLineOne').innerHTML = one;
        document.getElementById('hourLineTwo').innerHTML = three;
    break; 
    case 14:
        document.getElementById('hourLineOne').innerHTML = one;
        document.getElementById('hourLineTwo').innerHTML = four;
    break; 
    case 15:
        document.getElementById('hourLineOne').innerHTML = one;
        document.getElementById('hourLineTwo').innerHTML = five;
    break; 
    case 16:
        document.getElementById('hourLineOne').innerHTML = one;
        document.getElementById('hourLineTwo').innerHTML = six;
    break; 
    case 17:
        document.getElementById('hourLineOne').innerHTML = one;
        document.getElementById('hourLineTwo').innerHTML = seven;
    break; 
    case 18:
        document.getElementById('hourLineOne').innerHTML = one;
        document.getElementById('hourLineTwo').innerHTML = eight;
    break; 
    case 19:
        document.getElementById('hourLineOne').innerHTML = one;
        document.getElementById('hourLineTwo').innerHTML = nine;
    break; 
    case 20:
        document.getElementById('hourLineOne').innerHTML = two;
        document.getElementById('hourLineTwo').innerHTML = zero;
    break; 
    case 21:
        document.getElementById('hourLineOne').innerHTML = two;
        document.getElementById('hourLineTwo').innerHTML = one;
    break; 
    case 22:
        document.getElementById('hourLineOne').innerHTML = two;
        document.getElementById('hourLineTwo').innerHTML = two;
    break;
    case 23:
        document.getElementById('hourLineOne').innerHTML = two;
        document.getElementById('hourLineTwo').innerHTML = three;
    break;
    default:
        document.getElementById('hourLineOne').innerHTML = zero;
        document.getElementById('hourLineTwo').innerHTML = zero;
    break;
}

switch(minutes){
    case 0:
    document.getElementById('minuteLineOne').innerHTML = zero;
    document.getElementById('minuteLineTwo').innerHTML = zero;
    break;
    case 1:
    document.getElementById('minuteLineOne').innerHTML = zero;
    document.getElementById('minuteLineTwo').innerHTML = one;
    break;
    case 2:
    document.getElementById('minuteLineOne').innerHTML = zero;
    document.getElementById('minuteLineTwo').innerHTML = two;
    break;
    case 3:
    document.getElementById('minuteLineOne').innerHTML = zero;
    document.getElementById('minuteLineTwo').innerHTML = three;
    break;
    case 4:
    document.getElementById('minuteLineOne').innerHTML = zero;
    document.getElementById('minuteLineTwo').innerHTML = four;
    break;
    case 5:
    document.getElementById('minuteLineOne').innerHTML = zero;
    document.getElementById('minuteLineTwo').innerHTML = five;
    break;
    case 6:
    document.getElementById('minuteLineOne').innerHTML = zero;
    document.getElementById('minuteLineTwo').innerHTML = six;
    break;
    case 7:
    document.getElementById('minuteLineOne').innerHTML = zero;
    document.getElementById('minuteLineTwo').innerHTML = seven;
    break;
    case 8:
    document.getElementById('minuteLineOne').innerHTML = zero;
    document.getElementById('minuteLineTwo').innerHTML = eight;
    break;
    case 9:
    document.getElementById('minuteLineOne').innerHTML = zero;
    document.getElementById('minuteLineTwo').innerHTML = nine;
    break;
    case 10:
    document.getElementById('minuteLineOne').innerHTML = one;
    document.getElementById('minuteLineTwo').innerHTML = zero;
    break;
    case 11:
    document.getElementById('minuteLineOne').innerHTML = one;
    document.getElementById('minuteLineTwo').innerHTML = one;
    break;
    case 12:
    document.getElementById('minuteLineOne').innerHTML = one;
    document.getElementById('minuteLineTwo').innerHTML = two;
    break;
    case 13:
    document.getElementById('minuteLineOne').innerHTML = one;
    document.getElementById('minuteLineTwo').innerHTML = three;
    break;
    case 14:
    document.getElementById('minuteLineOne').innerHTML = one;
    document.getElementById('minuteLineTwo').innerHTML = four;
    break;
    case 15:
    document.getElementById('minuteLineOne').innerHTML = one;
    document.getElementById('minuteLineTwo').innerHTML = five;
    break;
    case 16:
    document.getElementById('minuteLineOne').innerHTML = one;
    document.getElementById('minuteLineTwo').innerHTML = six;
    break;
    case 17:
    document.getElementById('minuteLineOne').innerHTML = one;
    document.getElementById('minuteLineTwo').innerHTML = seven;
    break;
    case 18:
    document.getElementById('minuteLineOne').innerHTML = one;
    document.getElementById('minuteLineTwo').innerHTML = eight;
    break;
    case 19:
    document.getElementById('minuteLineOne').innerHTML = one;
    document.getElementById('minuteLineTwo').innerHTML = nine;
    break;
    case 20:
    document.getElementById('minuteLineOne').innerHTML = two;
    document.getElementById('minuteLineTwo').innerHTML = zero;
    break;
    case 21:
    document.getElementById('minuteLineOne').innerHTML = two;
    document.getElementById('minuteLineTwo').innerHTML = one;
    break;
    case 22:
    document.getElementById('minuteLineOne').innerHTML = two;
    document.getElementById('minuteLineTwo').innerHTML = two;
    break;
    case 23:
    document.getElementById('minuteLineOne').innerHTML = two;
    document.getElementById('minuteLineTwo').innerHTML = three;
    break;
    case 24:
    document.getElementById('minuteLineOne').innerHTML = two;
    document.getElementById('minuteLineTwo').innerHTML = four;
    break;
    case 25:
    document.getElementById('minuteLineOne').innerHTML = two;
    document.getElementById('minuteLineTwo').innerHTML = five;
    break;
    case 26:
    document.getElementById('minuteLineOne').innerHTML = two;
    document.getElementById('minuteLineTwo').innerHTML = six;
    break;
    case 27:
    document.getElementById('minuteLineOne').innerHTML = two;
    document.getElementById('minuteLineTwo').innerHTML = seven;
    break;
    case 28:
    document.getElementById('minuteLineOne').innerHTML = two;
    document.getElementById('minuteLineTwo').innerHTML = eight;
    break;
    case 29:
    document.getElementById('minuteLineOne').innerHTML = two;
    document.getElementById('minuteLineTwo').innerHTML = nine;
    break;
    case 30:
    document.getElementById('minuteLineOne').innerHTML = three;
    document.getElementById('minuteLineTwo').innerHTML = zero;
    break;
    case 31:
    document.getElementById('minuteLineOne').innerHTML = three;
    document.getElementById('minuteLineTwo').innerHTML = one;
    break;
    case 32:
    document.getElementById('minuteLineOne').innerHTML = three;
    document.getElementById('minuteLineTwo').innerHTML = two;
    break;
    case 33:
    document.getElementById('minuteLineOne').innerHTML = three;
    document.getElementById('minuteLineTwo').innerHTML = three;
    break;
    case 34:
    document.getElementById('minuteLineOne').innerHTML = three;
    document.getElementById('minuteLineTwo').innerHTML = four;
    break;
    case 35:
    document.getElementById('minuteLineOne').innerHTML = three;
    document.getElementById('minuteLineTwo').innerHTML = five;
    break;
    case 36:
    document.getElementById('minuteLineOne').innerHTML = three;
    document.getElementById('minuteLineTwo').innerHTML = six;
    break;
    case 37:
    document.getElementById('minuteLineOne').innerHTML = three;
    document.getElementById('minuteLineTwo').innerHTML = seven;
    break;
    case 38:
    document.getElementById('minuteLineOne').innerHTML = three;
    document.getElementById('minuteLineTwo').innerHTML = eight;
    break;
    case 39:
    document.getElementById('minuteLineOne').innerHTML = three;
    document.getElementById('minuteLineTwo').innerHTML = nine;
    break;
    case 40:
    document.getElementById('minuteLineOne').innerHTML = four;
    document.getElementById('minuteLineTwo').innerHTML = zero;
    break;
    case 41:
    document.getElementById('minuteLineOne').innerHTML = four;
    document.getElementById('minuteLineTwo').innerHTML = one;
    break;
    case 42:
    document.getElementById('minuteLineOne').innerHTML = four;
    document.getElementById('minuteLineTwo').innerHTML = two;
    break;
    case 43:
    document.getElementById('minuteLineOne').innerHTML = four;
    document.getElementById('minuteLineTwo').innerHTML = three;
    break;
    case 44:
    document.getElementById('minuteLineOne').innerHTML = four;
    document.getElementById('minuteLineTwo').innerHTML = four;
    break;
    case 45:
    document.getElementById('minuteLineOne').innerHTML = four;
    document.getElementById('minuteLineTwo').innerHTML = five;
    break;
    case 46:
    document.getElementById('minuteLineOne').innerHTML = four;
    document.getElementById('minuteLineTwo').innerHTML = six;
    break;
    case 47:
    document.getElementById('minuteLineOne').innerHTML = four;
    document.getElementById('minuteLineTwo').innerHTML = seven;
    break;
    case 48:
    document.getElementById('minuteLineOne').innerHTML = four;
    document.getElementById('minuteLineTwo').innerHTML = eight;
    break;
    case 49:
    document.getElementById('minuteLineOne').innerHTML = four;
    document.getElementById('minuteLineTwo').innerHTML = nine;
    break;
    case 50:
    document.getElementById('minuteLineOne').innerHTML = five;
    document.getElementById('minuteLineTwo').innerHTML = zero;
    break;
    case 51:
    document.getElementById('minuteLineOne').innerHTML = five;
    document.getElementById('minuteLineTwo').innerHTML = one;
    break;
    case 52:
    document.getElementById('minuteLineOne').innerHTML = five;
    document.getElementById('minuteLineTwo').innerHTML = two;
    break;
    case 53:
    document.getElementById('minuteLineOne').innerHTML = five;
    document.getElementById('minuteLineTwo').innerHTML = three;
    break;
    case 54:
    document.getElementById('minuteLineOne').innerHTML = five;
    document.getElementById('minuteLineTwo').innerHTML = four;
    break;
    case 55:
    document.getElementById('minuteLineOne').innerHTML = five;
    document.getElementById('minuteLineTwo').innerHTML = five;
    break;
    case 56:
    document.getElementById('minuteLineOne').innerHTML = five;
    document.getElementById('minuteLineTwo').innerHTML = six;
    break;
    case 57:
    document.getElementById('minuteLineOne').innerHTML = five;
    document.getElementById('minuteLineTwo').innerHTML = seven;
    break;
    case 58:
    document.getElementById('minuteLineOne').innerHTML = five;
    document.getElementById('minuteLineTwo').innerHTML = eight;
    break;
    case 59:
    document.getElementById('minuteLineOne').innerHTML = five;
    document.getElementById('minuteLineTwo').innerHTML = nine;
    break;
    default:
    document.getElementById('minuteLineOne').innerHTML = zero;
    document.getElementById('minuteLineTwo').innerHTML = zero;
    break;
}
switch(seconds){
    case 0:
    document.getElementById('secondLineOne').innerHTML = zero;
    document.getElementById('secondLineTwo').innerHTML = zero;
    break;
    case 1:
    document.getElementById('secondLineOne').innerHTML = zero;
    document.getElementById('secondLineTwo').innerHTML = one;
    break;
    case 2:
    document.getElementById('secondLineOne').innerHTML = zero;
    document.getElementById('secondLineTwo').innerHTML = two;
    break;
    case 3:
    document.getElementById('secondLineOne').innerHTML = zero;
    document.getElementById('secondLineTwo').innerHTML = three;
    break;
    case 4:
    document.getElementById('secondLineOne').innerHTML = zero;
    document.getElementById('secondLineTwo').innerHTML = four;
    break;
    case 5:
    document.getElementById('secondLineOne').innerHTML = zero;
    document.getElementById('secondLineTwo').innerHTML = five;
    break;
    case 6:
    document.getElementById('minuteLineOne').innerHTML = zero;
    document.getElementById('minuteLineTwo').innerHTML = six;
    break;
    case 7:
    document.getElementById('secondLineOne').innerHTML = zero;
    document.getElementById('secondLineTwo').innerHTML = seven;
    break;
    case 8:
    document.getElementById('secondLineOne').innerHTML = zero;
    document.getElementById('secondLineTwo').innerHTML = eight;
    break;
    case 9:
    document.getElementById('secondLineOne').innerHTML = zero;
    document.getElementById('secondLineTwo').innerHTML = nine;
    break;
    case 10:
    document.getElementById('secondLineOne').innerHTML = one;
    document.getElementById('secondLineTwo').innerHTML = zero;
    break;
    case 11:
    document.getElementById('secondLineOne').innerHTML = one;
    document.getElementById('secondLineTwo').innerHTML = one;
    break;
    case 12:
    document.getElementById('secondLineOne').innerHTML = one;
    document.getElementById('secondLineTwo').innerHTML = two;
    break;
    case 13:
    document.getElementById('secondLineOne').innerHTML = one;
    document.getElementById('secondLineTwo').innerHTML = three;
    break;
    case 14:
    document.getElementById('secondLineOne').innerHTML = one;
    document.getElementById('secondLineTwo').innerHTML = four;
    break;
    case 15:
    document.getElementById('secondLineOne').innerHTML = one;
    document.getElementById('secondLineTwo').innerHTML = five;
    break;
    case 16:
    document.getElementById('secondLineOne').innerHTML = one;
    document.getElementById('secondLineTwo').innerHTML = six;
    break;
    case 17:
    document.getElementById('secondLineOne').innerHTML = one;
    document.getElementById('secondLineTwo').innerHTML = seven;
    break;
    case 18:
    document.getElementById('secondLineOne').innerHTML = one;
    document.getElementById('secondLineTwo').innerHTML = eight;
    break;
    case 19:
    document.getElementById('secondLineOne').innerHTML = one;
    document.getElementById('secondLineTwo').innerHTML = nine;
    break;
    case 20:
    document.getElementById('secondLineOne').innerHTML = two;
    document.getElementById('secondLineTwo').innerHTML = zero;
    break;
    case 21:
    document.getElementById('secondLineOne').innerHTML = two;
    document.getElementById('secondLineTwo').innerHTML = one;
    break;
    case 22:
    document.getElementById('secondLineOne').innerHTML = two;
    document.getElementById('secondLineTwo').innerHTML = two;
    break;
    case 23:
    document.getElementById('secondLineOne').innerHTML = two;
    document.getElementById('secondLineTwo').innerHTML = three;
    break;
    case 24:
    document.getElementById('secondLineOne').innerHTML = two;
    document.getElementById('secondLineTwo').innerHTML = four;
    break;
    case 25:
    document.getElementById('secondLineOne').innerHTML = two;
    document.getElementById('secondLineTwo').innerHTML = five;
    break;
    case 26:
    document.getElementById('secondLineOne').innerHTML = two;
    document.getElementById('secondLineTwo').innerHTML = six;
    break;
    case 27:
    document.getElementById('secondLineOne').innerHTML = two;
    document.getElementById('secondLineTwo').innerHTML = seven;
    break;
    case 28:
    document.getElementById('secondLineOne').innerHTML = two;
    document.getElementById('secondLineTwo').innerHTML = eight;
    break;
    case 29:
    document.getElementById('secondLineOne').innerHTML = two;
    document.getElementById('secondLineTwo').innerHTML = nine;
    break;
    case 30:
    document.getElementById('secondLineOne').innerHTML = three;
    document.getElementById('secondLineTwo').innerHTML = zero;
    break;
    case 31:
    document.getElementById('secondLineOne').innerHTML = three;
    document.getElementById('secondLineTwo').innerHTML = one;
    break;
    case 32:
    document.getElementById('secondLineOne').innerHTML = three;
    document.getElementById('secondLineTwo').innerHTML = two;
    break;
    case 33:
    document.getElementById('secondLineOne').innerHTML = three;
    document.getElementById('secondLineTwo').innerHTML = three;
    break;
    case 34:
    document.getElementById('secondLineOne').innerHTML = three;
    document.getElementById('secondLineTwo').innerHTML = four;
    break;
    case 35:
    document.getElementById('secondLineOne').innerHTML = three;
    document.getElementById('secondLineTwo').innerHTML = five;
    break;
    case 36:
    document.getElementById('secondLineOne').innerHTML = three;
    document.getElementById('secondLineTwo').innerHTML = six;
    break;
    case 37:
    document.getElementById('secondLineOne').innerHTML = three;
    document.getElementById('secondLineTwo').innerHTML = seven;
    break;
    case 38:
    document.getElementById('secondLineOne').innerHTML = three;
    document.getElementById('secondLineTwo').innerHTML = eight;
    break;
    case 39:
    document.getElementById('secondLineOne').innerHTML = three;
    document.getElementById('secondLineTwo').innerHTML = nine;
    break;
    case 40:
    document.getElementById('secondLineOne').innerHTML = four;
    document.getElementById('secondLineTwo').innerHTML = zero;
    break;
    case 41:
    document.getElementById('secondLineOne').innerHTML = four;
    document.getElementById('secondLineTwo').innerHTML = one;
    break;
    case 42:
    document.getElementById('secondLineOne').innerHTML = four;
    document.getElementById('secondLineTwo').innerHTML = two;
    break;
    case 43:
    document.getElementById('secondLineOne').innerHTML = four;
    document.getElementById('secondLineTwo').innerHTML = three;
    break;
    case 44:
    document.getElementById('secondLineOne').innerHTML = four;
    document.getElementById('secondLineTwo').innerHTML = four;
    break;
    case 45:
    document.getElementById('secondLineOne').innerHTML = four;
    document.getElementById('secondLineTwo').innerHTML = five;
    break;
    case 46:
    document.getElementById('secondLineOne').innerHTML = four;
    document.getElementById('secondLineTwo').innerHTML = six;
    break;
    case 47:
    document.getElementById('secondLineOne').innerHTML = four;
    document.getElementById('secondLineTwo').innerHTML = seven;
    break;
    case 48:
    document.getElementById('secondLineOne').innerHTML = four;
    document.getElementById('secondLineTwo').innerHTML = eight;
    break;
    case 49:
    document.getElementById('secondLineOne').innerHTML = four;
    document.getElementById('secondLineTwo').innerHTML = nine;
    break;
    case 50:
    document.getElementById('secondLineOne').innerHTML = five;
    document.getElementById('secondLineTwo').innerHTML = zero;
    break;
    case 51:
    document.getElementById('secondLineOne').innerHTML = five;
    document.getElementById('secondLineTwo').innerHTML = one;
    break;
    case 52:
    document.getElementById('secondLineOne').innerHTML = five;
    document.getElementById('secondLineTwo').innerHTML = two;
    break;
    case 53:
    document.getElementById('secondLineOne').innerHTML = five;
    document.getElementById('secondLineTwo').innerHTML = three;
    break;
    case 54:
    document.getElementById('secondLineOne').innerHTML = five;
    document.getElementById('secondLineTwo').innerHTML = four;
    break;
    case 55:
    document.getElementById('secondLineOne').innerHTML = five;
    document.getElementById('secondLineTwo').innerHTML = five;
    break;
    case 56:
    document.getElementById('secondLineOne').innerHTML = five;
    document.getElementById('secondLineTwo').innerHTML = six;
    break;
    case 57:
    document.getElementById('secondLineOne').innerHTML = five;
    document.getElementById('secondLineTwo').innerHTML = seven;
    break;
    case 58:
    document.getElementById('secondLineOne').innerHTML = five;
    document.getElementById('secondLineTwo').innerHTML = eight;
    break;
    case 59:
    document.getElementById('secondLineOne').innerHTML = five;
    document.getElementById('secondLineTwo').innerHTML = nine;
    break;
    default:
    document.getElementById('secondLineOne').innerHTML = zero;
    document.getElementById('secondLineTwo').innerHTML = zero;
    break;
}


};

clock();