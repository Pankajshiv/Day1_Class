// let url = window.location.href;
// let hostName = window.location.hostname;

// console.log(url);
// console.log(hostname);


const url = 'http://www.youtube.com/watch?v=ClkQA2Lb_iE';
const arr = url.split('/');
console.log(arr);
const hostName = arr[2];
console.log(hostName);

const arr1 = url.split('.');
console.log(arr1[1]);

