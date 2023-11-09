class TodoModel {
  constructor() {
      this.tasks = [];
  }

  addTask(task) {
      this.tasks.push({ text: task, completed: false });
  }

  getTasks() {
      return this.tasks;
  }

  editTask(index, newText) {
      this.tasks[index].text = newText;
  }

  toggleTask(index) {
      this.tasks[index].completed = !this.tasks[index].completed;
  }

  removeTask(index) {
      this.tasks.splice(index, 1);
  }

  clearCompletedTasks() {
      this.tasks = this.tasks.filter(task => !task.completed);
  }
}
