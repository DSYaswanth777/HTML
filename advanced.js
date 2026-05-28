//What event loop does
//what callbacks are
//Why promises exist
//How async/await makes easier

//Can JS do two things at once

//  No. JS is single-threaded.
// it runs one task at a time

// console.log("start");
// setTimeout(() => {
//   console.log("Inside timeout");
// }, 2000);
// console.log("End");

// // Callback

// function greet(name) {
//   console.log("Hello " + name);
// }
// function processUser(callback) {
//   let name = "Mahesh";
//   callback(name);
// }

// processUser(greet);

// setTimeout(() => {
//   console.log("Step 1");
//   setTimeout(() => {
//     console.log("Step 2");
//     setTimeout(() => {
//       console.log("Step 3");
//     }, 1000);
//   }, 1000);
// }, 1000);

// Promises

// A promise is placeholder for a future value

// Pending waiting
// Fulfilled Success --->
// Rejected Failed -->

// let promise = new Promise((resolve, reject) => {
//   let success = false;

//   if (success) {
//     resolve("Order Delivered");
//   } else {
//     reject("Order Cancelled");
//   }
// });

// promise
//   .then((result) => console.log(result))
//   .catch((error) => console.log(error));


//   Promise.resolve("Step 1")
//     .then(res => {
//         console.log(res)
//         return "Step 2"
//     })
//     .then(res =>{
//         console.log(res)
//         return "Step 3"

//     })
//     .then(console.log)
  

function fetchData(){
    return new Promise(resolve =>{
        setTimeout(() =>{
            resolve("Data Received")
        },2000)
    })
}

// async function getData(){
//     console.log("Fetching ...")
//     let result = await fetchData()
//     console.log(result)
// }
// getData()


// async function loadData()
// {
//     try {
//         let result = await fetchData()
//         console.log(result)
//     } catch(error){
//         console.log("Error", error)
//     }
// }
// loadData()



// Feature	CallBack	Promsie	Async/await
// Readability	Poor	Better	Excellent
// Error Handling	Hard	Good 	Very Clean
// Begineer Friendly	Medium	Good 	Best


// API


// Application Programming Interface


// POST 
// PUT
// GET
// DELETE
// PATCH


// Task 1

// Create a Promise that resolves after 10 seconds
// Task 2
// Use .then() to print the result

// Task 3 
// Convert  it to async/await

// Task 4 
// Handle errors with try/catch
