function countDigitsIterative(num) {
    if (num === 0) return 1;
    let count = 0;
    num = Math.abs(num); // Handle negative numbers
    while (num > 0) {
        num = Math.floor(num / 10);
        count++;
    }
    return count;
}

const number1 = 12345;
console.log(`Number of digits in ${number1}:`,
    countDigitsIterative(number1));

function countDigitsLogarithmic(num) {
    if (num === 0) return 1;
    num = Math.abs(num); 
    return Math.floor(Math.log10(num)) + 1;
}

const number2 = -9876;
console.log(`Number of digits in ${number2}:`,
countDigitsLogarithmic(number2)); 

const number3 = 0;
console.log(`Number of digits in ${number3}:`,
countDigitsLogarithmic(number3));