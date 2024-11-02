// Get references to important elements in the HTML
const form = document.getElementById('registrationForm');
const errorMessages = document.getElementById('errorMessages');

// Add an event listener for form submission
form.addEventListener('submit', (e) => {
    // Prevent default form submission
    e.preventDefault();
    // Clear any previous error messages
    errorMessages.innerHTML = '';

    // Get the values entered by the user
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    try {
        // Attempt to validate each field
        validateName(name);
        validateEmail(email);
        validatePassword(password);

        // If all validations pass, show the submitted data and reset the form
        alert(`Registration successful!\n\nName: ${name}\nEmail: ${email}\nPassword: ${password}`);
        form.reset();
    } catch (error) {
        // If any validation fails, display the error message
        displayError(error.message);
    }
});

// Function to validate the name
function validateName(name) {
    if (name.trim().length < 2) {
        throw new Error('Name must be at least 2 characters long.');
    }
}

// Function to validate the email
function validateEmail(email) {
    // Regular expression for basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        throw new Error('Please enter a valid email address.');
    }
}

// Function to validate the password
function validatePassword(password) {
    if (password.length < 8) {
        throw new Error('Password must be at least 8 characters long.');
    }
}

// Function to display error messages on the page
function displayError(message) {
    // Create a new paragraph element for the error message
    const errorElement = document.createElement('p');
    errorElement.textContent = message;
    errorElement.style.color = "red";
    errorMessages.appendChild(errorElement);
}
