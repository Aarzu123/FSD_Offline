// Get references to important elements in the HTML
const form = document.getElementById('registrationForm');
const errorMessages = document.getElementById('errorMessages');

// Add an event listener for when the form is submitted
form.addEventListener('submit', (e) => {
    // Prevent the default form submission behavior
    e.preventDefault();
    // Clear any previous error messages
    errorMessages.innerHTML = '';

    // Get the values entered by the user
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Show an alert with the submitted information
    alert(`Registration successful!\n\nName: ${name}\nEmail: ${email}\nPassword: ${password}`);

    // Reset the form fields after submission
    form.reset();
});
