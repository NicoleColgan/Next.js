/*
Closures:
A closure in JavaScript is a powerful and fundamental concept that occurs when
a function remembers and can access the variables from its outer (enclsoing) lexical
scope even after that outer function has finished executing. 
*/

function outer() {
    
    const outerVar = "I am from outer";

    function inner() {
        console.log(outerVar);
    }
    return inner;
}

const innerFunction = outer();
innerFunction();

function createCounter() {
    let count = 0;
    
    function increment() {
        count++;
        console.log(count);
    }
    
    return increment;
}

const counter1 = createCounter();

const counter2 = createCounter();

counter1();
counter1();
counter1();

counter2();
counter2();

