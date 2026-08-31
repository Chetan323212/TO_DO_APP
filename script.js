
let addbtn = document.querySelector("#addBtn");
let takslist = document.querySelector("#taskList");
let taskInput = document.querySelector("#taskInput");
let input = taskInput.value;


function addButton(){
    addbtn.addEventListener("click", function(){
        let task = document.createElement("li")
        task.textContent = taskInput.value;
        takslist.appendChild(task)
    })
}

addButton()