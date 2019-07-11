// alert("hello");
/*

async function myFunction() {   // async automatically returns a promise/.then()
  return 'hello world';
}
// console.log(myFunction());   // returns a promise
myFunction()
  .then(res => console.log(res));
*/

// async function myFunction() {

//     const promise = new Promise((resolve, reject) => {
//         setTimeout(() => resolve("Hello"), 1000);
//     });
//     const res = await promise; // Will wait until the promise is RESOLVED before sending it.
//     return res; // returning the RESOLVED RESPONSE
// }

// myFunction().then(res => console.log(res)); // res = response
// myFunction()
//   .then(res => console.log(res)); // without, nothing will be returned



/*
---------------------------- MORE PRACTICE (ASYNC/AWAIT with FETCH()) ----------------------------
*/

async function getUser() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users'); // await the response of the fetch call
  const data = await response.json();   // once fetch is called, then proceed. Only proceed if resolved.
    return data;  // will only proceed once the second promise is resolved.
    
}
getUser().then(users => console.log(users));