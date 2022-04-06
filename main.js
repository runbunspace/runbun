
let direction = 'l';
let current = 1;
let img = document.getElementById('bun');
let position = 0;
function drawFrame(){
    img.style.left = 50*position
    img.src = 'buns/bun'+current+direction+'.png';

}
let audio = new Audio('theme.mp3');

let started = false;
setInterval(function(){
    if(started){
        current++;
    }

    if(current > 3){
        current = 1;
    }
    drawFrame();

}, 500)

let leftKeys  = [ 'ArrowLeft', 'a', '4', '.'];
let rightKeys = ['ArrowRight', 'd', '6', ','];

function goLeft(){
    started = true;
    direction = 'l';
    position--;
    drawFrame()
    tryMusic();
}

function goRight(){
    started = true;
    direction = 'r';
    position++;
    drawFrame()
    tryMusic();
}

function tryMusic(){
    if(audio.paused){
        audio.play();
    }
}

document.getElementById('left-button').addEventListener('click', ()=>goLeft());
document.getElementById('right-button').addEventListener('click', ()=>goRight());

document.addEventListener('keydown', function(event){
    console.log('event key ' + event.key)
    if(leftKeys.includes(event.key)){
        goLeft();
    } else if(rightKeys.includes(event.key)){
        goRight();
    }
});




