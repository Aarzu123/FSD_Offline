// Import the Pet class from the Pet.js file
// This allows us to extend the Pet class with Cat-specific features
import Pet from './Pet.js';

// Define a new class called Cat that inherits from the Pet class
// This means Cat will have all the properties and methods of Pet, plus some extras
export default class Cat extends Pet {
  // This is the constructor method. It's called when we create a new Cat
  // It takes one parameter: the name of the cat
  constructor(name) {
    // Call the constructor of the parent (Pet) class
    // We pass the name and 'Cat' as the type to the Pet constructor
    super(name, 'Cat');
    // We don't need to set any Cat-specific properties here,
    // but we could if we wanted to (e.g., this.lives = 9;)
  }

  // This is a method specific to cats. It overrides the play method from the Pet class
  // This means when we call play() on a Cat, this version will be used instead of the Pet version
  play() {
    // First, we call the play method from the parent class using super.play()
    // This ensures that the health is updated as it would for any pet
    const result = super.play();

    // Then, we add a cat-specific message to the result
    // This shows how cats play differently from other pets
    return `${result} Whiskers chases a toy mouse!`;
  }

  // This is a method that only cats have
  // It demonstrates how we can add new behaviors to our Cat class that don't exist in the Pet class
  scratch() {
    // Simply return a string describing the cat scratching
    // In a more complex app, this might do more (e.g., damage furniture!)
    return `${this.name} scratches.`;
  }
}
