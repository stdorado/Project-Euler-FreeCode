/*2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

What is the smallest positive number that is evenly divisible by all of the numbers from 1 to n?

*/

function smallestDivisible(limit) {
    var i, n = 1;

    function largestPower(n, limit) {
        var p, e = 2, largest = n;
        while ((p = Math.pow(n, e)) <= limit) {
            largest = p;
            e += 1;
        }
        return largest;
    }

    function isPrime(n) {
        if (n <= 1) return false;
        if (n <= 3) return true;
        if (n % 2 === 0 || n % 3 === 0) return false;
        var i = 5;
        while (i * i <= n) {
            if (n % i === 0 || n % (i + 2) === 0) return false;
            i += 6;
        }
        return true;
    }

    for (i = 2; i <= limit; i++) {
        if (isPrime(i)) {
            n *= largestPower(i, limit);
        }
    }

    return n;
}

console.log(smallestDivisible(5)); // 60
console.log(smallestDivisible(7)); // 420
console.log(smallestDivisible(10)); // 2520
console.log(smallestDivisible(13)); // 360360
console.log(smallestDivisible(20)); // 232792560
