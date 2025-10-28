const form = document.getElementById('form')
const todosUl = document.getElementById('todos')
const input = document.getElementById('input')
let todos = []

todos = JSON.parse(localStorage.getItem('data'))
if (todos) {
  todos.forEach((todo) => {
    addTodo(todo)
  })
}

form.addEventListener('submit', (e) => {
  e.preventDefault()
  if (input.value.trim() === '') {
    alert('Enter valid Text')
    return
  }
  addTodo()
})

function addTodo(todo) {
  const todoText = todo ? todo.text : input.value.trim()

  if (todoText) {
    const todoLi = document.createElement('li')
    if (todo && todo.completed) {
      todoLi.classList.add('completed')
    }

    todoLi.innerText = todoText
    //add to ul
    todosUl.appendChild(todoLi)

    // toggle completed
    todoLi.addEventListener('click', () => {
      todoLi.classList.toggle('completed')
      updateLS()
    })

    //remove li
    todoLi.addEventListener('contextmenu', (e) => {
      //to prevent browsers menu popup
      e.preventDefault()
      todoLi.remove()
      updateLS()
    })

    input.value = ''
  }
  updateLS()
}

function updateLS() {
  todos = []
  const allTodos = document.querySelectorAll('li')
  allTodos.forEach((oneTodo) => {
    const todo = {
      text: oneTodo.innerText,
      completed: oneTodo.classList.contains('completed'),
    }
    todos.push(todo)
  })
  localStorage.setItem('data', JSON.stringify(todos))
}
