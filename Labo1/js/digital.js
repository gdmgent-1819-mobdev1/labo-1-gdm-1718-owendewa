/**************************************** 
* @author	Owen De Waele
* @created	26/09/18
* @modified 26/09/18
* @copyright Copyright © 2016-2017 Artevelde University College Ghent
* @function Opdachten week 1 
****************************************/


// oef 1
setInterval(clock,500);

function clock(){
let date = new Date();
let hours = date.getHours();
let minutes = date.getMinutes();
let seconds = date.getSeconds();


if(hours < 10){
	hours = '0' + hours;
}
if(minutes < 10){
	minutes = '0' + minutes;
}
if(seconds < 10){
	seconds = '0' + seconds;
}

document.getElementById('time').innerHTML =hours + ' : ' + minutes + ' : ' + seconds;

}
setInterval(clockNY,500);

function clockNY(){
let date = new Date();
let hours = date.getHours();
let minutes = date.getMinutes();
let seconds = date.getSeconds();

let hoursNY = hours - 6;

if(hoursNY < 10){
	hoursNY = '0' + hoursNY;
}
if(minutes < 10){
	minutes = '0' + minutes;
}
if(seconds < 10){
	seconds = '0' + seconds;
}

document.getElementById('timeNY').innerHTML =hoursNY + ' : ' + minutes + ' : ' + seconds;

}





