/*******************************************************
        JAVASCRIPT STRING METHODS — MASTER FILE
********************************************************/

let text = "  Hello JavaScript World  ";
let email = "student@gmail.com";
let fruits = "apple,banana,mango";

console.log("Original Text:", text);


/*******************************************************
1. LENGTH → Find number of characters
********************************************************/
console.log("Length:", text.length);



/*******************************************************
2. trim() → Removes spaces from start & end
   trimStart() / trimEnd() also exist
********************************************************/
console.log("Trimmed:", text.trim());



/*******************************************************
3. toUpperCase() / toLowerCase()
   Useful for case-insensitive comparisons
********************************************************/
console.log("Uppercase:", text.toUpperCase());
console.log("Lowercase:", text.toLowerCase());



/*******************************************************
4. includes() → Checks if substring exists
   Returns true / false
********************************************************/
console.log("Includes 'Java':", text.includes("Java"));



/*******************************************************
5. startsWith() / endsWith()
********************************************************/
console.log("Starts with 'Hello':", text.trim().startsWith("Hello"));
console.log("Ends with '.com':", email.endsWith(".com"));



/*******************************************************
6. indexOf() → Returns position of first match
   Returns -1 if not found
********************************************************/
console.log("Index of 'Java':", text.indexOf("Java"));



/*******************************************************
7. lastIndexOf() → Finds last occurrence
********************************************************/
let repeatText = "ha ha ha";
console.log("Last index of 'ha':", repeatText.lastIndexOf("ha"));



/*******************************************************
8. slice(start, end)
   Extracts part of string.
   End is NOT included.
********************************************************/
let word = "JavaScript";
console.log("Slice(0,4):", word.slice(0, 4)); // Java

// Negative slicing → counts from end
console.log("Last 6 chars:", word.slice(-6));



/*******************************************************
9. substring(start, end)
   Similar to slice but DOES NOT accept negatives
********************************************************/
console.log("Substring:", word.substring(0, 4));



/*******************************************************
10. replace() → replaces FIRST match only
********************************************************/
let sentence = "I love Java. Java is powerful.";
console.log(sentence.replace("Java", "JS"));



/*******************************************************
11. replaceAll() → replaces EVERY match
********************************************************/
console.log(sentence.replaceAll("Java", "JS"));



/*******************************************************
12. split() → Converts string → array
********************************************************/
let fruitArray = fruits.split(",");
console.log("Split:", fruitArray);



/*******************************************************
13. charAt(index) → Gets character
   Modern approach: word[index]
********************************************************/
console.log("charAt(0):", word.charAt(0));
console.log("Bracket method:", word[0]);



/*******************************************************
14. concat() → joins strings
   (Template literals are preferred today)
********************************************************/
let first = "Hello";
let second = "World";

console.log(first.concat(" + ", second));

// Modern way (recommended)
console.log(` ${first} ${second} Javascript`);


/*******************************************************
15. repeat() → repeats string N times
********************************************************/
console.log("Repeat:", "ha ".repeat(3));



/*******************************************************
16. match() → searches using regex
   Returns matches
********************************************************/
let msg = "Cats are smarter than dogs";
console.log(msg.match(/dogs/));



/*******************************************************
17. search() → returns position of match
********************************************************/
console.log(msg.search("smarter"));



/*******************************************************
18. padStart() / padEnd()
   Useful for formatting numbers, invoices, etc.
********************************************************/
let num = "5";

console.log(num.padStart(3, "0")); // 005
console.log(num.padEnd(3, "*"));   // 5**



/*******************************************************
19. localeCompare()
   Used for sorting strings properly
********************************************************/
console.log("apple".localeCompare("banana")); 
// negative → comes before



/*******************************************************
20. valueOf() / toString()
   Rarely needed but exist
********************************************************/
let strObj = new String("Hello");

console.log(strObj.valueOf()); // primitive string
console.log(strObj.toString());



/*******************************************************
IMPORTANT RULE ⭐

Strings are IMMUTABLE.
Methods return NEW strings.

Example:
********************************************************/

let demo = "hello";
demo.toUpperCase();

console.log(demo); 
// still "hello" — original unchanged



/*******************************************************
MOST IMPORTANT METHODS TO REMEMBER ⭐⭐⭐⭐⭐

✔ trim()
✔ includes()
✔ slice()
✔ replace()
✔ split()
✔ toLowerCase()
✔ toUpperCase()
********************************************************/
