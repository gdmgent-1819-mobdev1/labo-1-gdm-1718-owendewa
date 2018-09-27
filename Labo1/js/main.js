let hourHand = document.getElementById('hourHand');
let minuteHand = document.getElementById('minuteHand');
let secondHand = document.getElementById('secondHand');


function analogClock(){
let date = new Date();
let hour = date.getHours() % 12;
let minute = date.getMinutes();
let second = date.getSeconds();

//360 graden, 12 uur (12 uur analoge klok), 60 minuten en 60 seconden

let HourRotation = hour * 30 + (0.5 * minute);  //-> per uur 30 graden 360/12 = 30
let MinuteRotation = minute * 6; // -> per minuut 6 graden draaien 6*60 = 360
let SecondRotation = second * 6; // -> per seconde 6 graden draaien 6*60 = 360

hourHand.style.transform = 'rotate(' + HourRotation + 'deg)';
minuteHand.style.transform = 'rotate(' +  MinuteRotation + 'deg)';
secondHand.style.transform = 'rotate(' +  SecondRotation + 'deg)';

setTimeout(analogClock, 1000);

};

analogClock();



