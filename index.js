 // Select the elements from the HTML
 let inputBox = document.getElementById("todo-text");
 let addButton = document.getElementById("add-btn");
 let date = document.getElementById("dark-mode-toggle")
 let listContainer = document.getElementById("list-container");

 // Function to add a new task to the list
 function addTask() {
   if (inputBox.value === '') {
     alert("Please enter a task.");
   } else {
     let li = document.createElement("li"); // Create a new list item
     li.textContent = inputBox.value;         // Set the text of the list item
     listContainer.appendChild(li);           // Add it to the list
     inputBox.value = '';                     // Clear the input field
     let span = document.createElement("span");
     span.innerHTML = "\u00d7";
     li.appendChild(span);     
           
   }
   inputBox.value = "";
   saveData();
 }

 
 // Attach the function to the button's click event
 addButton.addEventListener("click", addTask);


 
listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData(){
  localStorage.setItem("data", listContainer.innerHTML)
}

function showTask(){
  listContainer.innerHTML = localStorage.getItem("data");
}
showTask()


let currentDate = new Date().toISOString().split("T")[0];
todoDate.setAttribute("min", currentDate);







































// let input = document.querySelector('input')
// let button = document.querySelector('button')
// let ul = document.querySelector(ul)
// console.log(input.value)

// input = function{

// }



// if (!todo){
//   throw new Error('please enter todo');
//   return;
// }

// //create a text node
// const textNode  =document.createTextNode(todo)
// //create a list item element
// let todo
// const li = document.createElement('li')
// //todo content and button for each todo
// let todoContent = document

// //Delete the delete when clicked