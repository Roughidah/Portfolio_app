<template>
    <div class="todo-app">
        <h1 class="app-title">{{ appTitle }}</h1>

        
<!-- Input for new todo -->
     <div class="todo-input">
        <input
          v-model="newTodoText"
          type="text" 
          placeholder="Add a new todo" 
          @keyup.enter="addTodo"
        />
        <button @click="addTodo" :disabled="!newTodoText.trim()">Add</button>
      </div>

 <!-- Todo list -->

        <ul class="todo-list">

          <ToDoItem
            v-for="todo in todos"
            :key="todo.id"
            :todo="todo"
            @remove="removeTodo"
          />

        </ul>
        <p v-if="todos.length === 0" class="empty-state">
            No todos yet, Awesome! 💃
        </p>
    </div>
</template>

<script>
import ToDoItem from "./TodoItem.vue"

export default{
    name: 'TodoApp',
    components:{
        ToDoItem
    },
    data(){
        return {
            newTodoText: "",
            todos: [
                {id: 1, text: 'Learn HTML'},
                {id: 2, text: 'Learn CSS'},
                {id: 3, text: 'Learn JavaScript'}
            ]
        }
    },
    computed: {
        appTitle(){
            return `My to dos (${this.todos.length})`
        }
    },
    methods: {
        removeTodo(id){
            const index = this.todos.findIndex(todo => todo.id ===id)
            if (index !== -1){
                this.todos.splice(index, 1)
            }
        },
        
      addTodo() {
        const text = this.newTodoText.trim();
        if (text) {
          const newTodo = {
            id: Date.now(),
            text,
          };
          this.todos.unshift(newTodo); // Add to top
          this.newTodoText = ""; // Clear input
        }
      }


    }
}
</script>

<style scoped>
 html,
    body {
      margin: 0;
      padding: 0;
      box-sizing: border-box;

      height: 100%;
      background-color: #f5f5f5;

      font-family: Arial, sans-serif;
    }

    #app {
      height: 100%;

      display: grid;
      place-items: center;
    }

    .todo-app {
      width: 400px;

      background-color: #fff;
      padding: 20px;
      border-radius: 5px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }

    .todo-list {
      list-style: none;
      padding: 0;
    }

    .todo-input {
      display: flex;
      gap: 10px;
    }

    .todo-input input {
      flex: 1;
      padding: 8px;
      border: 1px solid #ccc;
      border-radius: 5px;
    }

    .todo-input button {
      padding: 8px 12px;
      background-color: #4caf50;
      color: white;
      border: none;
      border-radius: 5px;
      cursor: pointer;
    }

    .todo-input button:hover {
      background-color: #45a049;
    }

    .todo-input button:disabled {
      background-color: #ccc;
      cursor: not-allowed;
    }

    .todo-input input:disabled {
      background-color: #f5f5f5;
    }

    .todo-input input:focus {
      outline: none;
      border-color: #4caf50;
    }

    .todo-input button:disabled {
      background-color: #ccc;
      cursor: not-allowed;
    }

    .todo-item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 10px;
    }

    .todo-text {
      flex: 1;
    }

    .remove-btn {
      background-color: #dc3545;
      color: white;
      border: none;
      padding: 5px 10px;
      border-radius: 5px;
      cursor: pointer;
    }

    .remove-btn:hover {
      background-color: #c82333;
    }

    .empty-state {
      text-align: center;
      color: #6c757d;
    }
</style>