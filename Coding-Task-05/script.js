const body = document.querySelector("body");
const color = document.getElementById("hexCode");
const slider = document.querySelectorAll("input");
const redElement = document.getElementById("red");
const greenElement = document.getElementById("green");
const blueElement = document.getElementById("blue");

function rangeValueToHex(value) {
  return ("0" + parseInt(value).toString(16)).slice(-2);
}

function setBackgroundColor() {
  const red = redElement.value;
  const green = greenElement.value;
  const blue = blueElement.value;

  body.style.setProperty("--red", red);
  body.style.setProperty("--green", green);
  body.style.setProperty("--blue", blue);

  color.innerText =
    "#" + rangeValueToHex(red) + rangeValueToHex(green) + rangeValueToHex(blue);
}

for (let index = 0; index < slider.length; index++) {
  const element = slider[index];
  element.addEventListener("input", setBackgroundColor);
}

setBackgroundColor();
