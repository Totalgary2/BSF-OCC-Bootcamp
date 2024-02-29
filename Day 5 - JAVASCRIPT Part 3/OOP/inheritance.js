//Inheritance

//Parent Class
class Animal {
    constructor(name){
        this.name = name;
    }
    eat(){
        console.log(`${this.name} is eating.`);
    }
}

//Child Class Dog
class Dog extends Animal{
    bark(){
        console.log("Woof Woof!");
    }
}

class Cat extends Animal{
    meow(){
        console.log("Meow Meow");
    }
}

const myDog = new Dog("Bingo");
myDog.bark();
myDog.eat();

const cat = new Cat("Pelusa");
cat.meow();