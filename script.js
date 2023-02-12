//Função que adiciona tarefa

function addTask() {

    const taskTitle = document.querySelector('#task-title').value;

    if (taskTitle) {
        //clona template
        const template = document.querySelector('.template')

        const newTask = template.cloneNode(true); //cloneNode clona HTML

        //adiciona titulo
        newTask.querySelector('.task-title').textContent = taskTitle

        //remover as classes desnecessárias
        newTask.classList.remove('template');
        newTask.classList.remove('hide');

        //adiciona tarefa na lista
        const list = document.querySelector('#task-list');

        list.appendChild(newTask);

        //remover tarefa
        const removeBtn = newTask.querySelector('.remove-btn').addEventListener('click', function () {
            removeTask(this);
        })

        //adicionar completar tarefa;
        const doneBtn = newTask.querySelector('.done-btn').addEventListener('click', function () {
            completeTask(this);
        })

        //limpar texto;
        document.querySelector('#task-title').value = '';
    }
}

//Evento para adicionar tarefas;
const addBtn = document.querySelector('#add-btn');

addBtn.addEventListener('click', function (e) {

    

    e.preventDefault();

    addTask();

});

//função pra completar tarefas;
function completeTask(task) {

    const taskToComplete = task.parentNode;

    taskToComplete.classList.toggle('done');

}

//função pra remover tarefas;
function removeTask(task) {

    task.parentNode.remove(true);

}