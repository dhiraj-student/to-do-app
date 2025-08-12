document.getElementById('add-task').addEventListener('click', function () {
    const taskInput = document.getElementById('new-task');
    const taskText = taskInput.value.trim();

    if (taskText !== "") {
        const taskList = document.getElementById('task-list');

        const newTask = document.createElement('li');
        newTask.textContent = taskText;

        const completeBtn = document.createElement('button');
        completeBtn.textContent = 'Complete';
        completeBtn.addEventListener('click', function () {
            newTask.classList.toggle('completed');
        });

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.classList.add('delete');
        deleteBtn.addEventListener('click', function () {
            taskList.removeChild(newTask);

            
            document.body.style.backgroundImage = "url('images/task-completed.jpg')";

            
            setTimeout(() => {
                document.body.style.backgroundImage = "url('images/kid.jpg')";
            }, 5000);
        });

        newTask.appendChild(completeBtn);
        newTask.appendChild(deleteBtn);

        taskList.appendChild(newTask);

        taskInput.value = '';
    }
});
