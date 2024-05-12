console.log("Yes.")

let counter = 0;
const counterElement = document.querySelector(".counter");

const circle = document.querySelector(".circle");
const left = document.querySelector(".circle");
const bottom = document.querySelector(".circle");

const clickHandler=()=> {
  console.log("Circle was clicked.")
  counter++;
  counterElement.innerText = counter;
  const left = Math.floor(Math.random() * 95);
  circle.style.left = `${left}vw`;
  const bottom = Math.floor(Math.random() * 95);
  circle.style.bottom = `${bottom}vh`;
}

circle.addEventListener("click", clickHandler)

let time = 15;
const interval = setInterval(()=>{
  time--;
  document.querySelector(".time").innerText = time;
  if (time === 0){
    clearInterval(interval);
    circle.removeEventListener("click", clickHandler);
  }
}, 1000)
