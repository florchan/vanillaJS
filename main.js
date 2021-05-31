const mainTodoList = document.querySelector('.mainTodo');
const todoSearchForm = document.getElementById("searchForm");
const todoAddForm = document.getElementById('addForm');
const todoButtonLeft = document.querySelector('.buttonLeft');
const todoButtonCenter = document.querySelector('.buttonCenter');
const todoButtonRight = document.querySelector('.buttonRight');

todoSearchForm.addEventListener("submit", onsubmit);
function onsubmit(e) {
  const value = todoSearchForm.searchFormField.value;
  e.preventDefault();
  console.log(value);
  todoSearchForm.searchFormField.value = null;
}
/* add event for input text on search form and console output */

todoAddForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const value = todoAddForm.addFormField.value;
  generateTodo(value);
  todoAddForm.addFormField.value = null;
});
/* add event for add form and adding a block to mainTodo */

function generateTodo(value) {
  if (value.trim() === "") {
    return;
  }
  const template = `
  <div class="mainBox">
  <p class="textMainBox">${value}</p>
  <span class="imgMainBox"></span></div>
  `;
  mainTodoList.innerHTML += template;
}
/* function to add a block to mainTodo */

todoSearchForm.addEventListener("keyup", function () {
  const value = todoSearchForm.searchFormField.value;
  Array.from(document.getElementsByClassName('mainBox')).map(function (obj) {
    obj.classList.add('offDisplay')
    if (obj.textContent.includes(value)) {
      obj.classList.toggle('offDisplay');
    }
  });
});
/* the event removes from the mainTodo 
block everything that does not match the entered text in the search form */

todoButtonLeft.addEventListener("click", function () {

  Array.from(document.querySelectorAll('.mainBox')).map(function (obj) {
    obj.classList.remove('offDisplay');
    console.log(obj)

    if (obj.children[0].className.includes('noText')) {
      obj.classList.remove('offDisplay');
    }
    })
});
/* add an event in which by clicking
 on the left button all todos are displayed */

todoButtonCenter.addEventListener("click", function () {


  Array.from(document.querySelectorAll('.mainBox')).map(function (obj) {
    console.log(obj)
    obj.classList.remove('offDisplay');

    if (obj.children[0].className.includes('noText')) {

      obj.classList.add('offDisplay');
    }
  });
});
/* add an event in which by clicking on the center button
 only active events are displayed */ 

todoButtonRight.addEventListener("click", function () {

  Array.from(document.querySelectorAll('.mainBox')).map(function (obj) {
    obj.classList.remove('offDisplay');
    console.log(obj);

    if (obj.children[0].className.includes('noText') == false) {

      obj.classList.toggle('offDisplay');
    }
  });
});
/* add an event in which by clicking on the right button
 only complited events are displayed */ 
