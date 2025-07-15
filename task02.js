"use strict";

// TODO: Use if/else to check if it's a number
// (hint: typeof or isNaN)

const userInput = NaN;
// Try changing to "hello", 10, null, NaN

// Convert to a number and check with isNaN
if (typeof userInput === "number" && !isNaN(userInput)) {
  console.log("It is a number.");
} else {
  console.log("It is NOT a number.");
}

// console.log(typeof NaN);