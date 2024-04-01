var getAPI = new Promise(function(resolve,reject){
    var url = prompt("Enter the url..");
    if(url=="amazon.com")
    {
        resolve('Data fetched successful...');
    }
    else{
        reject('Unable to fetch data..');
    }
})
getAPI.then(function(res){
    document.write(`Success : ${res}`);
}).catch(function(exp){
    document.write(`Failure : ${exp}`);
})

// Promise uses an Async technique.
// Async is an unblocking technique that allows the task to perform without blocking other tasks.
//  Promise comprises of 3 phases

// 		a) Pending		: Initial phase
// 		b) Resolved		: It is defined using then()
// 		c) Rejected		: It is defined using catch()

//  then() will handle the response when it is success.
//  catch() will handle the error when it failed.