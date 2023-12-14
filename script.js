


const dino = document.getElementById("dino");
const castus = document.getElementById("cactus")


function jump () {
    if(dino.classList != "jump"){
    dino.classList.add("jump");

    setTimeout(function () {
        dino.classList.remove('jump');
    }, 300);
}
}


let isAlive = setInterval(function(){
    //get current dino y pos
    let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));

    //get current x pos
    let cactusLeft = parseInt (
        window.getComputedStyle(cactus).getPropertyValue("left")
        );
    

// detct col
if (cactusLeft <50 && cactusLeft > 0 && dinoTop >= 140)
{
    //col 
    alert ("Game Over");
}


}, 10);

document.addEventListener("keydown", function (event) {
jump();


})

//https://youtu.be/i7nIutSLvdU?t=611


