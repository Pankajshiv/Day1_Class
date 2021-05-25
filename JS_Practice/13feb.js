// event delegation example

// document.querySelector("#container").addEventListener("click",(event)=>{
//     console.log("clicked elements's ID",event.target.id);
// });


//--------------------------------------
// simple promise code

// var result=3;
// const customPromise=new Promise((resolve,reject)=>{
//     resolve(result);
// }).then((res)=>{
//     console.log(res);
// });


//--------------------------------------------------------------------------------
// event propogation--event bubbling and event capturing 
// by default the third parameter which is also called useCapture is false
// when false it bubbled up and if true it trickled down(capture).
// capturing has more priority than bubbling.
// so first capturing happen than bubbling.


// document.querySelector("#grandparent").addEventListener("click",()=>{
//     console.log("grandparent clicked");
// },false);

// document.querySelector("#parent").addEventListener("click",(e)=>{
//     console.log("parent clicked");
    
// },false);

// document.querySelector("#child").addEventListener("click",(e)=>{
//     console.log("child clicked");
//     // e.stopPropagation();
// },true);


//-------------------------------------
// // IIFE
// (function(a){
//     var x=10;
//     console.log(a+x);
// })(5);


//-------------------------------
// //hoisting
// console.log(b);
// let a;
// console.log(a);
// a=5;
// console.log(a);
// var b=10;
// let c;
// console.log(c); 

//-----------------------------------------------------
// setTimeout and setInterval

// function x(){
//     for(var i=1;i<5;i++){
//         setTimeout(function(){
//             console.log(i);
//         },i*1000);
//     }
//     console.log("hi");
// }
// x();

// function x(){
//     for(var i=1;i<5;i++){
//         function one(i){
//             setTimeout(function(){
//                 console.log(i);
//             },i*1000);
//         }
//         one(i);
//     }
//     console.log("hi");
// }
// x(); 

// setInterval(function(){ console.log("Thanks!");},100);


// console.log(1);
// var count=0;
// var demo=setInterval(function() {
//     console.log(2);
//     count++;
//     if(count==4){
//         clearInterval(demo);
//     }
// }, 2000);

// console.log(3);


//------------------------------------------------
//clock 
setInterval(showtime,1000);
function showtime(){
    let time=new Date();
    let x=time.getHours()+"-"+time.getMinutes()+"-"+time.getSeconds();
    document.getElementById("clock").innerHTML="TIME : "+x;
}
showtime();

//--------------------------------------------
// //classes in js
// class Car{
//     constructor(x,y){
//         this.x=x;
//         this.y=y;
//     }
// }

// let myvar=new Car("bmw","20");
// console.log(myvar);

//------------------------------------
// // use case of anonymous function
// var ap=function(){
//     return "hello anonymous";
// }

// function mela(ap){
//     console.log(ap() +"func");
// }
// mela(ap);



//------------------------------
// //object copying
// const obj={
//     a:10,
//     b:"hi",
// };
// // const obj2=obj;
// // const obj2=Object.assign({},obj);   // shallow copy
// //const obj2=JSON.parse(JSON.stringify(obj));  //for deep copy

// const obj2={...obj};
// obj2.a=100;

// console.log(obj);
// console.log(obj2);

// let's talk more about objects;

// let person=new Object();
// person.firstName="suresh";
// person.lastName= "Doe",
// person.age=50;
// person.id=5;

// // person.name = function() {
// //     return this.firstName + " " + this.lastName;
// // };
// // console.log(person.name());
// console.log(person);

// delete person.age;
// console.log(person);


// var hello="hello World";
// console.log(hello.toUpperCase());


// var son = {name:"John", age:30, city:"New York"};
// var myArray = Object.values(son);
// console.log(myArray);
//-------------------------------------
/*
currying function
Currying is the process of taking a function with multiple arguments and turning it into a sequence of functions each with only a single argument.
const notCurry = (x, y, z) => x + y + z; // a regular function
*/ 
//const curry=x=>y=>z=>x+y+z;
// let sum=curry(2)(4)(7);
// console.log(sum);

//----------------------------------------

const arr=[2,3,4,5,67,40];
//----------------------------------------
// const myArray=arr.map((item)=>item+1);
// console.log(arr);       //[2,3,4,5,67,40]
// console.log(myArray);   //[3,4,5,6,68,41]
//-------------------------------------------------
// const newArray=arr.forEach((item)=>item+1);
// console.log(arr);        //[2,3,4,5,67,40]
// console.log(newArray);   //undefined
//------
// const newArray=arr.forEach((item,index)=>{
//     return arr[index] = item+1;
// });
// console.log(arr);        // [3,4,5,6,68,41]
// console.log(newArray);   //output: undefined
//--------------
//Difference
    // Well, the forEach() method doesn’t actually return anything (undefined).
    // It simply calls a provided function on each element in your array. 
    // This callback is allowed to mutate the calling array.
    // Meanwhile, the map() method will also call a provided function on every element in the array. 
    // The difference is that map() utilizes return values and actually returns a new Array of the same size.

//----------------------------------------------
// const filteredarr=arr.filter((item)=>{
//     return item>3;
// });
// console.log(filteredarr);
//--------------------------------------------------
// const reducedArr=arr.reduce((total,num)=>{
//     return total-num;
// });
// console.log(reducedArr);
//-------------------------------------------

//find() method of array
/*
The find() method returns the value of the first element in an array that pass a test (provided as a function).

The find() method executes the function once for each element present in the array:

If it finds an array element where the function returns a true value, 
find() returns the value of that array element (and does not check the remaining values)
Otherwise it returns undefined
Note: find() does not execute the function for empty arrays.
Note: find() does not change the original array. */

// const element=arr.find((item)=>{
//     return item>4
// });
// console.log(element);

//----------------------------------------------------------------
// slice() method
/*
The slice() method returns the selected elements in an array, as a new array object.

The slice() method selects the elements starting at the given start argument, and ends at, but does not include, the given end argument.

Note: The original array will not be changed. */

// console.log(arr.slice(1,4));
// console.log(arr.slice(-4,-2));
// console.log(arr.slice(-2,-5));

//-------------------------------------------------------
//splice() method
/*
The splice() method adds/removes items to/from an array, and returns the removed item(s).
Note: This method changes the original array.
//syntax of splice
array.splice(index, howmany, item1, ....., itemX)

index             -->Required. An integer that specifies at what position to add/remove items, Use negative values to specify the position from the end of the array
howmany           -->	Optional. The number of items to be removed. If set to 0, no items will be removed
item1, ..., itemX -->	Optional. The new item(s) to be added to the array

*/
// arr.splice(2,1,90,80,60);
// console.log(arr)

//--------------------------------------------------------
//destructuring of array;
// var thing = ["Table", "Chair", "Fan"];
// const [a,b,c]=thing;
// console.log(a);
// console.log(b);
// console.log(c);

//destructuring of objects;

// let items={a:"hi",b:"hello",c:"hey"};
// const {a,b,c}=items;
// console.log(a);
// console.log(b);
// console.log(c);

//-------------------------------------
// prototype & prototype inheritance

// let obj={
//     name:"ajay",
//     city:"delhi",
//     foo:function(){
//         console.log(this.name+" from "+this.city);
//     }
// }
// let obj2={
//     name:"shubham",
// }

// obj2.__proto__=obj;  // prototype inheritance

// Object.prototype.myFun1=function(){
//     console.log("hi proto");
// };

// Function.prototype.myFun2=function(){
//     console.log("hi proto");
// };

// function fuel(){

// }






