const music = document.getElementById("music");

document.getElementById("openBtn")
.addEventListener("click", () => {

    music.volume = 0;
    music.play();

    let volume = 0;

    let fade = setInterval(() => {

        if(volume < 0.3){

            volume += 0.01;

            music.volume = volume;

        }

        else{

            clearInterval(fade);

        }

    },200);

});





document

.getElementById("openBtn")

.onclick=()=>{


window.scrollTo({

top:

window.innerHeight,

behavior:

"smooth"

})


}





const petals=

document

.getElementById("petals");



for(

let i=0;

i<40;

i++

){


let p=

document

.createElement("div");


p.innerHTML="🌷";


p.className=

"petal";


p.style.left=

Math.random()*100

+"vw";


p.style.animationDuration=

5+

Math.random()*7

+"s";


p.style.fontSize=

20+

Math.random()*20

+"px";


petals

.appendChild(p);


}