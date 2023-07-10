const input = document.querySelector("input");
const btn = document.querySelector("button");

function showPassword() {
  if (input.type === "password") {
    input.setAttribute("type", "text");
    btn.innerText = "Hide Password";
  } else if (input.type === "text") {
    input.setAttribute("type", "password");
    btn.innerText = "Show Password";
  }
}

btn.addEventListener("click", function () {
  showPassword();
});
