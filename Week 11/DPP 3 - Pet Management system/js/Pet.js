// Define and export the Pet class
export default class Pet {
  // Private field to store the pet's health
  #health;

  // Constructor to create a new Pet instance
  constructor(name, type) {
    this.name = name; // Set the pet's name
    this.type = type; // Set the pet's type
    this.#health = 100; // Initialize health to 100
  }

  // Getter method to access the private health field
  get health() {
    return this.#health;
  }

  // Method to feed the pet
  feed() {
    // Increase health by 10, but not above 100
    this.#health = Math.min(100, this.#health + 10);
    // Return a message about the feeding and current health
    return `${this.name} has been fed. Health: ${this.#health}`;
  }

  // Method to play with the pet
  play() {
    // Decrease health by 5, but not below 0
    this.#health = Math.max(0, this.#health - 5);
    // Return a message about playing and current health
    return `${this.name} plays happily. Health: ${this.#health}`;
  }

  // Static method to provide general info about pets
  static info() {
    return 'Pets need care and love!';
  }
}
