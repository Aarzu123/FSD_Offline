function power(base, exponent) {
    if (exponent === 0) return 1;
    let result = 1;
    while (exponent > 0) {
        if (exponent % 2 === 1) {
            result *= base;
        }
        base *= base;
        exponent = Math.floor(exponent / 2);
    }
    return result;
}
// Example usage
console.log(power(2, 10));