class Person
{
    constructor(name,mobile)        //constructors are used, because when the class creates an object & that object 
    {                               //properties are assigning variables
        this.name = name;
        this.mobile = mobile;
    }
    getpersonalDetails(){
        console.log("Name :",this.name, "\n Mobile :",this.mobile)
    }
}
class Employee
{
    constructor(name,mobile,sal,company)
    {
        super(name,mobile);         //we must use "super" constructor for accessing the values from the parent class.
        this.sal = sal;
        this.company = company;
    }
    getofficeDetails(){
        console.log("Sal :",this.sal, "\n Company :",this.company)
    }
}

let p1 = new Person("A","9876543210")
let e1 = new Employee("A","9876543210",17000,"Amazon")

//where Employee class can access both child class and parent class, but person class can access only parent class only.