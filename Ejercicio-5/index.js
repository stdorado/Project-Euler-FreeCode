/*2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

What is the smallest positive number that is evenly divisible by all of the numbers from 1 to n?

*/

function smallestMult(n) {
    // Función para calcular el máximo común divisor
    function gcd(a, b) {
        return b === 0 ? a : gcd(b, a % b);
    }

    // Función para calcular el mínimo común múltiplo
    function lcm(a, b) {
        return (a * b) / gcd(a, b);
    }

    let result = 1;
    for (let i = 2; i <= n; i++) {
        result = lcm(result, i);
    }
    return result;
}