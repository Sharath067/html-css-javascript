var add = (a,b) => a+b;
document.write(`Addtion = `+add(10,20));

//  It is a short hand technique for writing a function expression.
//  It uses following chars
// 	()		function & its params
// 	=>		return and definition

fetch("http://fakestoreapi.com/products")
.then(res => res.json())
.then(products => {
    products.map(product =>{
        document.write(product.title+"<br><br>");
    })
})

