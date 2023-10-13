
// Carregar dados do localStorage na inicialização
var savedData = JSON.parse(localStorage.getItem('tarefasData')) || { tarefas: [], concluidas: [] };

// Inicializar a lista de tarefas com os dados do localStorage
function inicializarListaDeTarefas() {
    var taskList = document.getElementById('task-list');
    taskList.innerHTML = '';

    // Adicione tarefas não concluídas
    for (var i = 0; i < savedData.tarefas.length; i++) {
        adicionarTarefaNaLista(savedData.tarefas[i], false);
    }

    // Adicione tarefas concluídas
    for (var i = 0; i < savedData.concluidas.length; i++) {
        adicionarTarefaNaLista(savedData.concluidas[i], true);
    }
}

// Função para adicionar uma tarefa à lista
function adicionarTarefaNaLista(taskText, concluida = false) {
    var taskList = document.getElementById('task-list');
    var newTask = document.createElement('li');
    newTask.className = 'list-group-item';

    if (concluida) {
        newTask.classList.add('concluida'); // Adicione uma classe "concluida" para destacar tarefas concluídas
    }

    newTask.innerHTML = `
        <span>${taskText}</span>
        <button class="btn btn-danger" onclick="excluirTarefa(this)">Excluir</button>
    `;

    taskList.appendChild(newTask);
}

// Função para adicionar uma tarefa
function adicionarTarefa() {
    var taskInput = document.getElementById('task');
    var taskText = taskInput.value.trim();

    if (taskText !== '') {
        // Verificar se a tarefa já existe na lista
        var tarefaExistente = false;
        var taskList = document.getElementById('task-list');
        var taskItems = taskList.getElementsByClassName('list-group-item');
        for (var i = 0; i < taskItems.length; i++) {
            var taskItem = taskItems[i];
            var taskSpan = taskItem.querySelector('span');
            if (taskSpan.textContent === taskText) {
                tarefaExistente = true;
                break;
            }
        }

        if (tarefaExistente) {
            alert('Essa tarefa já existe na lista.');
        } else {
            adicionarTarefaNaLista(taskText, false);
            savedData.tarefas.push(taskText); // Adicionar a tarefa à matriz de tarefas

            // Atualizar o localStorage
            localStorage.setItem('tarefasData', JSON.stringify(savedData));

            // Limpar o campo de entrada
            taskInput.value = '';
        }
    }
}

// Função para excluir tarefa
function excluirTarefa(button) {
    var taskItem = button.parentElement;
    var taskText = taskItem.querySelector('span').textContent;

    if (taskItem.classList.contains('concluida')) {
        // Remover a tarefa da matriz de concluídas
        savedData.concluidas = savedData.concluidas.filter(function (tarefa) {
            return tarefa !== taskText;
        });
    } else {
        // Remover a tarefa da matriz de tarefas
        savedData.tarefas = savedData.tarefas.filter(function (tarefa) {
            return tarefa !== taskText;
        });
    }

    // Atualizar o localStorage
    localStorage.setItem('tarefasData', JSON.stringify(savedData));

    // Remover a tarefa da lista
    taskItem.remove();
}

// Adicionar um evento para marcar tarefa como concluída
document.getElementById('task-list').addEventListener('click', function(e) {
    if (e.target.tagName === 'SPAN') {
        var taskItem = e.target.parentElement;
        marcarComoConcluida(taskItem);
    }
});

// Função para marcar tarefa como concluída
function marcarComoConcluida(taskItem) {
    var taskTextElement = taskItem.querySelector('span');

    // Verificar se a tarefa já está marcada como concluída
    if (!taskItem.classList.contains('concluida')) {
        taskTextElement.style.textDecoration = 'line-through';
        taskItem.classList.add('concluida');
        savedData.concluidas.push(taskTextElement.textContent);

        // Remover a tarefa da matriz de tarefas se já existir
        savedData.tarefas = savedData.tarefas.filter(function (tarefa) {
            return tarefa !== taskTextElement.textContent;
        });

        // Atualizar o localStorage
        localStorage.setItem('tarefasData', JSON.stringify(savedData));
    }
}

// Adicionar um evento para lidar com a tecla "Enter"
document.getElementById('task').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        adicionarTarefa();
    }
});

// Adicionar um evento de clique ao botão de adicionar
document.getElementById('add-task').addEventListener('click', adicionarTarefa);

// Chamar a função de inicialização para carregar dados do localStorage na inicialização
inicializarListaDeTarefas();
