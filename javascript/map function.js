
            //Anonymous function

var birthYears = [2005,2010,2015,2020];
var ages = birthYears.map(function(ele,index){
    return 2023-ele;
})
console.table(birthYears)
console.table(ages)

            //Normal function
var birthYears = [2005,2010,2015,2020];
var ages = birthYears.map(ageFind)
function ageFind(ele,index)
{
    let age = 2023-ele;
    return age;
}
console.table(birthYears)
console.table(ages)

// - It is also a key and value collection like object.
// - Key can be any type.
// - Value can be any type.
// - It provides all implicit methods for manipulation.
// - Hence it is faster than object.
// - But it is schema less [structure less].
