/*By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.

What is the nth prime number? */

function isPrime(n) {
    if (n <= 1) return false;
    if (n <= 3) return true;
    if (n % 2 === 0 || n % 3 === 0) return false;
    let i = 5;
    while (i * i <= n) {
        if (n % i === 0 || n % (i + 2) === 0) return false;
        i += 6;
    }
    return true;
}

function nthPrime(n) {
    let count = 0;
    let num = 2;
    while (true) {
        if (isPrime(num)) {
            count++;
            if (count === n) return num;
        }
        num++;
    }
}

// Test cases
console.log(nthPrime(6));     // Should print 13
console.log(nthPrime(10));    // Should print 29
console.log(nthPrime(100));   // Should print 541
console.log(nthPrime(1000));  // Should print 7919
console.log(nthPrime(10001)); // Should print 104743