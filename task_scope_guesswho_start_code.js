// // // GUESS 1 ///////////////////
// let guess = {
//   hair_colour: "red",
//   eye_colour: "blue",
//   hat: false,
//   glasses: true,
//   firstName: "Joseph",
// };

// const guessWho = function () {
//   return `Guess who is ${guess.firstName}`;
// };

// const finalAnswer = guessWho();
// console.log(finalAnswer);
// // Prediction: Joseph

// // GUESS 2 ///////////////////

// let firstName = "Donna";

// const guessWho = function () {
//   const glasses = false;
//   let firstName = "Liz";
//   return `Guess Who is ${firstName}.`;
// };

// const guess1 = guessWho();
// console.log("guess1: ", guess1);
// // Prediction: Liz
// const guess2 = `Guess Who is ${firstName}`;
// console.log("guess2: ", guess2);
// // Prediction: Donna

// // GUESS 3 ///////////////////

// const guess = {
//   hair_colour: "black",
//   eye_colour: "brown",
//   hat: false,
//   glasses: false,
//   firstName: "Andy",
// };

// const changeHat = function () {
//   guess.hat = !guess.hat;
// };

// const changeGuess = function (newName) {
//   guess.firstName = newName;
// };

// const guessWho = function () {
//   return `Guess Who is ${guess.firstName}`;
// };

// changeHat();

// if (guess.hat) {
//   changeGuess("Chris");
// }

// const finalAnswer = guessWho();
// console.log(finalAnswer);
// // Prediction: Chris

// // GUESS 4 ///////////////////

// let firstName = "Gail";

// if (firstName === "Gail") {
//   let firstName = "Ashley"; // block scope - so the 'finalAnswer' is 'Gail'.... if we remove 'let' before this instance of 'firstName', the 'finalAnswer' would be 'Ashley'
// }

// const guessWho = function () {
//   return `Guess Who is ${firstName}`;
// };

// const finalAnswer = guessWho();
// console.log(finalAnswer);
// // Prediction: Gail



// // GUESS 5 ///////////////////

// const guess = {
//   hair_colour: "blonde",
//   eye_colour: "brown",
//   hat: false,
//   glasses: false,
//   firstName: "Jennifer",
// };

// const changeGuess = function () {
//   guess = {
//     hair_colour: "blonde",
//     eye_colour: "blue",
//     hat: false,
//     glasses: false,
//     firstName: "Kyle",
//   };
// };

// changeGuess();
// console.log(`Guess Who is ${guess.firstName}`);
// // Prediction: throws TypeError: Assignment to constant variable.



// // ADDITIONAL NOTE FOR GUESS 5: You can change a single property with const! - see below
// const guess1 = {
//     hair_colour: "blonde",
//     eye_colour: "brown",
//     hat: false,
//     glasses: false,
//     firstName: "Jennifer",
//   };
  
//   const changeGuess1 = function () {
//     guess1.firstName = "Kyle";
//   };
  
//   changeGuess1();
//   console.log(`Guess Who is ${guess1.firstName}`);
//   // Prediction: Kyle
  
