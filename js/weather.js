const API_KEY = "1e5c0425d7d6ddc50ad6768bbca7709a";

function onGeook(positon){
    const lat = positon.coords.latitude;
    const lon = positon.coords.longitude;
    console.log("You live in", lat, lon);
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;


    fetch(url)
    .then((response) => response.json())
    .then((data) => {
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");
        city.innerText = data.name;
        weather.innerText = `${data.weather[0].main} / ${data.main.temp}°`;

    });

}

function onGeoError(){
    alert("Can't find you. Co weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeook, onGeoError);

