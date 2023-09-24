const inputFontSize = document.querySelector("#font-size-control");
const spanSize = document.querySelector("#text");

inputFontSize.addEventListener("input", () => {
 const  temp = inputFontSize.value;
   
    spanSize.style.fontSize = `${temp}px`;
   
})