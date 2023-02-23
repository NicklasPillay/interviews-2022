const numbers = [1, 2, 3, 4];

const output = move(numbers, 1, 3);

console.log(output);

// move the item to a particular spot in the array
function move(array, index, offset) {
    // check the position is within range
    const position = index + offset;

    if(position < 0 || position >= array.length) {
        console.error('Invalid offset.');
        return;
    }
    
    // make a copy of the array
    const output = [...array]; // spread operator

    // splice/remove out the element (this returns an array with just that element)
    const element = output.splice(index, 1)[0];
    output.splice(position, 0, element);

    return output;
}


// Some warm up exercises

// Count occurrences ==> can be done with reduce
// getMax() ==> can be done with reduce


/* 
    const movies = [
        { title: 'a', year: 2018, rating: 4.5 },
        { title: 'b', year: 2018, rating: 4.7 },
        { title: 'c', year: 2018, rating: 3 },
        { title: 'd', year: 2017, rating: 4.5 }
    ]

    1. All the movies in 2018 with rating > 4
    2. Sort them by rating desc order
    3. Pick their title

    hint:
    movies.
        .filter()
        .sort()
        .reverse()
        .map()

    console.log


 */
