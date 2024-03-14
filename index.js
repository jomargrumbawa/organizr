const todosList = document.getElementById("todos")
const submitBtn = document.getElementById("submit-btn")
const todoInput = document.getElementById("todo-input")

submitBtn.addEventListener("click", function() {
  const todo = todoInput.value
  appendToList(todo)
})

function appendToList(value) {
  const listItem = document.createElement("li")
  listItem.textContent = value
  todosList.append(listItem)
}