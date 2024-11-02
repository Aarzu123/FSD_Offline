// Import the Pet, Dog, and Cat classes from their respective files
import Pet from './Pet.js';

// Function to create a DOM element for a pet
function createPetElement(pet) {
  // Create a new div element to represent the pet
  const petDiv = document.createElement('div');
  petDiv.className = 'pet';

  // Set the inner HTML of the div with pet information and interaction buttons
  petDiv.innerHTML = `
        <h2>${pet.name} (${pet.type})</h2>
        <p>Health: <span class="health">${pet.health}</span></p>
        <button class="feed">Feed</button>
        <button class="play">Play</button>
        <p class="message"></p>
    `;

  // Add event listener for the feed button
  petDiv.querySelector('.feed').addEventListener('click', () => {
    const message = pet.feed();
    updatePetUI(petDiv, pet, message);
  });

  // Add event listener for the play button
  petDiv.querySelector('.play').addEventListener('click', () => {
    const message = pet.play();
    updatePetUI(petDiv, pet, message);
  });

  return petDiv;
}

// Function to update the pet's UI with new information
function updatePetUI(petElement, pet, message) {
  petElement.querySelector('.message').textContent = message;
  petElement.querySelector('.health').textContent = pet.health;
}

// Function to create the form for adding new pets
function createPetForm() {
  // Create a new form element
  const form = document.createElement('form');

  // Set the inner HTML of the form with input fields and a submit button
  form.innerHTML = `
        <h2>Add a New Pet</h2>
        <input type="text" id="petName" placeholder="Pet Name" required>
        <select id="petType">
            <option value="generic">Generic Pet</option>
        </select>
        <button type="submit">Add Pet</button>
    `;

  // Add event listener for form submission
  form.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent the form from submitting normally

    // Get the pet name and type from the form
    const name = document.getElementById('petName').value;
    const type = document.getElementById('petType').value;
    let newPet;

    // Create a new pet instance based on the selected type
    switch (type) {
      default:
        newPet = new Pet(name, 'Generic');
    }

    // Add the new pet to the pet container
    const petContainer = document.getElementById('petContainer');
    petContainer.appendChild(createPetElement(newPet));
    form.reset(); // Reset the form after adding a pet
  });

  return form;
}

// Function to initialize the application
function init() {
  const formContainer = document.getElementById('formContainer');
  // Add the pet form to the form container
  formContainer.appendChild(createPetForm());

  // Add the general pet info to the bottom of the pet container
  const petContainer = document.getElementById('petContainer');
  const infoElement = document.createElement('p');
  infoElement.textContent = Pet.info();
  infoElement.className = 'info';
  petContainer.appendChild(infoElement);
}

// Call the init function to start the application
init();
