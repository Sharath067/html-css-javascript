function getAPI(url, success, failure)
{
    if(url=="amazon.com")
    {
        success();
    }
    else{
        failure();
    }
}
getAPI(prompt("Enter URL"), function(){
    document.write("URL fetched successful..");
},function(){
    document.write("Error : Unable to fetch...");
})
//set of functions that execute according to state and situation.
//Call Back uses blocking technique.
//It is Synchronous. 
//It will not allow any another task to perform while executing the function.
