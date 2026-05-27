// let m1 = 80;
// let m2 = 90;


// let marks = [10, 20, 30, 40, 50];

// console.log(marks);

// console.log(marks[4]);

// console.log(marks.length);

// let students = ["Fayaz", "Aliya", "Vardhan", "Mahesh", "Prashant", "Rama Krishna", "Karunakar","Sharmila","Vishnu"];

// for (let i = 0; i < students.length; i++) {
//   console.log("Hello "+students[i]);
// }

// let fruits = ["Apple", "Mango"];
// console.log(fruits);

// push() adds an element at the end of the array
// fruits.push("Kiwi");
// console.log(fruits);
// pop() removes an element at the end of the array

// fruits.pop();
// console.log(fruits);

// unshift() adds an element to start of the array

// fruits.unshift("Orange");
// console.log(fruits);

// shift() remvoes an element to start of the array

// fruits.shift();
// console.log(fruits);

// splice() - addEventListener, remove , replace

// array.splice(start, deleteCount, item1, item2)

// let arr = [1,2,3,4,5]
// console.log(arr)
// arr.splice(1,3)  //remove2 items from index1
// console.log(arr)

// arr.splice(1,0,"A","B")

// console.log(arr)

// arr.splice(1,1, "X")

// console.log(arr)

// slice() copy part of array

// let nums = [10, 20, 50, 40];
// let part = nums.slice(1, 3);
// console.log(nums);
// console.log(part);
// slice copies original array

// let nums2 = [10, 20, 50, 40];
// let part2 = nums2.splice(1, 3);
// console.log(nums2);
// console.log(part2);
// splice modifies original array

// indexOf()

// let colors = ["red", "blue", "green"];

// let index = colors.indexOf("blue");

// console.log(index);

// console.log(colors.includes("green"));

// let numbers = [1, 2, 3];

// numbers.forEach(function (num) {
//   console.log(num * 2);
// });

// map()

// let numbers2 = [1, 2, 3];

// let doubled = numbers2.map((num) => num * 3);

// console.log(doubled);

//filter()

// let numbers3 = [1, 2, 3, 4, 5, 6];

// let evens = numbers3.filter((num) => num % 2 === 0);
// console.log(evens);

// find()

// let numbers4 = [10, 20, 30, 40];
// let result = numbers4.find((num) => num > 15);
// console.log(result);
// console.log(numbers4.findIndex((num) => num > 15));


// let numbers5 = [1,2,3,4]

// let sum = numbers5.reduce((total,num)=>{
//   return total+num
// },5)

// console.log(sum)

// let numbers6 = [10, 2, 5]
// console.log(numbers6.sort( (a, b) => a-b ))
// console.log(numbers6.sort( (a, b) => b-a ))

