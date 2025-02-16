function addTask() {
    const taskInput = document.getElementById('task-input');
    const task = taskInput.value.trim();//here trim extra whide spaces ko accept nh krega kay agr user empty dsta day wau display na ho
    if (task === '') return;
    
    const list = document.getElementById('task-list');
    const item = document.createElement('li');
    item.textContent = task;
    
    const btn = document.createElement('button');
    btn.textContent = '✔';
    btn.style.marginLeft = '1rem';
    btn.onclick = () => item.classList.toggle('completed');
    
    item.appendChild(btn);
    list.appendChild(item);
}