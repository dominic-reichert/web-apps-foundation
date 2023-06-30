const passwordFields = document.querySelectorAll("input");
const btn = document.querySelector("button");

console.log(passwordFields);

btn.addEventListener("click", showPasswords);

function showPasswords() {
  for (let field of passwordFields) {
    if (field.type === "password") {
      field.type = "text";
      btn.innerText = "Hide Password";
    } else {
      field.type = "password";
      btn.innerText = "Show Password";
    }
  }
}

function checkPassword() {
  if (passwordFields[0].value !== passwordFields[1].value) {
    for (let child of document.querySelector(".checks").children) {
      child.style.setProperty("--emoji", `"❌ "`);
    }
  }
  if (passwordFields[0].value === passwordFields[1].value) {
    document.querySelector(".equality").style.setProperty("--emoji", `"✔️ "`);
    if (checkLowerCase(passwordFields[0].value)) {
      document
        .querySelector(".lowerCase")
        .style.setProperty("--emoji", `"✔️ "`);
    }
    if (checkUpperCase(passwordFields[0].value)) {
      document
        .querySelector(".upperCase")
        .style.setProperty("--emoji", `"✔️ "`);
    }
    if (checkNumbers(passwordFields[0].value)) {
      document.querySelector(".numbers").style.setProperty("--emoji", `"✔️ "`);
    }
    if (checkLength(passwordFields[0].value)) {
      document.querySelector(".length").style.setProperty("--emoji", `"✔️ "`);
    }
  }
}

passwordFields[0].addEventListener("input", checkPassword);
passwordFields[1].addEventListener("input", checkPassword);

function checkUpperCase(str) {
  return /[A-Z]/.test(str);
}

function checkLowerCase(str) {
  return /[a-z]/.test(str);
}

function checkNumbers(str) {
  return /[0-9]/.test(str);
}

function checkLength(str) {
  return str.length >= 10;
}
