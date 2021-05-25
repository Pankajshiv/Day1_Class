let arr = [4,6,72,1,3,9,2];
console.log(arr);

// // sort method
// arr.sort((a,b)=>{
//     return a-b;
// });

// console.log(arr);
//----------------------------------------------------
// bubble sort
// console.log(bubbleSort(arr));

// function bubbleSort(a){
//     for(let i=0;i<a.length;i++){
//         for(let j=1;j<a.length-i;j++){
//             if(a[j-1]>a[j]){
//                 [a[j-1], a[j]] = [a[j], a[j-1]];
//             }
//         }
//     }
//     return a;
// }


//-------------------------------------------------------
// // merge Sort

// console.log(mergeSort(arr));

// function mergeSort(arr){
//     if(a.length<2){
//         return arr;
//     }
//     let mid = (arr.length)/2;

//     let left = arr.slice(0,mid);
//     let right = arr.slice(mid);
    
//     return merge(mergeSort(left), mergeSort(right));
// }

// function merge(left, right){
//     let result = [];
//     while(left.length && right.length){
//         if(left[0]<=right[0]){
//             result.push(left.shift());   // shift() method removes the first element of the array.
//         }
//         else{
//             result.push(right.shift());
//         }
//     }

//     while(left.length){
//         result.push(left.shift());
//     }
//     while(right.length){
//         result.push(right.shift());
//     }
//     return result;
// }

//-----------------------------------------------
// quick sort

// console.log(quickSort(arr,0,arr.length-1));

// function quickSort(arr,left,right){
//     if(left<right){
//         let pi = partition(arr,left,right);

//         quickSort(arr,left,pi-1);
//         quickSort(arr,pi+1,right);
//     }
//     return arr;
// }

// function partition(arr,start,end){
//     let pivot=arr[end];
//     let index = start-1;
//     for(let i=start;i<end;i++){
//         if(arr[i]<=pivot){
//             index++;
//             [arr[index],arr[i]] = [arr[i], arr[index]];
//         }
//     }
//     [arr[index+1], arr[end]] = [arr[end], arr[index+1]];
//     return index+1;
// }

