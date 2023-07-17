"use strict";

let todos = [];
const formTextValue = document.getElementById("newTodo");
const form = document.querySelector("form");
const delButton = document.querySelector(".delete-button");
const listElement = document.querySelector("#list");
const filterArea = document.querySelector(".filter-container");

function loadTodos() {
  const todosFromStorage = localStorage.getItem("todos");
  if (todosFromStorage !== null) {
    todos = JSON.parse(todosFromStorage);
  }
}

function saveTodos() {
  localStorage.setItem("todos", JSON.stringify(todos));
}

function renderTodos() {
  listElement.innerHTML = "";

  todos.forEach(function (currentTodo) {
    const newListElement = document.createElement("li");
    const todoCheckboxEl = document.createElement("input");

    todoCheckboxEl.setAttribute("type", "checkbox");
    todoCheckboxEl.checked = currentTodo.done;
    todoCheckboxEl.id = `todo-${currentTodo.id}`;
    newListElement.appendChild(todoCheckboxEl);

    const description = document.createElement("label");
    description.setAttribute("for", todoCheckboxEl.id);
    description.innerText = currentTodo.description;
    newListElement.append(description);

    if (currentTodo.done === true) {
      newListElement.classList.add("done");
    }

    newListElement.todo = currentTodo;

    listElement.appendChild(newListElement);
  });
}

function addNewTodo(e) {
  e.preventDefault();

  if (formTextValue.value === "") {
    return;
  }

  todos.push({
    description: formTextValue.value.trim(),
    done: false,
    id: +new Date(),
  });
  saveTodos();
  renderTodos();

  formTextValue.value = "";
}

form.addEventListener("submit", addNewTodo);

function deleteDoneTodos() {
  todos = todos.filter((todo) => todo.done === false);
  saveTodos();
  renderTodos();
}

delButton.addEventListener("click", deleteDoneTodos);

function toggleTodoState(event) {
  const checkbox = event.target;
  if (checkbox.checked === true) {
    checkbox.parentElement.classList.add("done");
    checkbox.parentElement.todo.done = true;
  } else {
    checkbox.parentElement.classList.remove("done");
    checkbox.parentElement.todo.done = false;
  }

  saveTodos();
}

listElement.addEventListener("change", toggleTodoState);

function getFilterValue() {
  return document.querySelector("input[type=radio]:checked").value;
}

function filterTodos() {
  const filterValue = getFilterValue();
  console.log(filterValue);

  const listElement = document.querySelector("#list");
  for (let i = 0; i < listElement.children.length; i++) {
    const currentTodo = listElement.children[i];
    if (filterValue === "all") {
      currentTodo.hidden = false;
    } else if (filterValue === "open") {
      currentTodo.hidden = currentTodo.todo.done;
    } else if (filterValue === "done") {
      currentTodo.hidden = !currentTodo.todo.done;
    }
  }
}

filterArea.addEventListener("change", filterTodos);

loadTodos();
renderTodos();
