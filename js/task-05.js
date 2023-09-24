const inputName = document.querySelector("#name-input");
const outputName = document.querySelector("#name-output");

inputName.addEventListener("input", () => {
    if (inputName.value.length > 0) { outputName.innerText = inputName.value }
    else {outputName.innerText = "Anonymous"}
  
   
});