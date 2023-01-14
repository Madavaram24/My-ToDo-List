const input = document.querySelector(".input-box");
const button = document.querySelector(".add-button");
const todolist = document.querySelector(".todo-list"); 

button.addEventListener("click",addTodo);
todolist.addEventListener("click",deleteTodo )

function addTodo(event){
event.preventDefault();

const todoDiv = document.createElement("div")
todoDiv.classList.add("todo-container")

const todoItem = document.createElement("li")
todoItem.classList.add("todo-item")
todoItem.innerText = input.value;
todoDiv.appendChild(todoItem);

const deleteButton = document.createElement("button")
deleteButton.classList.add("delete-btn")
deleteButton.innerHTML = '<i class="fa fa-trash" aria-hidden="true"></i>' 
todoDiv.appendChild(deleteButton);

const completeButton = document.createElement("button")
completeButton.classList.add("complete-btn")
completeButton.innerHTML='<i class="fa fa-check" aria-hidden="true"></i>';
todoDiv.appendChild(completeButton);

todolist.appendChild(todoDiv);
input.value = "";
}   
function deleteTodo(event){
    const item = event.target;
    if(item.classList[0] === "delete-btn"){
     const delItem = item.parentElement;
    delItem.remove();
    }
    if(item.classList[0] === "complete-btn"){
        const delItem = item.parentElement;
       delItem.classList.toggle ("completed");
       }
}