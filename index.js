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
  if (!todos.includes(todoInput.value)) {
    const todo = todoInput.value
    todos.push(todo)
    clearTodoInput()
    saveToLocalStorage(todos)
    renderList()
  } else {
    todoInput.value = ""
    alert('Already added')
  }

})

function saveToLocalStorage(list) {
  localStorage.setItem("todos", JSON.stringify(list))
}

function appendToList(value) {
  const listItem = document.createElement("li")
  listItem.textContent = value
  listItem.addEventListener("click", function(e) {
    const updatedTodos = todos.filter(function(todo) {
      return todo !== e.target.textContent
    })
    todos = updatedTodos
    saveToLocalStorage(todos)
    renderList()
  })
  todosList.append(listItem)
}

function clearTodoInput() {
  todoInput.value = ""
}

function renderList() {
  todosList.innerHTML = ""
  todos.forEach(function(todo) {
    appendToList(todo)
  })
}