//If we list all the natural numbers below 10 that are multiples of 3 or 5, 
//we get 3, 5, 6 and 9. The sum of these multiples is 23.
//Find the sum of all the multiples of 3 or 5 below the provided parameter value number.

function multiplesOf3Or5(number) {
//inicializo una funcion en 0
    let result = 0
//utilizo un for donde vamos a declarar una let i en 0
//si I es menor al parametro se le va a sumar
    for (let i = 0; i < number; i++){
        //si i dividido 5 es 0 e I divido 3 es 0 , va a retornar result = i
      if(i%5 == 0 || i %3 ==0){
        result += i
      }
    }
      return result;
    }
    
console.log(multiplesOf3Or5(1000));