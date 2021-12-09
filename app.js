const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username"

function onLoginSubmit(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY,username);
    paintGreeting(username);
}


function paintGreeting(username) {
    greeting.innerText = `hello ${seavdUsername}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);

}


 
const seavdUsername = localStorage.getItem(USERNAME_KEY);

if(seavdUsername === null){
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit",onLoginSubmit); 

} else {
    paintGreeting(seavdUsername);

}
