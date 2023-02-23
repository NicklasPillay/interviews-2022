// ex 1

console.log(sum(1,2,3,4));
console.log(sum([1,2,3,4]));

function sum(...items) {
    console.log(items)
    if (items.length === 1 && Array.isArray(items[0])) {
        items = [...items[0]] // cool spread - if item sent in is an array
        return items.reduce((sum, currentNum) => sum + currentNum);
    }

    return items.reduce((sum, currentNum) => sum + currentNum);
}


// ex 2

let Circle = {
    radius: this.radius,
    
    // read only - goes via get method
    get area()  {
        return Math.PI * this.radius * this.radius;
    }
};

Circle.radius = 1

console.log(Circle.area);

// will not change
Circle.area = 2
console.log(Circle.area);


// ex 3

function countOccurences(array, searchElement) {
    if (!Array.isArray(array))
        throw new Error('Invalid array')

    return array.reduce((counter, element) => {
        const occurrence = element === searchElement ? 1 : 0;
        return counter + occurrence
    }, initialValue = 0)
}

try {
    let a = 1;
    const nums = [1,2,3,2,4,3,3,3]
    const result = countOccurences(nums, 3) // change to a to test try catch
    console.log(result)
}
catch (e) {
    console.log(e.message)
}
