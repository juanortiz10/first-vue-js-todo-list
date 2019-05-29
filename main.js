var app = new Vue({
  el: "#app",
  data: {
    todoName: "",
    todos: []
  },
  methods: {
    handleSubmitForm() {
      this.todos.push({ id: this.todos.length, value: this.todoName });
      this.todoName = "";
    },
    handleDeleteTodo(todoId) {
      this.todos = this.todos.filter(todo => todo.id !== todoId);
    }
  }
});
