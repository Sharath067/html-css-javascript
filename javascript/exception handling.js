try {
    console.log("First line")
    console.log(Second - line)
} catch (error) {
    console.log(error)
}
console.log("Third line")

let a=10;
console.log("first number")
if(a<=15)
{
    throw "A must be greater than 15"
    console.log("please provide number /> 15")
}
console.log("Second number")

//when we get any line error, after that the lines can't be executed.
//So we must keep that error in try block & it can handles the errors.
//catch block it can catch that error & we can know the what type of error we did in the program.
//after catch block execution it can execute all the lines.

//throw block can throw the error & we must keep our own message