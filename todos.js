var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input')
var buttonElement = document.querySelector('#app button')

var todos = JSON.parse(localStorage.getItem('list_todos')) || []

function renderTodos() {

    listElement.innerHTML = ''

    for (todo of todos) {

        var pos = todos.indexOf(todo)

        var todoElement = document.createElement('li')
        var todoText = document.createTextNode(todo)

        var linkElement = document.createElement('a')
        var linkText = document.createTextNode('Excluir')

        linkElement.setAttribute('href', '#')
        linkElement.setAttribute('onclick', 'deleteTodo(' + pos + ')')
        linkElement.appendChild(linkText)

        todoElement.appendChild(todoText)
        todoElement.appendChild(linkElement)
        listElement.appendChild(todoElement)
    }

    saveToStorage()
}

function addTodo() {
    var todoText = inputElement.value

    if(todoText !== ''){
        todos.push(todoText)
        inputElement.value = ''
        renderTodos()
    } else {
        alert('Digite algo...')
        inputElement.focus()
    }

}

buttonElement.onclick = addTodo

function deleteTodo(pos) {
    todos.splice(pos, 1)
    renderTodos()
}

function saveToStorage() {
    localStorage.setItem('list_todos', JSON.stringify(todos))
}

renderTodos()