function outer()
{
    let a = 10;
    function inner()
    {
        let b = 20;
        return a+b;
    }
    document.write(`Addition = ${inner()}`);
}
outer();