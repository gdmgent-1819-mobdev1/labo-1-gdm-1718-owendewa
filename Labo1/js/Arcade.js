for(let i=0; i<36; i++){
    let random = Math.random();
    if(random <=0.5 ){
        document.getElementById('arcadeBox').innerHTML += '<div class="colorBoxWhite"></div>'
    }else{
        document.getElementById('arcadeBox').innerHTML += '<div class="colorBoxBlack"></div>'
    }
}
let secondBox = document.getElementById('arcadeBox');
let copy = secondBox.cloneNode('true');
document.getElementById('container').appendChild(copy);