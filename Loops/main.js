// console.log(`hello asad hanif `);
////////intro
// console.log('hello world')


//forLoop
//while loop
//do while loop



// for(let i = 1; i <= 10; i++){
//     console.log('hello world' , i);


//     // i++
// }
// console.log('loop ka bahar');

///////////////////////////////////////-------------------------------------------------------------

// const userInput = +prompt('enter table number')
// const times = +prompt('How many time do you want?')

// for (let i = 1; i <= times; i++) {
//     console.log(`${userInput} * ${i} = ${userInput*i}`);
// }

////////////////////------------------------------------------------------/////////////////////////////

//infinite loop
// for (let i = 1; i > 0; i++) {
//     console.log(i);
// }
///////////////////--------------------------------------------------////////////////////////

// for (let i = 1; i <= 10; i++) {
//     console.log('outer Loop ===> ' , i);
//     for(let j = 1; j <= 5; j++){
//         console.log('inner Loop===>' , j);
//     }
// }

///////-----------------------------/////////////////////////////

// for (let i = 1; i <= 100; i++) {
//     // console.log(i);
//     for (let j = 1; j <= 10; j++) {
//         console.log(`${i} * ${j} = ${i*j}`);
//     }
// }



// let fruits = ['apple' , 'banana' , 'orange' , 'watermelon' , 'grapes'];

// console.log(fruits);
// const ul = document.querySelector('ul');
// for (let i = 0; i < fruits.length; i++) {
//     // console.log(fruits[i]);
//     ul.innerHTML += `<li>${fruits[i]}</li>`
// }


///////---------------------------------------/////////////////////////////
//////Question no 1


// for (let i = 0; i < 5; i++) {
//     document.write("Hello World <br>");
//   }



//////Question no 2


// for (let i = 1; i <= 100; i++) {
//     console.log(i);
// }


//////Question no 3

// Taking input for the table number and length
const tableNumber = parseInt(prompt("Enter the number for the multiplication table:"));
const tableLength = parseInt(prompt("Enter the length of the multiplication table:"));

// Checking if the input is valid
if (isNaN(tableNumber) || isNaN(tableLength)) {
    console.log("Invalid input. Please enter valid numbers.");
} else {
    console.log(`Multiplication table for ${tableNumber} up to ${tableLength}:`);
    for (let i = 1; i <= tableLength; i++) {
        console.log(`${tableNumber} x ${i} = ${tableNumber * i}`);
    }
}


//////Question no 4

const A = ["Apple", "samosa", "Chicken", "Jucie", "Cold drink"];

for (let i = 0; i < A.length; i++) {
    console.log(A[i]);
}





//////Question no 5

const fruits = ["apple", "banana", "mango", "orange", "strawberry"];

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}


//////Question no 6

const N = parseInt (prompt("Enter the number of items:"));

if (isNaN(N) || N <= 0) {
    console.log("Invalid input. Please enter a valid number greater than 0.");
} else {
   
    const itemsArray = [];


    for (let i = 0; i < N; i++) {
        const item = prompt(`Enter item ${i + 1}:`);
        itemsArray.push(item); 
    }

    console.log("Array of items:", itemsArray);
}




//////Question no 7


// Counting: 1 to 15
 document.write("<strong>a. Counting:</strong> ");
 for (let i = 1; i <= 15; i++) {
   document.write(i + ", ");
 }
 document.write("<br>");

 // Reverse counting: 10 to 1
 document.write("<strong>b. Reverse counting:</strong> ");
 for (let i = 10; i >= 1; i--) {
   document.write(i + ", ");
 }
 document.write("<br>");

 // Even numbers: 0 to 20
 document.write("<strong>c. Even:</strong> ");
 for (let i = 0; i <= 20; i += 2) {
   document.write(i + ", ");
 }
 document.write("<br>");

 // Odd numbers: 1 to 19
 document.write("<strong>d. Odd:</strong> ");
 for (let i = 1; i <= 19; i += 2) {
   document.write(i + ", ");
 }
 document.write("<br>");

 // Series: 2k to 20k
 document.write("<strong>e. Series:</strong> ");
 for (let i = 2; i <= 20; i += 2) {
   document.write(i + "k, ");
 }



//////Question no 8

const A = ["cake", "apple pie", "cookie", "chips", "patties"];

// Function to search for an item in the array
function searchItem(item) {
    for (let i = 0; i < A.length; i++) {
        if (A[i] === item) {
            return true; // Item found
        }
    }
    return false; // Item not found
}

// Prompting the user for input
const userInput = prompt("Enter an item to search:");

// Checking if the item is found in the array
if (searchItem(userInput)) {
    alert(`Yes, "${userInput}" is found in the list.`);
} else {
    alert(`No, "${userInput}" is not found in the list.`);
}





//////Question no 9

// Define the array
const A = [24, 53, 78, 91, 12];

// Initialize a variable to store the maximum value
let maxNumber = A[0]; // Assume the first element is the maximum

// Iterate through the array to find the maximum value
for (let i = 1; i < A.length; i++) {
    if (A[i] > maxNumber) {
        maxNumber = A[i]; // Update maxNumber if a larger value is found
    }
}

// Display the largest number
console.log("The largest number in the array is:", maxNumber);


//////Question no 10
const A = [24, 53, 78, 91, 12];

// Initialize a variable to store the minimum value
let minNumber = A[0]; // Assume the first element is the minimum

// Iterate through the array to find the minimum value
for (let i = 1; i < A.length; i++) {
    if (A[i] < minNumber) {
        minNumber = A[i]; // Update minNumber if a smaller value is found
    }
}

// Display the smallest number
console.log("The smallest number in the array is:", minNumber);




//////Question no 11



const A = [24, 53, 78, 91, 12];

let maxNumber = A[0]; 
let minNumber = A[0]; 


for (let i = 1; i < A.length; i++) {
    if (A[i] > maxNumber) {
        maxNumber = A[i]; 
    }
    if (A[i] < minNumber) {
        minNumber = A[i]; 
    }
}

console.log("The largest number in the array is:", maxNumber);
console.log("The smallest number in the array is:", minNumber);




//////Question no 12
for (let i = 1; i <= 100; i++) {
    if (i % 5 === 0) {
        console.log(i);
    }
}


//////Question no 13

var students = ["Asad", "jawad", "yousuf", "haseeb"];
var scores = [58, 73, 89, 90];

// Displaying students' names along with their scores
for (let i = 0; i < students.length; i++) {
    console.log(`${students[i]} scored ${scores[i]} marks.`);
}



//////Question no 14

var scores = [12, 45, 3, 22, 34, 50];

var stopValue = parseInt(prompt("Enter the stop value:"));

for (let i = 0; i < scores.length; i++) {
    if (scores[i] <= stopValue) {
        console.log(scores[i]);
    } else {
        break; 
    }
}


//////Question no 1



//////Question no 1



//////Question no 1






//////Question no 1




