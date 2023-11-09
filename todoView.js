class TodoView {
  constructor() {
      this.taskList = document.getElementById('taskList');
      this.taskInput = document.getElementById('taskInput');
      this.addTaskButton = document.getElementById('addTask');
      this.filterAllButton = document.getElementById('filterAll');
      this.filterActiveButton = document.getElementById('filterActive');
      this.filterCompletedButton = document.getElementById('filterCompleted');
      this.clearCompletedButton = document.getElementById('clearCompleted');
  }

  bindAddTask(handler) {
      this.addTaskButton.addEventListener('click', () => {
          const task = this.taskInput.value;
          if (task.trim() !== '') {
              handler(task);
              this.taskInput.value = '';
          }
      });
  }

  bindEditTask(handler) {
      this.taskList.addEventListener('dblclick', (e) => {
          if (e.target.tagName === 'LI') {
              const taskText = e.target.textContent;
              const newText = prompt('Editar tarea:', taskText);
              if (newText !== null) {
                  handler(Array.from(this.taskList.children).indexOf(e.target), newText);
              }
          }
      });
  }

  bindToggleTask(handler) {
      this.taskList.addEventListener('click', (e) => {
          if (e.target.tagName === 'LI') {
              handler(Array.from(this.taskList.children).indexOf(e.target));
          }
      });
  }

  bindRemoveTask(handler) {
      this.taskList.addEventListener('click', (e) => {
          if (e.target.classList.contains('delete')) {
              handler(Array.from(this.taskList.children).indexOf(e.target.parentElement));
          }
      });
  }

  bindClearCompletedTasks(handler) {
      this.clearCompletedButton.addEventListener('click', () => {
          handler();
      });
  }

  bindFilterTasks(handler) {
      this.filterAllButton.addEventListener('click', () => {
          handler('all');
      });

      this.filterActiveButton.addEventListener('click', () => {
          handler('active');
      });

      this.filterCompletedButton.addEventListener('click', () => {
          handler('completed');
      });
  }

  displayTasks(tasks) {
      this.taskList.innerHTML = '';
      tasks.forEach((task, index) => {
          const li = document.createElement('li');
          li.textContent = task.text;
          if (task.completed) {
              li.classList.add('completed');
          }
          const deleteButton = document.createElement('button');
          deleteButton.textContent = 'Eliminar';
          deleteButton.className = 'delete';
          li.appendChild(deleteButton);
          this.taskList.appendChild(li);
      });
  }
}
