// let student = {
//   name: "Mahesh",
//   age: 30,
//   city: "Hyd",
// };
// let name = "Aliya";
// console.log(name);

// console.log(student,"student before making any edit");
// console.log(student.age);
// console.log(student.city);
//  console.log(student["age"])

// student.age = 25;

// console.log(student.age);

// student.email = "mahesh@gmail.com";
// console.log(student.email);
// console.log(student,"student after making the edit");

// delete student.email;

// console.log(student);

// let user = {
//   name: "Ramakrishna",
//   sayHello: function () {
//     console.log("Hello " + this.name);
//   },
// };
// user.sayHello();

// let user2 = {
//   name: "Aliya",
//   sayHello() {
//     console.log("Hello " + this.name);
//   },
// };
// user2.sayHello();

// let person = { name: "John" };
// let admin = person;
// admin.name = "Anita";
// console.log(person.name);

// let keys = Object.keys(student);
// let values = Object.values(student);
// let entries = Object.entries(student);

// console.log(keys);
// console.log(values);
// console.log(entries);

// let man = {
//   name: "Murari",
//   age: 25,
//   phone: 9876543210,
//   height: 170,
//   city: "Hyd",
//   pincode: 123456,
//   country: "India",
//   address: {
//     city: "Hyd",
//     pincode: 123456,
//     country: "India",
//   },
// };

// console.log(man.address.city);
// console.log(man.address.pincode);

// // //optional Chaining
// // console.log(man?.phone);

// // Looping through objects

// for (let key in man){
//     console.log(key, man[key])
// }


// Task

// 1. Create a student object with nested address
// 2. safely access misisng property using ?.
// 3. Looop through object and priont all keys & values
// 4. Copy an object and change a property , also add a new property
// 5. Decide whetehr to sue array or object for:
//     List of Marks 
//     User profile
//     Shopping Cart items
// 6. Create an object named as compnay with nested departments with name descripiton and id of each department
//     Loop and print the details
//     use Optional Chaining in at least one place

// 7. Create an object book with title, author, rating
//    Update the rating of the book
//    Add a function describe() that needs to log the "Book by an author named as [author name]"
// 8. Create a object fro a movie, a product, for a user profile
// 9. try use this method




// let a = 5;
// let b = a;

// b=20;
// console.log(a) 
// console.log(b)


// let user1 = {
//   name:"Murari"
// }
// let user2 = user1

// user2.name= "Mahesh"

// console.log(user1.name)

// Numbers are copied
// objects are shared

// objects variables doesn't stire the object itself

// They stiore the address of the objects


// HOuse = objects
// address = Reference


// let user1 = {
//   name:"Murari"
// }

// let user2 = Object.assign({}, user1)
// user2.name= "Mahesh"
// console.log(user1.name)
// console.log(user2.name)


// spread operator (...)


// let user1 = {
//   name:"Murari"
// }

// let user2 = {...user1}
// user2.name= "Mahesh"

// console.log(user1.name)
// console.log(user2.name)




// let arr1 = [1,2,3]
// let arr2 = [...arr1]
// arr2.push(2)
// console.log(arr1)
// console.log(arr2)



// Task


// 1. Create an object and copy it using spread
// 2. Modify copied object and verify original doesn't change
// 3.Create an array and copy it using spread


// 4. Create a nested object and observe copy behaviour

