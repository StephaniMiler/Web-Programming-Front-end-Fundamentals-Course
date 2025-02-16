;(function () {
    "use strict"

    // ARMAZENAR O DOM EM VARIÁVEIS
    const itemInput = document.getElementById("item-input");
    const todoAddForm = document.getElementById("todo-add");
    const ul = document.getElementById("todo-list");

    // Recupera as tarefas do Local Storage ou inicia uma lista vazia
    let arrTasks = JSON.parse(localStorage.getItem("tasks")) || [];

    function saveTasks() {
        localStorage.setItem("tasks", JSON.stringify(arrTasks));
    }

    function generateLiTask(obj) {
        const li = document.createElement("li");
        const p = document.createElement("p");
        const checkButton = document.createElement("button");
        const editButton = document.createElement("i");
        const deleteButton = document.createElement("i");

        li.className = "todo-item";

        // Botão de Check
        checkButton.className = "button-check";
        checkButton.innerHTML = `<i class="fas fa-check ${obj.completed ? "" : "displayNone"}"></i>`;
        checkButton.setAttribute("data-action", "checkButton");
        li.appendChild(checkButton);

        // Nome da tarefa
        p.className = "task-name";
        p.textContent = obj.name;
        if (obj.completed) {
            p.style.textDecoration = "line-through"; // Se concluída, risca o texto
        }
        li.appendChild(p);

        // Botão de Edição
        editButton.className = "fas fa-edit";
        editButton.setAttribute("data-action", "editButton");
        li.appendChild(editButton);

        // Container de edição
        const containerEdit = document.createElement("div");
        containerEdit.className = "editContainer";
        const inputEdit = document.createElement("input");
        inputEdit.setAttribute("type", "text");
        inputEdit.className = "editInput";
        inputEdit.value = obj.name
        containerEdit.appendChild(inputEdit);

        const containerEditButton = document.createElement("button");
        containerEditButton.className = "editButton";
        containerEditButton.textContent = "Edit";
        containerEditButton.setAttribute("data-action", "containerEditButton");
        containerEdit.appendChild(containerEditButton);

        const containerCancelButton = document.createElement("button");
        containerCancelButton.className = "cancelButton";
        containerCancelButton.textContent = "Cancel";
        containerCancelButton.setAttribute("data-action", "containerCancelButton");
        containerEdit.appendChild(containerCancelButton);

        li.appendChild(containerEdit);

        // Botão de Deletar
        deleteButton.className = "fas fa-trash-alt";
        deleteButton.setAttribute("data-action", "deleteButton");
        li.appendChild(deleteButton);

        return li;
    }

    function renderTasks() {
        ul.innerHTML = "";
        arrTasks.forEach(task => {
            ul.appendChild(generateLiTask(task));
        });
        saveTasks(); // Salva a lista sempre que for renderizada
    }

    function addTask(task) {
        arrTasks.push({
            name: task,
            createAt: Date.now(),
            completed: false
        });
        saveTasks(); // Salva as tarefas no Local Storage
    }

    function clickedUl(e) {
        const dataAction = e.target.getAttribute("data-action");
        if (!dataAction) return;

        let currentLi = e.target.closest("li"); // Encontra o <li> pai do elemento clicado
        let taskIndex = [...ul.children].indexOf(currentLi); // Encontra o índice da tarefa no array

        const actions = {
            checkButton: function () {
                arrTasks[taskIndex].completed = !arrTasks[taskIndex].completed; // Alterna o estado
                renderTasks();
            },
            editButton: function () {
                const editContainer = currentLi.querySelector(".editContainer");
                editContainer.style.display = "block";
            },
            containerEditButton: function () {
                const newValue = currentLi.querySelector(".editInput").value;
                if (newValue.trim()) {
                    arrTasks[taskIndex].name = newValue;
                    renderTasks();
                }
            },
            containerCancelButton: function () {
                renderTasks();
            },
            deleteButton: function () {
                arrTasks.splice(taskIndex, 1); // Remove a tarefa do array
                renderTasks();
            }
        };

        if (actions[dataAction]) {
            actions[dataAction]();
        }
    }

    todoAddForm.addEventListener("submit", function(e) {
        e.preventDefault();
        if (itemInput.value.trim()) {
            addTask(itemInput.value);
            renderTasks();
            itemInput.value = "";
            itemInput.focus();
        }
    });

    ul.addEventListener("click", clickedUl);
    
    // Renderiza as tarefas ao carregar a página
    renderTasks();

})();
