//async code, it does run in order
// console.log("before setTimeOut");
// setTimeout(() => {
//   console.log("in setTimeOut CB");
// }, 1000);
function sleep(miliseconds) {
    var currentTime = new Date().getTime();
 
    while (currentTime + miliseconds >= new Date().getTime()) {
    }
 }
 


// Promises: Built in to java
let promiseVar = new Promise((resolve, reject) => {
    // wait two seconds before we run code, simulationg a database call,etc
  setTimeout(() => {
    // resolve(value) — if the job is finished successfully, with result value.
    resolve("some value here");
    // reject(error) — if an error has occurred, error is the error object.
    //reject("error occurred");
  }, 2000);
});



// do api call wait two seconds
//STOPS.....
promiseVar.then((response)=>{
    console.log("when we get stuff back");
    console.log('response:', response)
}).catch((err)=>{
    console.log('err:', err)
})
console.log("do other stuff");
