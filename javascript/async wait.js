async function test()
{
    let a = await 10+2;
    console.log("Inside function")
    return a;
}
test();
console.log("Outside function")
test().then(function(data){
    console.log(data)
})
// async and await are easily can handle the promise obj.
//await is used to stop that function while the execution will process, which means it is synchronous method.
//it waits that function only below function are executed as asynchronous.

async function test(){
    let res = fetch("a.txt");
    res.then(function(response){
        response.text().then(function(data){
            console.log(data);
        })
    })
}
console.log(test())

//created the txt file and accessing the as fetch method.
//after fetching it gives the promise obj and in obj method where the text is present and we access as
//dot method(".") and we created an obj as "response" and calling a text format.
// we can access the data in response text method by using .then function of "data".

async function test()
{
    let res = await fetch("b.txt");      
    let finalres = await res.text()     
    console.log(finalres);             
    console.log(res);
}
//where it gives the response obj and if suppose we can't use the await it will give the promise obj.
// we can directly access the data present in the promise as response type we use "await", it access direct data from the promise.

//HTML is a markup language.
// where the res is text or json format it gives promise obj only where we can't use the "await".
// It gives the result as "HTML is a markup language". 
//suppose res.text gives promise, when we use "await" where the result can be a "resolve type - .then()" or "reject type - .catch()".

