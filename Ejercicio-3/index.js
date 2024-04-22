/*Problem 3: Largest prime factor
The prime factors of 13195 are 5, 7, 13 and 29.

What is the largest prime factor of the given number?*/

function PrimoLarge(number){
    let largest = 1
    let current = 2

    while(current <= number ){
        if(number % current === 0){
            largest = current
            number /= current
        }else{
            current++
        }
    }
    return largest;
}
const number = 13195;
const large = PrimoLarge(number)
console.log(large) //29