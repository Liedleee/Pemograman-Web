document.getElementById('addBtn').addEventListener('click', function() {
    let taskInput = document.getElementById('taskInput').value;
    
    if (taskInput === "") {
        alert("Please enter a task");
        return;
    }

    let taskList = document.getElementById('taskList');
    
    let li = document.createElement('li');
    li.textContent = taskInput;

    let editBtn = document.createElement('button');
    editBtn.textContent = 'Edit';
    editBtn.classList.add('editBtn');
    
    editBtn.addEventListener('click', function() {
        let newTask = prompt("Edit your task:", li.textContent.replace('', '').trim());
        if (newTask) {
            li.childNodes[0].textContent = newTask;
        }
    });

    let deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.classList.add('deleteBtn');
    
    deleteBtn.addEventListener('click', function() {
        taskList.removeChild(li);
    });

    li.appendChild(editBtn);
    li.appendChild(deleteBtn);
    taskList.appendChild(li);
    
    document.getElementById('taskInput').value = '';
});
