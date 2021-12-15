const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const nameBox = document.querySelector("#name-box");
const main = document.querySelector("#main-box");
const mainT = document.querySelector("#main-box-t");


const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

const seavdUsername = localStorage.getItem(USERNAME_KEY);



function onLoginSubmit(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    nameBox.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    main.classList.remove(HIDDEN_CLASSNAME);
    mainT.classList.remove(HIDDEN_CLASSNAME);
    localStorage.setItem(USERNAME_KEY,username);
    paintGreeting(username);
    
}



function paintGreeting(username) {
    greeting.innerText = `hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);

}


if(seavdUsername === null){
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit",onLoginSubmit); 
    main.classList.add(HIDDEN_CLASSNAME);
    mainT.classList.add(HIDDEN_CLASSNAME);

} else {
    paintGreeting(seavdUsername);
    nameBox.classList.add(HIDDEN_CLASSNAME);

}

