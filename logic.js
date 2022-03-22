const start__btn = document.querySelector(".start__btn");
const playing__area = document.querySelector(".playing__area");
const guess = document.querySelector(".guess");
const try__btn = document.querySelector(".try__btn");
const more = document.querySelector(".more");
const bingo = document.querySelector(".bingo");
const less = document.querySelector(".less");
const again__btn = document.querySelector(".again__btn");
let y = 0;
var x = 0;


function MakeNum (){
   return x =  Math.floor(Math.random() * (99 - 0))+0;
}


start__btn.onclick = () => {
    playing__area.classList.add("active");
    try__btn.classList.remove("inactive");
    MakeNum(x);
}

try__btn.onclick = () => {
    console.log(x);
    y = guess.value;

    if (x == y) {
        bingo.style.opacity = 1;
        less.style.opacity = 0;
        more.style.opacity = 0;
        again__btn.classList.add("active");
        try__btn.classList.add("inactive");

    } else if (x > y){
        more.style.opacity = 1;
        more.innerHTML = `больше ${y}`;
        less.style.opacity = 0;
        guess.value = "";


    } else {
        more.style.opacity = 0;
        less.style.opacity = 1;
        less.innerHTML = `меньше ${y}`;
        guess.value = "";
    }
}

again__btn.onclick = () => {
    playing__area.classList.remove("active");
    guess.value = "";
    bingo.style.opacity = 0;
    less.style.opacity = 0;
    more.style.opacity = 0;
}