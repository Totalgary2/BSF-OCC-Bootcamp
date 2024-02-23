//Variables
// var variable - Global scoped variable
if(true) {
    var Myname = "Regel";
    Myname = "Ms.Regel";
}

console.log(Myname);


//let variable - Block scoped variable
let age = 18;
console.log(age)

if(true){
    let animal = "Cat";
    animal = "Elephant"
    console.log(animal); 
}
//console.log(animal); - This will not work outside the scope where it was declared

//const variable - Fixed or cannot be changed
const birthdate = "10-16-1989";
console.log(birthdate);
//birthdate = "00-00-00";