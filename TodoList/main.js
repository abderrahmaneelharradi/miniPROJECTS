import { addTask } from "./functions.js";

document.getElementById("addButton").addEventListener("click", () => {
    const input = document.getElementById('taskInput');
    const taskText = input.value.trim();

    if (taskText !== "") {
        addTask(taskText);
        input.value = "";
    }
})