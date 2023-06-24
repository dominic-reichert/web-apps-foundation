const body = document.querySelector("body");
const color = document.getElementById("hexCode");
const slider = document.querySelectorAll("input");
const redElement = document.getElementById("red");
const greenElement = document.getElementById("green");
const blueElement = document.getElementById("blue");

function rangeValueToHex(value) {
  value = Number.parseInt(value);
  return ("0" + value.toString(16)).substr(-2);
}

function setBackgroundColor() {
  const red = redElement.value;
  const green = greenElement.value;
  const blue = blueElement.value;

  const redHex = rangeValueToHex(red);
  const greenHex = rangeValueToHex(green);
  const blueHex = rangeValueToHex(blue);

  body.style.setProperty("background-color", `rgb(${red} ${green} ${blue})`);
  color.innerText = "#" + redHex + greenHex + blueHex;
}

for (let index = 0; index < slider.length; index++) {
  const element = slider[index];
  element.addEventListener("input", setBackgroundColor);
}

setBackgroundColor();
