function addTask() {
    const newTask = document.getElementById('new-task').value;
    const task = newTask.trim();

    if (task !== '') {
        const itemLista = document.createElement('li');
        itemLista.textContent = task;
        itemLista.classList.add('itens');
        

        // Adicionar botão de remover
        const removeButton = document.createElement('button');
        const removeIcon = document.createElement('img');
        removeIcon.src = 'imagens/lixeira.png';
        removeIcon.alt = 'Remover';
        removeIcon.width = 20;
        removeButton.classList.add('remove-button');
        removeButton.appendChild(removeIcon);
        removeButton.addEventListener('click', () => removeTask(itemLista));

    
        // Adicionar botão de concluir
        const completeButton = document.createElement('button');
        const completeIcon = document.createElement('img');
        completeIcon.src = 'imagens/concluido.png';
        completeIcon.alt = 'Concluir';
        completeIcon.width = 20;
        completeButton.classList.add('concluir-button');
        completeButton.appendChild(completeIcon);
        completeButton.addEventListener('click', () => completeTask(itemLista));

        // Adicionar botões à tarefa
        itemLista.appendChild(completeButton);
        itemLista.appendChild(removeButton);


        const lista = document.getElementById('task-list');
        lista.appendChild(itemLista);
        
        document.getElementById('new-task').value = '';
    }
}

function removeTask(taskElement) {
    taskElement.remove();
}

// Função para marcar uma tarefa como concluída
function completeTask(taskElement) {
    taskElement.classList.toggle('completed');
}

function filtroTasks() {
    const selectFilter = document.getElementById('filtro').value;
    const tasks = document.getElementById('task-list').children;

    for (const task of tasks) {
        switch (selectFilter) {
            case 'completed':
                task.style.display = task.classList.contains('completed') ? 'block' : 'none';
                break;
            case 'uncompleted':
                task.style.display = !task.classList.contains('completed') ? 'block' : 'none';
                break;
            default:
                task.style.display = 'block';
        }
    }
}