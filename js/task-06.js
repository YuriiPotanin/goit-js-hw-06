const userName = document.querySelector("#validation-input");

userName.addEventListener("blur", handlerGreeting);

function handlerGreeting(evt) {
    const name = evt.currentTarget.value;
   
    if (name.length === Number(userName.dataset.length)) {
        if (userName.classList.contains("invalid")) {userName.classList.remove("invalid")}
        userName.classList.add("valid");
    } else {
        userName.classList.add("invalid");
    }
     
}