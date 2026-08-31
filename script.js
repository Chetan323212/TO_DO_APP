let addbtn = document.querySelector("#addBtn");
let takslist = document.querySelector("#taskList");
let taskInput = document.querySelector("#taskInput");
let input = taskInput.value;

function addButton() {
  addbtn.addEventListener("click", function () {
    let task = document.createElement("li");

    if (taskInput.value == "") {
      alert("Enter your task");
    }else{
    // delete button create
    let Deletebtn = document.createElement("button");
    Deletebtn.textContent = "Complet";
    Deletebtn.setAttribute("id", "delebtn");
    task.textContent = taskInput.value;
    takslist.appendChild(task);
    task.appendChild(Deletebtn);
    

    // delete button event
    Deletebtn.addEventListener("click", function () {
      task.remove()
    });
   } 
  });
}

function deleteButton() {}

addButton();
