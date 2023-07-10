export function checkUpperCase(str) {
  return /[A-Z]/.test(str);
}

export function checkLowerCase(str) {
  return /[a-z]/.test(str);
}

export function checkNumbers(str) {
  return /[0-9]/.test(str);
}

export function checkLength(str) {
  return str.length >= 10;
}

export function arePasswordsEqual(pw1, pw2) {
  if (pw1.length !== 0 && pw2.lentgh !== 0) {
    return pw1 === pw2;
  }
}

export function showPasswords() {
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

export function initApp() {
  const passwordFields = document.querySelectorAll("input");
  const btn = document.querySelector("button");

  function checkPassword() {
    if (arePasswordsEqual(passwordFields[0].value, passwordFields[1].value)) {
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
        document
          .querySelector(".numbers")
          .style.setProperty("--emoji", `"✔️ "`);
      }
      if (checkLength(passwordFields[0].value)) {
        document.querySelector(".length").style.setProperty("--emoji", `"✔️ "`);
      }
    } else {
      for (let child of document.querySelector(".checks").children) {
        child.style.setProperty("--emoji", `"❌ "`);
      }
    }
  }

  passwordFields[0].addEventListener("input", checkPassword);
  passwordFields[1].addEventListener("input", checkPassword);
  btn.addEventListener("click", showPasswords);
}
