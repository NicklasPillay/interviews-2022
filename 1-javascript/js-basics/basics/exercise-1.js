// function that returns max number
function getMax(num1, num2) {
    return num1 > num2 ? num1 : num2
}

console.log("Max: " + getMax(6, 3))


// FizzBizz
function fizzBuzz(input) {
    if (typeof input !== 'number') {
        return NaN
    } else if (input % 5 === 0 && input % 3 === 0) {
        return "FizzBuzz" 
    } else if (input % 5 === 0) {
        return "Buzz" 
    } else if (input % 3 === 0) {
        return "Fizz" 
    } else {
        return input
    }
}

console.log(fizzBuzz(15))


// Prime number up to limit parameter

function showPrimes(limit) {
    if (typeof limit === NaN || limit <= 1)
        return
    
    
    for (let number = 2; number <= limit; number++) {
        let isPrime = true;

        for (let factor = 2; factor < number; factor++) {
            if (number % factor === 0) {
                isPrime = false;
                break;
            }
        }

        if (isPrime) {
            console.log(number)
        }
    }
}

showPrimes(10)