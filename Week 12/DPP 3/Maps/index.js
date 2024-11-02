const emptyMap = new Map();
console.log('Empty Map:', emptyMap);

const initializedMap = new Map([
    ['name', 'John Doe'],
    [42, 'The answer'],
    [{ key: 'object' }, 'Object as key']
]);
console.log('Initialized Map:', initializedMap);

const userMap = new Map();

userMap.set('username', 'johndoe');
userMap.set('email', 'john@example.com');
console.log('User Map after set():', userMap);

const username = userMap.get('username');
console.log('Retrieved username:', username);

userMap.delete('email');
console.log('User Map after delete():', userMap);

console.log('Has username?', userMap.has('username'));
console.log('Has email?', userMap.has('email'));

const fruitInventory = new Map([
    ['apples', 5],
    ['bananas', 3],
    ['oranges', 2]
]);
console.log('Fruit Inventory:');
for (const [fruit, quantity] of fruitInventory) {
    console.log(`${fruit}: ${quantity}`);
}

console.log('Available fruits:');
for (const fruit of fruitInventory.keys()) {
    console.log(fruit);
}

console.log('Quantities:');
for (const quantity of fruitInventory.values()) {
    console.log(quantity);
}

console.log('Inventory entries:');
for (const entry of fruitInventory.entries()) {
    console.log(entry);
}

const clearExample = new Map([['a', 1], ['b', 2], ['c', 3]]);
console.log('Before clear():', clearExample);
clearExample.clear();
console.log('After clear():', clearExample);

const sizeExample = new Map([['x', 10], ['y', 20], ['z', 30]]);
console.log('Map size:', sizeExample.size);

// Create a new Map to store student information
const studentRoster = new Map();
// Add students to the roster
studentRoster.set('Alice', { grade: 'A', id: '001' });
studentRoster.set('Bob', { grade: 'B', id: '002' });
studentRoster.set('Charlie', { grade: 'C', id: '003' });
// Display the entire roster
console.log('Student Roster:');
for (const [name, info] of studentRoster) {
    console.log(`${name}: Grade ${info.grade}, ID ${info.id}`);
}

const aliceInfo = studentRoster.get('Alice');
console.log("Alice's information:", aliceInfo);

console.log('Is David in the roster?', studentRoster.has('David'));

if (studentRoster.has('Bob')) {
    const bobInfo = studentRoster.get('Bob');
    bobInfo.grade = 'A';
    studentRoster.set('Bob', bobInfo);
    console.log("Updated Bob's grade:", studentRoster.get('Bob'));
}

studentRoster.delete('Charlie');
console.log('Roster after removing Charlie:', studentRoster);

console.log('Number of students:', studentRoster.size);