import Pet from './Pet.js';

// Define and export the Dog class, which extends Pet
export default class Dog extends Pet {
  // Constructor to create a new Dog instance
  constructor(name) {
    // Call the parent class constructor with 'Dog' as the type
    super(name, 'Dog');
  }

  // Override the play method for Dog
  play() {
    // Call the parent class play method and store the result
    const result = super.play();
    // Return the result with an additional dog-specific message
    return `${result} Buddy fetches a stick!`;
  }
}
