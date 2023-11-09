class TodoController {
  constructor(model, view) {
      this.model = model;
      this.view = view;

      this.view.bindAddTask(this.handleAddTask.bind(this));
      this.view.bindEditTask(this.handleEditTask.bind(this));
      this.view.bindToggleTask(this.handleToggleTask.bind(this));
      this.view.bindRemoveTask(this.handleRemoveTask.bind(this));
      this.view.bindClearCompletedTasks(this.handleClearCompletedTasks.bind(this));
      this.view.bindFilterTasks(this.handleFilterTasks.bind(this));

      this.view.displayTasks(this.model.getTasks());
  }

  handleAddTask(task) {
      this.model.addTask(task);
      this.view.displayTasks(this.model.getTasks());
  }

  handleEditTask(index, newText) {
      this.model.editTask(index, newText);
      this.view.displayTasks(this.model.getTasks());
  }

  handleToggleTask(index) {
      this.model.toggleTask(index);
      this.view.displayTasks(this.model.getTasks());
  }

  handleRemoveTask(index) {
      this.model.removeTask(index);
      this.view.displayTasks(this.model.getTasks());
  }

  handleClearCompletedTasks() {
      this.model.clearCompletedTasks();
      this.view.displayTasks(this.model.getTasks());
  }

  handleFilterTasks(filter) {
      const tasks = this.model.getTasks();
      let filteredTasks = [];

      if (filter === 'all') {
          filteredTasks = tasks;
      } else if (filter === 'active') {
          filteredTasks = tasks.filter(task => !task.completed);
      } else if (filter === 'completed') {
          filteredTasks = tasks.filter(task => task.completed);
      }

      this.view.displayTasks(filteredTasks);
  }
}

const model = new TodoModel();
const view = new TodoView();
const controller = new TodoController(model, view);
