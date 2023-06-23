//Solution 1

// let arr = [];

// const checkboxElements = document.querySelectorAll("input[type='checkbox']");

// function handleCheckboxChange(e) {
//   const isChecked = e.target.checked;
//   const id = e.target.id;
//   if (isChecked) {
//     const lastChecked = arr[1];
//     if (lastChecked != undefined) {
//       arr[1] = id;
//       document.getElementById(lastChecked).checked = false;
//     } else {
//       arr.push(id);
//     }
//   } else {
//     arr = arr.filter(function (currentId) {
//       return currentId != id;
//     });
//   }
// }

// for (let index = 0; index < checkboxElements.length; index++) {
//   const element = checkboxElements[index];
//   element.addEventListener("change", handleCheckboxChange);
// }

//Solution 2

const checkboxElements = document.querySelectorAll("input[type='checkbox']");
let lastChecked;

function handleCheckboxChange(e) {
  const checkedElements = document.querySelectorAll(
    "input[type='checkbox']:checked"
  );
  if (checkedElements.length <= 2) {
    lastChecked = e.target.id;
  } else {
    document.getElementById(lastChecked).checked = false;
    lastChecked = e.target.id;
  }
}

for (let index = 0; index < checkboxElements.length; index++) {
  const element = checkboxElements[index];
  element.addEventListener("change", handleCheckboxChange);
}
