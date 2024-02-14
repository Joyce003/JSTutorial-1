// First Program
//console.log('Welcome To JS Tutorial By Logan!');

const name = "The big lazy fox";
const name2= "bit the big brown dog";
const name3= "for stepping on him.";

console.log(name + name2 + name3); //Did I do this right?

// Conditional Statement

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

const button = document.getElementById("bg-button");
button.addEventListener("click", function() {
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor = "#" + randomColor;

});


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
