const body = document.querySelector("body");

const btn = document.querySelector("button");

function toggleTitle() {
  let title = document.title;
  if (title === "Good Morning" || title === "Light Switch") {
    document.title = "Good Night";
  } else {
    document.title = "Good Morning";
  }
}

btn.addEventListener("click", function () {
  body.classList.toggle("dark-mode");
  btn.classList.toggle("dark-mode");
  btn.classList.toggle("glow");
  toggleTitle();
});
