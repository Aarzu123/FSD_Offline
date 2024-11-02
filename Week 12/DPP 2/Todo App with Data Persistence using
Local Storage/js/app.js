import { saveTodos, loadTodos } from './storage.js';
// Alternative import for class-based version:
// import TodoStorage from './storageClass.js';

// Load todos from local storage
let todos = loadTodos(); // Note: When using the class-based version, use TodoStorage.loadTodos();

// Get DOM elements
const todoForm = document.getElementById('todo-form');
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');

// Function to render todos in the DOM
function renderTodos() {
  // Clear the current list
  todoList.innerHTML = '';
  // Iterate through todos and create list items
  todos.forEach((todo, index) => {
    const li = document.createElement('li');
    li.className = `todo-item ${todo.done ? 'done' : ''}`;
    li.innerHTML = `
            <span>${todo.text}</span>
            <button class="toggle-btn" data-index="${index}">${todo.done ? 'Undo' : 'Done'}</button>
            <button class="delete-btn" data-index="${index}">Delete</button>
        `;
    todoList.appendChild(li);
  });
}

// Function to add a new todo
function addTodo(text) {
  todos.push({ text, done: false });
  saveTodos(todos); // Note: When using the class-based version, use TodoStorage.saveTodos(todos);
  renderTodos();
}

// Function to toggle todo status
function toggleTodo(index) {
  todos[index].done = !todos[index].done;
  saveTodos(todos);
  renderTodos();
}

// Function to delete a todo
function deleteTodo(index) {
  todos.splice(index, 1);
  saveTodos(todos); // Note: When using the class-based version, use TodoStorage.saveTodos(todos);
  renderTodos();
}

// Event listener for form submission (adding new todo)
todoForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const text = todoInput.value.trim();
  if (text) {
    addTodo(text);
    todoInput.value = '';
  }
});

// Event delegation for toggle and delete buttons
todoList.addEventListener('click', (e) => {
  if (e.target.classList.contains('toggle-btn') || e.target.classList.contains('delete-btn')) {
    const index = parseInt(e.target.getAttribute('data-index'), 10);
    if (e.target.classList.contains('toggle-btn')) {
      toggleTodo(index);
    } else {
      deleteTodo(index);
    }
  }
});

// Initial render of todos
renderTodos();
