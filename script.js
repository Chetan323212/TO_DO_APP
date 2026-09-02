let addbtn = document.querySelector("#addBtn");
let takslist = document.querySelector("#taskList");
let taskInput = document.querySelector("#taskInput");
let addTask 
function todoApp(){
  addbtn.addEventListener("click", function (e) {
    let task = document.createElement("li");
    console.log(e);
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
    taskInput.value = ""; // clear the input fild 
    taskInput.focus();
    
    // delete button event
    Deletebtn.addEventListener("click", function () {
      task.remove()
    });
   } 
  });
  
}

todoApp()
        

taskInput.addEventListener("keyup", function(event){
        if(event.key === "Enter"){
            console.log("Enter key preass");
            todoApp()
        }
})
