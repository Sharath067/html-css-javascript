let btn = document.getElementById("btn");
let data = document.getElementById("data");
btn.addEventListener('click',loadData)

function loadData(){
    let xhr = new XMLHttpRequest();
    xhr.open('GET','a.txt','true')
    xhr.send()

    xhr.onprogress = function(){
        data.innerText = "Loading...";
    }
    xhr.onload = function(){
        data.innerText = xhr.responseText;
    }
}

{/* <button class="btn btn-primary" id="btn">Load Data</button>
<div id="data"></div> */}

//                       AJAX is Asynchronus javascript and XML

// - AJAX helps in fetching data Asynchronusly from a web server.
// - Data loaded to AJAX call is done Asynchronusly without page refresh.
// - Webserver will send response which contain data that we have requested.
// - Data can be any format like JSON,XML...
// - Servers used to send data in XML format.

// In javascript we can call the AJAX by using "XMLHttpRequest" to exchange data from webserver.
// - AJAX request can be send to server with 3 steps

// 1) Create XMLHttpRequest object.
// ex - let xhr = new XMLHttpRequest()

// 2) Create request with that object by using OPEN() Method.
// Syntax - xhr.open(method,url,Asynchronus,username,password)

// ex - xhr.open('GET','a.txt','true')

// 3) Send a request using SEND() Method.
// ex - xhr.send()

// XMLHttpRequest - have 2 request they are
// 1) onprogress - it is used when request send to server & the request will back to webserver it will progress.
// 2)onload - this event will perform automatically when the response gives the data from server.
