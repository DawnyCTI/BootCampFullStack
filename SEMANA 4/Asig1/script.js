/*TODO: Get Button Element By Id*/
document.getElementById('addTaskButton').addEventListener('click', function() {
    const taskInput = document.getElementById('newTaskInput');
    const newTask = taskInput.value.trim();

    if (newTask) {
        addTask(newTask);
        taskInput.value = ''; // Limpiar el campo de entrada después de añadir la tarea
    } else {
        alert('Por favor, ingresa una tarea.');
    }
});

function addTask(taskDescription) {
    const taskList = document.getElementById('taskList');
    const newListItem = document.createElement('li'); /*TODO: Create a new element*/
    newListItem.className = 'list-group-item d-flex justify-content-between align-items-center';
    
    // Crear el texto de la tarea
    const taskText = document.createElement('span');
    taskText.textContent = taskDescription;
    taskText.classList.add('task-text');
    taskText.addEventListener('click', function() {
        taskText.classList.toggle('completed'); 
    });

    // Botón de editar
    const editButton = document.createElement('button');
    editButton.className = 'btn btn-sm btn-warning me-2';
    editButton.textContent = 'Editar';
    editButton.addEventListener('click', function() {
        const newDescription = prompt('Edita la tarea:', taskText.textContent);
        if (newDescription !== null) {
            taskText.textContent = newDescription.trim() || taskText.textContent;
        }
    });

    // Botón de eliminar
    const deleteButton = document.createElement('button');
    deleteButton.className = 'btn btn-sm btn-danger';
    deleteButton.textContent = 'Eliminar';
    deleteButton.addEventListener('click', function() {
        taskList.removeChild(newListItem);
    });

    // Añadir botones y texto a la lista
    const buttonContainer = document.createElement('div');
    buttonContainer.appendChild(editButton);
    buttonContainer.appendChild(deleteButton);

    newListItem.appendChild(taskText);
    newListItem.appendChild(buttonContainer);

    // Añadir la nueva tarea a la lista
    taskList.appendChild(newListItem);
}
