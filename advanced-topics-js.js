// localStorage.setItem("username", "Vardhan")

// let user = localStorage.getItem("username")
// console.log(user)
// sessionStorage.setItem("age", "20")

// let user2 = sessionStorage.getItem("age")
// console.log(user2)


let data = {
    name:"Murari",
    age:23
}

localStorage.setItem("user", JSON.stringify(data))


let dataToPrint = localStorage.getItem("user")


console.log(dataToPrint.age)


// {}  -->Object
// "{}" --> stores like this in localStorage

let storedData = JSON.parse(localStorage.getItem("user"))
console.log(storedData.age)

// localStorage.removeItem("user")



// // One -line Memory Trick

// // Stringfy before storing
// // parse after retrriveving


// Variable Scope

// // let --> Block scope
// // var -> global scope
// // const -> block scope

let appName = "Task Manager"


function showApp(){
    console.log(appName)
}
showApp()

// // Works because global variables are visible everywhere

// // Too many global variables = bugs waiting to be happen

// // Avoid globals unless Neccessary

// // Function scope
var message = "Hello"

function test(){
    var message = "Hello"
    console.log(message)
}

test()
console.log(message)

// // Block Scope

// if (true){
//     let age = 25
// }

// console.log(age)

// if (true){
//     var score = 25
// }

// console.log(score)


// use const by default

// use let when value changes



// let user3 = "Global"
// function demo(){
//     let user3 ="Local"
//     console.log(user3)
// } 

// demo()


// Javascript searches inside -> outside

// This is called scope chain


// Inner scope can access outer scope
// Outer scope can't access inner scope



// Task

// Create a global variable  and access inside function
// Create a block  varaible and try accessing Outside
// Repalce var with let



//Show favorite color and display it after refresh

// Store a user object

// Create a "Rember Me" user name field in local storage
//Use Session stroage and watch it disppaer after closing

