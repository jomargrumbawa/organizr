const todosList = document.getElementById("todos")
const submitBtn = document.getElementById("submit-btn")
const todoInput = document.getElementById("todo-input")
let todos = []

if (localStorage.getItem("todos")) {
  todos = JSON.parse(localStorage.getItem("todos"))
  todos.forEach(function(todo) {
    appendToList(todo)
  })
}

submitBtn.addEventListener("click", function() {
  const todo = todoInput.value
  todos.push(todo)
  clearTodoInput()
  saveToLocalStorage(todos)
  appendToList(todo)
})

function saveToLocalStorage(list) {
  localStorage.setItem("todos", JSON.stringify(list))
}

function appendToList(value) {
  const listItem = document.createElement("li")
  listItem.textContent = value
  todosList.append(listItem)
}

function clearTodoInput() {
  todoInput.value = ""
}