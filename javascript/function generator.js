function* Numbers(){
    yield 10;
    yield 20;
    yield 30;
}
var n = Numbers();
console.log(n.next().value);
consolelog(obj)
console.log(n.next().value);
console.log(n.next().value);
console.log(n.next().done);     //done - it returns "TRUE" if there is no value.

// It is used to create an iterator.
//it is used to access elements from a collection of seqential order.
//  Iterator doesn't require condition, counter and initializer.
//  Generator is defined using "*"  which means zero or more times execution.
//  It "yeilds" a result and moves to "next()".
//  The method "done()" returns true when there is no more value to read.

//    ref.next().value		=> return value
//    ref.next().done		=> return true if there are no more values to read.