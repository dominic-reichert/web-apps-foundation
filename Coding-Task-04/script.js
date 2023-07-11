const clickArea = document.querySelector("main");
const counter = document.getElementById("counter");
const btn = document.querySelector("button");

let count = 0;
let bgCount = 0;

btn.addEventListener("click", function () {
  count = 0;
  bgCount = 0;
  counter.textContent = count;
  clickArea.style.setProperty("background-size", `${bgCount}%`);
});

clickArea.addEventListener("click", function () {
  count++;
  bgCount++;
  counter.textContent = count;
  if (bgCount === 101) {
    bgCount = 1;
  }
  clickArea.style.setProperty("background-size", `${bgCount}%`);
});

document.body.onkeydown = function (e) {
  if (e.keyCode === 32 || e.keyCode === 13) {
    count++;
    bgCount++;
    counter.textContent = count;
    if (bgCount === 101) {
      bgCount = 1;
    }
    clickArea.style.setProperty("background-size", `${bgCount}%`);
  }
};
