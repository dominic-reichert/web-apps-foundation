const input = document.querySelector("input");

const btn = document.querySelector("button");

console.log(input.type);

function showPassword() {
  if (input.type === "password") {
    input.setAttribute("type", "text");
    btn.innerHTML = "Hide Password";
  } else if (input.type === "text") {
    input.setAttribute("type", "password");
    btn.innerHTML = "Show Password";
  }
}

btn.addEventListener("click", function () {
  showPassword();
});
