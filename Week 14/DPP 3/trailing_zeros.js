
function trailingZerosInFactorial(n) {
    if (n < 0) {
        throw new Error('Factorial is not defined for negative numbers.');
    }
    let count = 0;
    let divisor = 5;
    while (n >= divisor) {
        count += Math.floor(n / divisor);
        divisor *= 5;
    }
    return count;
}
console.log(`Number of trailing zeros in 5!:`,  trailingZerosInFactorial(5)); 
console.log(`Number of trailing zeros in 10!:`, trailingZerosInFactorial(10)); 
console.log(`Number of trailing zeros in 25!:`, trailingZerosInFactorial(25)); 