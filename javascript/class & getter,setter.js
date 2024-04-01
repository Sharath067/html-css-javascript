class mobile
{
    constructor(n,p,r)      //creating a constructor
    {
        this.name = n;
        this.price = p;     //accessing the properties by using "this" keyword.
        this.ram = r;
    }
    updateRam(urma)         //creating a method and we don't want to use the function keyword & we can create direct function name.
    {
        this.ram = uram;    //value assigning  to uram
    }
}
let m1 = new mobile("Oneplus", 17000, "12 GB");     //creating an obj
console.log(m1);
let m2 = new mobile("Iphone", 110000, "6 GB");
console.log(m2);
m2.updateRam("12 GB");      //updating ram
console.log(m2)

//  Accessing class members:
//  The class members are accessible with in the class using "this" keyword.
//  The class members are accessible outside class by using instance of class.

                             //        Getter and Setter method
                                    // ------------------------
class mobile{
    constructor(n,r)
    {
        this.name = n;
        this.ram = r;
    }
    set Priceset(p)             //creating a setter method & passing a parameter & we are giving a new price.
    {                           // here we must pass exactly one parameter in setter method, otherwise it gives error.
        if(p<=0)
        {
            alert(`price value can't be 0`);
        }
        else{
            this.price = p
        }
    }
    get getName(){              //creating getter method returning name with value
                                // we can't pass any value in the parameter because it gives error
        return "mobile name : "+this.name;
    }
}
let m3 = new mobile("Oneplus", 17000, "12 GB");
console.log(m3)
let m4 = new mobile("Iphone",10000,"6 GB");
console.log(m4)

// There are 2 accessors
// 	a) get()		gettter is used to read and return value of property
// 	b) set()		settter is used to assign a new value into property
// getter and setter are used for the security purpose.