const btn = document.querySelector("button");

function toggleTitle() {
  if (document.title === "Good Morning" || document.title === "Light Switch") {
    document.title = "Good Night";
  } else {
    document.title = "Good Morning";
  }
}

btn.addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");
  toggleTitle();
});
