const text = "JavaScript is a versatile programming language. You can use JavaScript to build web applications, mobile apps, and more.";
console.log("Original Text:", text);

const searchWord = "JavaScript";
console.log(`The word "${searchWord}" appears at position:`,text.indexOf(searchWord));
console.log(`Does the text include the word "${searchWord}"?`,text.includes(searchWord));

console.log("Does the text start with 'JavaScript'? ",text.startsWith("JavaScript"));
console.log("Does the text end with 'more.'? ",text.endsWith("more."));

console.log("Slice from index 0 to 10:", text.slice(0, 10));

console.log("Substring from index 11 to 21:", text.substring(11, 21));

const words = text.split(" ");
console.log("Words in the text:", words);

const regex = /JavaScript/g;
console.log("First occurrence of 'JavaScript':", text.search(regex));
console.log("All occurrences of 'JavaScript':", text.match(regex));

const replacedText = text.replace(/JavaScript/g, "JS");
console.log("Text after replacement:", replacedText);

const emailPattern =/\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,7}\b/;
const testEmail = "test@example.com";
console.log("Does the text contain an email address?",emailPattern.test(testEmail));