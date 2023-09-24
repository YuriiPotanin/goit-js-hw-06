let counterValue = 0;

// const elemDiv = document.querySelector("#counter");
const value = document.querySelector("#value");
const decrBtn = document.querySelector('button[data-action="decrement"]');
const incrBtn = document.querySelector('button[data-action="increment"]');

decrBtn.addEventListener("click", () => {counterValue -= 1; value.innerText = counterValue;});
incrBtn.addEventListener("click", () => {counterValue += 1; value.innerText = counterValue;});
 
