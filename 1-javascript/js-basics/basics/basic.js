console.log('My Second Log Message');

for (let i = 1; i <= 5; i++) {
    if(i % 2 !== 0) {
        console.log("Loop #" + i);
    }
}

// for in
const person = {
    name: 'Nicklas',
    age: 29
}

for (let key in person){
    console.log(key) // name, age
}

const colors = ['red', 'green', 'blue'];

for (let index in colors){
    console.log(index, colors[index]) // gives index and value at index
}

// for of
for (let color of colors){
    console.log(color) // gives value per index
}