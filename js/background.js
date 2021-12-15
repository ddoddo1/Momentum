const back = document.querySelector("#back");

const images = ["0.jpg","1.jpg","2.jpg","3.jpg","4.jpg","5.jpg","6.jpg","7.jpg","8.jpg","9.jpg","10.jpg"];

const chosenImage = images [Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

document.body.style.background = `url('./img/${chosenImage}')`
document.body.style.backgroundSize = "3000px";