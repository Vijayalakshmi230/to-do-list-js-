document.addEventListener("DOMContentLoaded", () => {
    const addButton = document.getElementById("add-task-btn");
    const todoTask = document.getElementById("task-list");
    const todoInput = document.getElementById("new-task");

    addButton.addEventListener("click", (e) => {
        e.preventDefault();
        if (todoInput.value.trim() === "") {
            alert("Please enter some text");
            return;
        }

        const todo = document.createElement("div");
        todo.classList.add("todo");

        const li = document.createElement("li");
        li.innerText = todoInput.value;
        todo.appendChild(li);

        const checkButton = document.createElement("button");
        checkButton.innerHTML = '<i class="fa-solid fa-check"></i>';
        checkButton.classList.add("todo-check");
        todo.appendChild(checkButton);

        const deleteButton = document.createElement("button");
        deleteButton.innerHTML = '<i class="fa-solid fa-circle-minus"></i>';
        deleteButton.classList.add("todo-delete");
        todo.appendChild(deleteButton);

        todoTask.appendChild(todo);
        todoInput.value = "";
    });

    todoTask.addEventListener("click", (e) => {
        const target = e.target;
        if (target.classList.contains("todo-delete")) {
            const item = target.parentElement;
            item.remove();
        } else if (target.classList.contains("todo-check")) {
            const item = target.parentElement;
            item.classList.toggle("completed");
        }
    });
});
