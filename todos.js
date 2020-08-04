// Identifica o HTML
var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input')
var buttonElement = document.querySelector('#app button')

// Pega os dados da localStorage
var todos = JSON.parse(localStorage.getItem('list_todos')) || []

// Função chamada ao executar o HTML ou ao inserir ou excluir algum item da lista 
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

// Adiciona novos itens na lista
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

// Adiciona o onclick no Button
buttonElement.onclick = addTodo

function deleteTodo(pos) {
    todos.splice(pos, 1)
    renderTodos()
}

// Salva os dados na loaclStorage
function saveToStorage() {
    localStorage.setItem('list_todos', JSON.stringify(todos))
}

// Monta a lista ao renderizar a página
renderTodos()