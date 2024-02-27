//Functions

//Declaring a function - Allows us to write reusable block of codes and also provides ways to organize and structure the code
function greet() {
    console.log('Hello to the world of functions!');
}

//Calling a function
greet();


//Function declaration - Can be hoisted or used earlier in code
function functionDeclaration(){
    console.log('Hello! I am a function declaration!');
}
functionDeclaration();



//Function expression - Can't be hoisted - Advisable to use
const functionExpression = function() {
    console.log('Hello! I am a function expression!');
};
functionExpression();

//Functions with parameter
function greetme(name) {
    console.log('Hello' , name + '!');
}
greetme('Regel');


//Functions with a return value
function sum(a, b) {
    console.log('I am printed before the returned value');
    return a + b; // Marks the end of the code block
    console.log('I am printed before the returned value'); // Muted / Unreachable code
}
console.log('The sum of a and b is:', sum(10,20));