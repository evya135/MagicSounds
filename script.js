
/* const form = document.getElementById("myForm");
let num = 1;
let isplaying = false;
form.addEventListener("submit", function(event) {  
    event.preventDefault(); // Prevent the default form submission behavior
    // You can add your custom logic here, such as sending data to a server or updating the UI
    if (isplaying) { return; }
    isplaying = true;
    let text = "sounds/sound" + num.toString() + ".mp3";
    
    let audio = new Audio(text);
    let duration = audio.duration;
    audio.play();
    audio.addEventListener("ended", () =>{
        isplaying = false;
        num++;
    });
}); */

const play = document.getElementById("play");
const back = document.getElementById("back");
const forward = document.getElementById("forward");
import names from './soundsname.js';
let text = "";
const soundName = document.getElementById("soundName");
let hidetimeout;
let num = 1;
let isplaying = false;
let dim = document.getElementById("dimLayer");

/* let text1 = names[2] + "<br>" + names[10] + "<br>" + names[28]
soundName.innerHTML = text1;
soundName.style.display = 'block'; */


play.addEventListener("click", function(event) {  
    event.preventDefault(); // Prevent the default form submission behavior
    if (isplaying) { return; }
    isplaying = true;
    let text = "sounds/sound" + num.toString() + ".mp3";
    
    let audio = new Audio(text);
    audio.play();
    
    dim.style.opacity = 1;
    setTimeout(() => {
        dim.style.opacity = 0;
    }, 240);

    audio.addEventListener("ended", () =>{
        isplaying = false;
        num++;
    });
    console.log(num);
});

back.addEventListener("click", function(event) {
    event.preventDefault();
    clearTimeout(hidetimeout);
    console.log("back " + num);
    if (num > 1) { 
        num--;
        text = names[num-2] + "<br>" + names[num-1] + "<br>" + names[num];
        console.log("back " + text);
        soundName.innerHTML = text;
        soundName.style.display = 'block';

        hidetimeout = setTimeout(() => {
            soundName.innerHTML = "";
            soundName.style.display = 'none'
        }, 3000);
    }
});

forward.addEventListener("click", function(event) {
   event.preventDefault();
    clearTimeout(hidetimeout);
   if(num < 29){
    num++;    
    text = names[num-2] + "<br>" + names[num-1] + "<br>" + names[num];
        console.log("forward " + text);
        soundName.innerHTML = text;
        soundName.style.display = 'block';

        hidetimeout = setTimeout(() => {
            soundName.innerHTML = "";
            soundName.style.display = 'none'
        }, 3000);

   } 
});
