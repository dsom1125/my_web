//main.js
let target=document.querySelector("#dynamic");
function blink(){
    target.classList.toggle("active");
}
setInterval(blink, 500); //blink함수를 0.5초에 한번씩 호출