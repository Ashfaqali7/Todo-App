var todoInp = document.getElementById('todoInp')
var showList = document.getElementById('showList')

function AddToDo() {

    var todoText = todoInp.value

    var todoTextNode = document.createTextNode(todoText)

    var todoLi = document.createElement('li')
    todoLi.setAttribute('class','todoList')
    todoLi.appendChild(todoTextNode)
    showList.appendChild(todoLi)

    var deleteBtn = document.createElement('button')
    deleteBtn.setAttribute('onclick', 'deletedTodo(this)')
    var deleteTextNode = document.createTextNode('DELETE')
    deleteBtn.appendChild(deleteTextNode)
    todoLi.appendChild(deleteBtn)

    var editBtn = document.createElement('button')
    editBtn.setAttribute('onclick','editTodo(this)')
    var editText = document.createTextNode('EDIT')
    editBtn.appendChild(editText)
    todoLi.appendChild(editBtn)

    todoInp.value = ""

    
}

function DeletedTodo(element){
    element.parentNode.remove()
}

function editTodo(element){
    element.parentNode.firstChild.nodeValue = prompt('Edit Value',element.parentNode.firstChild.nodeValue)
}

function DeleteAll(){
    showList.innerHTML = ""
}