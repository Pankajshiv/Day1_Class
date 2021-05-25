//
function takeorder(a,b){
    return a*10;
}

function isPlaceOrder(total){
    if(total>0)
        return true;

    return false;
}

function canDdriv(orderAmount,amountPaid){
    if(orderAmount==amountPaid){
        return true;
    }
    return  "pay your bills u  human!";
}

function greetingMessage(){
    console.log("hello javascript function !");
}

greetingMessage();
console.log(takeorder(4));
console.log(isPlaceOrder(5));
console.log(isPlaceOrder(0));
console.log(canDdriv(9,4));

console.log(typeof(4));
console.log(typeof("main"));
console.log(typeof(null));
console.log(typeof(undefined));

console.log(null==undefined)
console.log(null===undefined)

console.log("21/12/2020");
a=1;
console.log(a);

/*

An IIFE (Immediately Invoked Function Expression) is a JavaScript function that runs as soon as it is defined.

(function () {
    statements
})();

It is a design pattern which is also known as a Self-Executing Anonymous Function and contains two major parts:

The first is the anonymous function with lexical scope enclosed within the Grouping Operator (). This prevents accessing variables within the IIFE idiom as well as polluting the global scope.
The second part creates the immediately invoked function expression () through which the JavaScript engine will directly interpret the function.
Examples
The function becomes a function expression which is immediately executed. The variable within the expression can not be accessed from outside it.

(function () {
    var aName = "Barry";
})();
// Variable aName is not accessible from the outside scope
aName // throws "Uncaught ReferenceError: aName is not defined"

Assigning the IIFE to a variable stores the function's return value, not the function definition itself.

var result = (function () {
    var name = "Barry";
    return name;
})();
// Immediately creates the output:
result; // "Barry"

*/

// nested fuctions

function addtwo(a){
    return function addsecond(b){
        return a+b;
    }
}
 
var add5toAnyNumber=addtwo(5); //addtwo(5)(10); any nesting!
// now it's normal call
console.log(add5toAnyNumber);

console.log(add5toAnyNumber(10));  // this will give 5+10=15


// function abc(){
//     var xyz=10;
// }
// xyz;

{
    console.log(str);
    var str="heloo";
}
{
    "use strict";
    console.log(str1);
    var str1="heloooo";
}