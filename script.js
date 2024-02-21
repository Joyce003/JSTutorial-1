document.querySelectorAll('.image-gallery img').forEach(image => {
    image.addEventListener('click', function() {
        alert('You clicked on an image of an adorable puppy! Now you can have this fella for the low price of $5,000.');
    });
});


<button type="button" onclick="showPaymentOptions()">Pay Now</button>

<script>
function showPaymentOptions() {
    var paymentMethod = prompt("Enter 'PayPal' or 'Credit Card' to select your payment method.");
    if (paymentMethod.toLowerCase() === "paypal") {
        // Logic for PayPal payment
       alert("You selected PayPal.");
    } else if (paymentMethod.toLowerCase() === "credit card") {
        // Logic for Credit Card payment
        alert("You selected Credit Card.");
    } else {
        alert("Invalid selection. Please enter 'PayPal' or 'Credit Card'.");
    }
}


// // First Program
// console.log('Welcome To JS Tutorial By Logan!');


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

// console.log(4 == 4);      // Output: true
// console.log("dog" == "cat"); // Output: false

// console.log(4 != 4);
// console.log (4 === "four")      // Output: false

// let hasTicket = false;
// let isOver18 = true;

// if (hasTicket && isOver18) { 
//     console.log("You can enter the event!");
// } else {
//     console.log("Sorry, you can't enter the event!");
// }


// // Conditional Statement

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


// let testScore = 90;

// if (testScore >= 90) {
//     console.log("A");
// } else if (testScore >= 80) {
//     console.log("B");
// } else if (testScore >= 70) {
//     console.log("C");
// } else if (testScore >= 60) {
//     console.log("D");
// } else {
//     console.log("F");
// }

// let cheatSheet = 3;


// if (cheatSheet >= 5) {
//     console.log("You have the cheat sheets!");
// }else if (cheatSheet >= 3) {
//     console.log("do you have more money?");
// }else {
//     console.log("You don't get the cheat sheets!");
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
