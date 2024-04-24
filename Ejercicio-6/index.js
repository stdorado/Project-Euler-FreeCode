
function sumSquareDifference(n) {
    let sumOfSquares = 0;
    let sum = 0;

    // Calcula la suma de los cuadrados y la suma de los números
    for (let i = 1; i <= n; i++) {
        sumOfSquares += Math.pow(i, 2);
        sum += i;
    }

    // Calcula el cuadrado de la suma
    let squareOfSum = Math.pow(sum, 2);

    // Calcula la diferencia
    let absDifference = Math.abs(sumOfSquares - squareOfSum);
    return absDifference;
}

// Ejemplos de uso
console.log(sumSquareDifference(10));   // Debería devolver 2640
console.log(sumSquareDifference(20));   // Debería devolver 41230
console.log(sumSquareDifference(100));  // Debería devolver 25164150
