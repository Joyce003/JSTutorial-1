
document.querySelectorAll('image-gallery img').forEach(image => {
    image.addEventListener('click', function() {
    alert('You clicked on a cute puppy! Now go type in your paypal/credit card information and receive this adorable creature for the low price of $5,000.');
    });
});
// First Program
//console.log('Welcome To JS Tutorial By Logan!');

// const name = "The big lazy fox ";
// const name2= "bit the big brown dog ";

// const name3= "for stepping on him.";

// console.log(name + name2 + name3); //Did I do this right?

//copy and paste code

// let sum = 5 + 10;       // sum will be 15
// console.log(sum);
// let fullName = "John" + " Doe"; // fullName will be "John Doe"
// console.log(fullName);
// let difference = 20 - 8; // difference will be 12
// console.log(difference);
// let product = 6 * 7;     // product will be 42
// console.log(product);
// let quotient = 30 / 3;   // quotient will be 10
// console.log(quotient);
// let remainder = 17 % 5;  // remainder will be 2    
// console.log(remainder);

// Conditional Statement

//let cheatSheet = 5;
//If (CheatSheet = >= 5) {
    //console.log("You have the cheet sheets!");
//} else {
  //  console.log("Good luck on your won!");
//}
    // console.log(here's your cheat sheet)
    // } else if (good luck on your own!)
    // console.log(good luck);

// let year = 2024;

// if (year % 4 === 0) {
//   if (year % 100 !== 0) {
//     console.log("Leap year");
//   } else if (year % 400 === 0) {
//     console.log("Leap year");
//   } else {
//     console.log("Not a leap year");
//   }
// } else {
//   console.log("Not a leap year");
// }


// Random Color Change Function

// const button = document.getElementById("bg-button");
// button.addEventListener("click", function() {
//     const randomColor = Math.floor(Math.random()*16777215).toString(16);
//     document.body.style.backgroundColor = "#" + randomColor;

// });


// Inner HTML number Changer
// document.getElementById("demo").innerHTML = 5 + 6;


// Pyramid Function
// const rows = 5;

// for (let i = 1; i <= rows; i++) {
//   let line = "";

//   // Space loop: adding leading spaces before the stars
//   for (let spaces = 1; spaces <= rows - i; spaces++) {
//       line += " ";
//   }

//   // Star loop: adding the asterisks 
//   for (let stars = 1; stars <= 2 * i - 1; stars++) { 
//       line += "*";
//   }

//   console.log(line); 
// }

//JavaScript Arrays
// let selectedColors = ['red', 'blue'];
// selectedColors[2] = 'green';
// console.log(selectedColors[0]);

//We can initialize this. These square brackets are what we call Array literal and indicate an empty array.
//Now we can initialize this array and add a couple of items.
//Here's our array with 2 elements. Each element has an index. Index of 1st element is 0.
//If you want to access the index in an array, use this index.
//We can add another element to this array

//typeof array is an object

// let selectedColors = ['red', 'blue'];
// selectedColors[2] = 1;
// console.log(selectedColors.length);
