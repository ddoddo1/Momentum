const clock = document.querySelector("h2#clock");
const today = document.querySelector("h3#today");


function getToday () {
    const date = new Date();
    const fullyear = date.getFullYear();
    const month = String (date.getMonth()).padStart(2,"0");
    const days = String (date.getDate()).padStart(2,"0");
    const dayweek = ["SUN","MON","TUE","WED","THU","FRI","SAT"];
    const week = date.getDay();
    const weekday = dayweek[week];
    

    today.innerText = `${fullyear}.${month}.${days}.${weekday}`;

}


function getClock() {
    const date = new Date();
    const hours = String (date.getHours()).padStart(2,"0");
    const minutes = String (date.getMinutes ()).padStart(2,"0");
    const seconds = String (date.getSeconds()).padStart(2,"0");

 
    clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getToday ();
getClock();
setInterval(getClock, 1000);

