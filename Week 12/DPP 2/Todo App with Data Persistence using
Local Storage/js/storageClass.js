// TodoStorage class for handling localStorage operations
export default class TodoStorage {
  // Static method to save todos to local storage
  static saveTodos(todos) {
    // Convert todos array to JSON string and store in localStorage
    localStorage.setItem('todos', JSON.stringify(todos));
  }

  // Static method to load todos from local storage
  static loadTodos() {
    // Retrieve todos from localStorage
    const storedTodos = localStorage.getItem('todos');
    // If todos exist, parse JSON string to array; otherwise, return empty array
    return storedTodos ? JSON.parse(storedTodos) : [];
  }
}
