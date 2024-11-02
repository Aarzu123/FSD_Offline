function lcm(a, b) {
    function gcd(x, y) {
        while (y !== 0) {
            let temp = y;
            y = x % y;
            x = temp;
        }
        return x;
    }
    return (a * b) / gcd(a, b);
}
// Example usage
console.log(lcm(12, 18));