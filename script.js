// First Program
console.log('Welcome To JS Tutorial By Logan!');

let year = 2024;

if (year % 4 === 0) {
  if (year % 100 !== 0) {
    console.log("Leap year");
  } else if (year % 400 === 0) {
    console.log("Leap year");
  } else {
    console.log("Not a leap year");
  }
} else {
  console.log("Not a leap year");
}

const button = document.getElementById("bg-button");
button.addEventListener("click", function() {
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor = "#" + randomColor;

});

document.getElementById("demo").innerHTML = 5 + 6;
