const quotes = [
    "Push yourself, because no one else is going to do it for you.",
    "Dream big. Start small. Act now.",
    "Discipline is choosing between what you want now and what you want most.",
    "You don’t need to be great to start. But you have to start to be great.",
    "Small steps every day lead to big results.",
    "Your future is created by what you do today, not tomorrow.",
    "Focus on the step in front of you, not the whole staircase.",
    "Done is better than perfect.",
    "Success is the sum of small efforts, repeated day in and day out."
];

function showRandomQuote(){
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const quoteElement  = document.getElementById("quote")
    quoteElement.innerText= `"${quotes[randomIndex]}"`;
}
showRandomQuote();


const taskInput = document.getElementById("taskInput")
const addBtn = document.getElementById("addBtn")

addBtn.addEventListener("click",function(event){
    event.preventDefault();
    const task = taskInput.value.trim();
    if (task !== ""){
        addTaskToDom(task);
        taskInput.value = "";
    }
    else{
        alert("Please enter a task")
    }
})


function addTaskToDom(task){
    const tasklist = document.getElementById("tasklist")
    const taskDiv = document.createElement("div")
    taskDiv.classList.add("taskitem")   
    taskDiv.innerText=task
    tasklist.appendChild(taskDiv)
    updateTaskCount()
    

    const deletebtn = document.createElement("button")
    deletebtn.classList.add("deletebtn")
    deletebtn.innerText="❌";

    deletebtn.addEventListener("click",function(){
        taskDiv.remove()
        updateTaskCount();
    })
    taskDiv.appendChild(deletebtn)
    

    taskDiv.addEventListener("click",function(){
        taskDiv.classList.toggle("completed")
    })

    
    const clearbtn = document.getElementById('clearAll')
    clearbtn.addEventListener("click",function(){
        tasklist.innerHTML = "";
        updateTaskCount()
    })
}


function updateTaskCount(){
    const count = document.querySelectorAll('.taskitem').length;
    document.getElementById('counter').innerText=`Tasks: ${count}`
}