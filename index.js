const todoList = document.querySelector('main');
const todoSearchForm = document.getElementById("todoSearch");
const todoAddForm = document.getElementById('todoAdd');
const todoTextFilter = ['a1', 'a2', 'a3'];


todoSearchForm.addEventListener("submit", onsubmit)

function onsubmit(e) {
  const value = todoSearchForm.searchTodoField.value;
  e.preventDefault();
}


todoAddForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const value = todoAddForm.addTodoField.value;
  generateTodo(value)
});


function generateTodo(value) {
  const template = `
  <div class="main-box">
  <p class="text-box">${value}</p>
  <span class="img-box"></span>
  `;
  todoList.innerHTML += template;
}

todoSearchForm.addEventListener("input", focus)

function focus(e) {
  const value = todoSearchForm.searchTodoField.value.split(',');
  const result = value.filter(todoTextFilter).map(generateTodo);
  e.preventDefault();
}
