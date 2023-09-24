function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const bgBodyColor = document.querySelector("body");
const span = document.querySelector(".color");
const btn = document.querySelector(".change-color");

btn.addEventListener("click", () => {
  const rundomColor = getRandomHexColor();
  bgBodyColor.style.backgroundColor = rundomColor;
  span.innerHTML = `<span class="color">${rundomColor}</span>`
});