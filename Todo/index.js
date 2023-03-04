const form = document.querySelector("input_div");
const input = document.querySelector("#new-todo");
const todoList = document.querySelector("#todo-list");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (!input.value) return;
  const newTodo = document.createElement("li");
  newTodo.innerHTML = input.value;
  todoList.appendChild(newTodo);
  input.value = "";
});

todoList.addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("completed");
  }
});