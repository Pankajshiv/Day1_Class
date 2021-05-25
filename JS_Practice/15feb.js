// setTimeout(function(){
//     console.log("hi");
// },3000)

// const arr=[1,2,3,4];
// arr.push(5);
// //console.log(arr)
// //[1,2,3,4,5]
// console.log(arr[1]);

// arr.splice(2,2);
// console.log(arr);

// arr.pop();
// let x=3;
// setTimeout(new Promise((resolve,reject)=>{
//     if(x===3){
//         resolve("hi it's 3");
//     }
//     else{
//         reject("not 3");
//     }
// }),2000)

// customPromise.then((val)=>{
//     console.log(val);
// })
// customPromise.catch((res)=>{
//     console.log(res);
// });


const person={
    name:"suresh",
    city:"delhi",
    foo :function(){
        console.log(this.name+" from "+this.city);
    }
}

const per={
    name:"ramesh",
    city:"mumbai"
}

person.foo.apply(per);

