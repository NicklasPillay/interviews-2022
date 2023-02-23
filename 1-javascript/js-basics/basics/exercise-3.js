// Arrays
// Adding
const numbers = [3,4];

console.log(numbers);

numbers.push(5,6);
console.log(numbers);

numbers.unshift(1,2);
console.log(numbers);

numbers.splice(2, 0, 'a', 'b');
console.log(numbers);

// Searching arrays
// indexOf same as C# ==> -1 returned if not found
// includes

console.log(numbers.includes(5))
console.log(numbers.includes(7))

// find
// numbers.find() // requires a predicate

// object (reference types) searching

const courses = [
    { id: 'IT1', name: 'DS1' },
    { id: 'IT2', name: 'IS1' }
];

const particularCourse = courses.find(function(courses) { // there's also a findIndex
    return courses.name === 'DS1';
}); // can return undefined if not found

console.log(particularCourse)


// Arrow function
const someCourse = courses.find(courses => {
    return courses.name === 'IS1';
});

console.log(someCourse)

// Remove
const randomNumbers = [1, 2, 3, 4];

// last element removed
console.log(randomNumbers.pop())

// first element removed
console.log(randomNumbers.shift())

// any element/s removed
const resetNumbers = [1, 2, 3, 4];
console.log(resetNumbers.splice(2,2))
console.log(resetNumbers)

// emptying an array
// numbers = [] ==> ensure you only have 1 reference
// numbers.length = 0
// loop over pop or splice - performance hit

// combining or slicing an array
const first = [1, 2, 3];
const second = [4, 5, 6]

const combined = first.concat(second);
console.log(combined);

const sliced = combined.slice(2);
console.log(sliced);

const A = [1, 2, 3];
const B = [4, 5, 6]
const combinedBySpread = [...A, ...B];
console.log(combinedBySpread)


// Iterating
let nums = [7, 8, 9];

for(let number of nums)
    console.log(number)

console.log()
console.log("****************************************************************")
console.log()

// The below is the same as the for of loop above
nums.forEach(function(num){
    console.log(num)
});

console.log()
console.log("****************************************************************")
console.log()

// This can be shorted by arrow key functions
nums = [7, 8, 9];
nums.forEach(num => {
    console.log(num)
});


// joins ==> fuses collection together
// split ==> splits string by seperator char


// Sorting:
// sort
// reverse