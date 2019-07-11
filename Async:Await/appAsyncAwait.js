import { resolve } from "path";
import { rejects } from "assert";

// alert("hello");
/*

async function myFunction() {   // async automatically returns a promise/.then()
  return 'hello world';
}
// console.log(myFunction());   // returns a promise
myFunction()
  .then(res => console.log(res));
*/


async function myFunction() {

    const promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve("Hello"), 1000);
    });
    const res = await promise; // Will wait until the promise is RESOLVED
    return res; // returning the RESOLVED RESPONSE
}

// myFunction().then(res => console.log(res)); // res = response
myFunction()
  .then(res => console.log(res));