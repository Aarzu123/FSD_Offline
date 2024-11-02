function isPalindromeReverse(num) {
    if (num < 0) return false; // Negative numbers are not palindromes
    const originalNum = num;
    let reversedNum = 0;
    while (num > 0) {
        const digit = num % 10;
        reversedNum = reversedNum * 10 + digit;
        num = Math.floor(num / 10);
    }
    return originalNum === reversedNum;
}

console.log(isPalindromeReverse(121));
console.log(isPalindromeReverse(-121));

//2 iterative

function isPalindromeIterative(num) {
    if (num < 0) return false; // Negative numbers are not palindromes
    const numStr = num.toString();
    let left = 0;
    let right = numStr.length - 1;
    while (left < right) {
        if (numStr[left] !== numStr[right]) {
            return false;
        }
        left++;
        right--;
    }
    return true;
}

console.log(isPalindromeIterative(123));
console.log(isPalindromeIterative(1)); 