function Details(title,...product)
{
    var [name,price,stock,rating] = product;
    if(price)
    {
        document.write(`<h2>${title}</h2> <br> Name = ${name} <br> Price = ${price} <br> Stock = ${stock} <br> Rating = ${rating.rate}`);
    }
    else{
        document.write(`Name = ${name} <br> stock = ${stock}`);
    }
}
Details("Prodcts Summary","Oneplus",17000,true,{rate:4.5});

//A single rest parameter can handle multiple arguments.
//  A rest parameter is defined using "...paramName".
//  It is an array type.
//  Every function can have only one rest parameter.
//  You can have other parameters along with rest parameter.
//  Rest parameter must be the last parameter in formal list.

// function demo(title, ...param1)		=> valid
