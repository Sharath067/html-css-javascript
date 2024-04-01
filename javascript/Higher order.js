function first(fun){
    fun()
}
function second(){
    alert("This is second function")
    console.log("This is second function")
}
first(second)

                    //          HIGHER ORDER FUNCTION
    //      The function that receives another function as argument or return another function or both.
    

    var arr = [1,2,3,4,5]
    function square(arr){
         squares = [];
        for(ele in arr)
        {
            let res = ele*ele;
            squares.push(res)
            console.log("Storing array element in another array")
        }
    }
    square(arr)