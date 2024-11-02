const emptySet = new Set();
console.log('Empty Set:', emptySet);

const initializedSet = new Set([1, 2, 3, 4, 5]);
console.log('Initialized Set:', initializedSet);

const setWithDuplicates = new Set([1, 2, 2, 3, 4, 4, 5]);
console.log('Set with duplicates removed:', setWithDuplicates);

const colors = new Set();
colors.add('red');
colors.add('blue');
colors.add('green');
console.log('Colors Set after add():', colors);

colors.add('red'); // No effect, red already exists
console.log('Colors Set after adding duplicate:', colors);

colors.delete('green');
console.log('Colors Set after delete():', colors);

console.log('Has red?', colors.has('red')); // true
console.log('Has green?', colors.has('green')); // false

const numbersWithDuplicates = [1, 2, 2, 3, 4, 4, 5, 5, 6];
const uniqueNumbers = [...new Set(numbersWithDuplicates)];
console.log('Original array:', numbersWithDuplicates);
console.log('Array with duplicates removed:', uniqueNumbers);

console.log('Colors in the set:');
for (const color of colors) {
    console.log(color);
}

console.log('Using values() method:');
for (const value of colors.values()) {
    console.log(value);
}
console.log('Using keys() method (same as values()):');
for (const key of colors.keys()) {
    console.log(key);
}

console.log('Using entries() method:');
for (const entry of colors.entries()) {
    console.log(entry);
}

const numberSet = new Set([1, 2, 3, 4, 5]);
console.log('Before clear():', numberSet);
numberSet.clear();
console.log('After clear():', numberSet);

const fruitSet = new Set(['apple', 'banana', 'orange']);
console.log('Number of fruits:', fruitSet.size);

const userVisits = new Set();
function recordUserVisit(userId) {
    userVisits.add(userId);
    console.log(`User ${userId} visit recorded.`);
    console.log(`Total unique visitors: ${userVisits.size}`);
}
recordUserVisit('user001');
recordUserVisit('user002');
recordUserVisit('user001'); // Duplicate visit, won't increase the count
recordUserVisit('user003');
console.log('All unique visitors:', userVisits);