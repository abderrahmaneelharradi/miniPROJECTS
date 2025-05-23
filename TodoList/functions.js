export function addTask(taskText) {
    const taskList = document.getElementById("taskList");
    const li = document.createElement("li");

    const span = document.createElement("span");
    span.textContent = taskText;

    const removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove";
    removeBtn.style.marginLeft = "10px";

    removeBtn.addEventListener("click", () => {
      removeTask(li);
    });

    li.appendChild(span);
    li.appendChild(removeBtn);
  
    taskList.appendChild(li);
  }
  
  export function removeTask(taskElement) {
    taskElement.remove();
  }