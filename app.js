const todoList = document.querySelector(".list")
const input = document.querySelector(".input")
const button = document.querySelector(".button")

//Add EventListeners
button.addEventListener('click', addTodo);
todoList.addEventListener('click', delCheck);

function addTodo(){
    if(input.value.trim() == ""){
        alert('Input Connot Be Empty')
    }
    else{
    const inputValue = input.value;
    //Create todoDiv
    const domTodo = document.createElement('div')
    domTodo.classList.add('todoDiv')
    todoList.appendChild(domTodo)
    //Create Li
    const domLI = document.createElement('li');
    domLI.classList.add('domLi')
    domLI.innerText = inputValue
    domTodo.appendChild(domLI);
    //Create Delete Button
    const delBtn = document.createElement('button');
    delBtn.innerText = 'Close'
    delBtn.classList.add('delBtn');
    domTodo.appendChild(delBtn)
    //Create Check Button
    const cheBtn = document.createElement('button');
    cheBtn.innerText = 'Check'
    cheBtn.classList.add('checkBtn');
    domTodo.appendChild(cheBtn)
    //Empty Input After Sending
    input.value = ''
    }    
}
function delCheck(e){
    const item = e.target
    console.log(item);
    if(item.classList[0] === "delBtn"){
        item.parentNode.remove()
    }
    else if(item.classList[0] === "checkBtn"){
        item.parentNode.classList.toggle('checked');
        

    }

}

