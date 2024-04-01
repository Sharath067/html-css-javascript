class Animal
{
    constructor(name)
    {
        this.name = name;
    }
    eats(){
        console.log(this.name+" eats food")
    }
}
class Alligator extends Animal{
    eats(){
        super.eats();                           // it gives the output from the parent class
        console.log(this.name+" eats fishes")
    }
}
let alligator = new Alligator('Murphy')
alligator.eats();
//output : -
    "Murphy eats fishes"

let animal = new Animal('Dog')
animal.eats();
//output : -
    "Dog eats food"

    // ploy - many, morphism - forms 
    //the ability to create function , variable or object has more than one form