const analog = document.querySelector(".analog");
const digital = document.querySelector(".digital");

const secondsArm = document.querySelector(".seconds");
const minutesArm = document.querySelector(".minutes");
const hoursArm = document.querySelector(".hours");

function logTime() {
  const d = new Date();
  const hours = d.getHours().toString().padStart(2, "0");
  const minutes = d.getMinutes().toString().padStart(2, "0");
  const seconds = d.getSeconds().toString().padStart(2, "0");

  digital.innerText = `${hours}:${minutes}:${seconds}`;

  secondsArm.style.setProperty("--seconds", seconds * 6 + "deg");
  minutesArm.style.setProperty("--minutes", minutes * 6 + "deg");
  hoursArm.style.setProperty("--hours", hours * 30 + "deg");
}

// Log current date and time every 1000 ms (= 1 second)
logTime();
setInterval(logTime, 1000);
