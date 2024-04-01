class product
{
    name = "sumsung";
    price = 17000;
    qty = 0;
    Total(){
        return this.price*this.qty;
    }
    print(){
        document.write(`Name = ${this.name}<br> Price = ${this.price}<br> Qty = ${this.qty}<br> Total = ${this.Total()}`);
    }
}
let ob = new product();
ob.qty = parseInt(prompt("Enter the Quantity"));
ob.price();

// - It is used for refactoring the code.
// - It is similar to a function but mutable.
// - All functionality is same like function.
