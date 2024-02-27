// Topic: Introduction to Arrays

//Creating an array
let characters = ['pippin', 'goku', 'layla', 'morgana', 'aang'];

//Accessing array elements
console.log('characters 2: ', characters[1]);
console.log('characters 5: ', characters[4]);
console.log('The last character:' , characters[characters.length - 1]);

// Modifying array elements
// Push - Add element to end of array
// Pop - Remove the last element in the array 
characters.push('sasuke');
characters.pop();
characters[0] = 'crybaby';

console.log('Modified Array:' , characters);

// Array Iteration
for(let i = 0; i < characters.length; i++) {
    console.log('Character ',i+1, characters[i]);
}

characters.forEach(function(character) {
    console.log(character)
})

//Array Methods

// IndexOf - Returns index number of the element
console.log(characters.indexOf('layla'));

// includes - Returns a boolean if element exists
console.log('Includes a value: ', characters.includes('sasuke'));

// join - Joins the array into string with separator
console.log('Joined array: ', characters.join(' - '));

// slice - Create a new array with sliced elements from a previous array
let slicedArray = characters.slice(1, 4);
console.log('Sliced array: ', slicedArray);

// splice - Removes elements from array
let removedElements = characters.splice(0, 2);
console.log('Removed elements: ', removedElements);

console.log('Updated Array', characters);
