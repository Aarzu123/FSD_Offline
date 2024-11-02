// Function to save todos to local storage
export function saveTodos(todos) {
  // Convert todos array to JSON string and store in localStorage
  localStorage.setItem('todos', JSON.stringify(todos));
}

// Function to load todos from local storage
export function loadTodos() {
  // Retrieve todos from localStorage
  const storedTodos = localStorage.getItem('todos');
  // If todos exist, parse JSON string to array; otherwise, return empty array
  return storedTodos ? JSON.parse(storedTodos) : [];
}
