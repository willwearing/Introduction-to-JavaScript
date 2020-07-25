/************************************************************** Task 1: Warm-up! **************************************************************/
//Task a: declare a variable called votingAge, console log true if age > 18 (no function required)

let votingAge = 21;

if (votingAge > 18) {
  console.log("true");
}

//Task b: declare a variable and then use a conditional to change the value of that variable based on the value assigned to a second variable (no function required)

let num1 = 7;
let num2 = 5;

if (num1 > 5) {
  num2++;
  console.log(num2);
}

//Task c: Convert string ("1999") to integer (1999)  (no function required) // hint look up the Number method

let string1 = "1999";

let number1 = Number(string1);

console.log(number1);

//Task d: Write a function to multiply a*b

function myFunction(a, b) {
  console.log(a * b);
}

myFunction(2, 5);

/************************************************************** Task 2 **************************************************************/
//Age in Dog years
//write a function that takes your age and returns it to you in dog years - they say that 1 human year is equal to seven dog years
function dogYears(myAge) {
  console.log(myAge * 7);
}

dogYears(30);

/************************************************************** Task 3 **************************************************************/
//Dog feeder
//takes weight in pounds and age in years (note if the dog is a puppy the age will be a decimal) and returns the number of pounds of raw food to feed in a day.

//feeding requirements
// adult dogs at least 1 year
// up to 5 lbs - 5% of their body weight
// 6 - 10 lbs - 4% of their body weight
// 11 - 15 lbs - 3% of their body weight
// > 15lbs - 2% of their body weight

// Puppies less than 1 year
// 2 - 4 months 10% of their body weight
// 4 - 7 months 5% of their body weight
// 7 - 12 months 4% of their body weight

// when you are finished invoke your function with the weight of 15 lbs and the age of 1 year - if your calculations are correct your result should be 0.44999999999999996

function dogFeed(weight, age) {
  if (age < 4 / 12) {
    console.log(weight * 0.1);
  } else if (age < 7 / 12) {
    console.log(weight * 0.05);
  } else if (age < 1) {
    console.log(weight * 0.04);
  } else if (weight <= 5 && age >= 1) {
    console.log(weight * 0.05);
  } else if (weight <= 10 && age >= 1) {
    console.log(weight * 0.04);
  } else if (weight <= 15 && age >= 1) {
    console.log(weight * 0.03);
  } else {
    console.log(weight * 0.02);
  }
}

dogFeed(15, 1);

/************************************************************** Task 4 **************************************************************/
// Rock, Paper, Sissors
// Your function should take a string (either rock paper or sissors)
// it should return you won or you lost based on the rules of the game (you may need to look up the rules if you have not played before)
// use math.random to determine the computers choice
// hint while you can complete this with only conditionals based on strings it may help to equate choice to a number

function winner(choice) {
  let go1 = choice;

  let computer = Math.random();

  console.log(computer);

  let computerGo;

  if (computer < 0.33) {
    computerGo = "rock";
  } else if (computer < 0.66) {
    computerGo = "paper";
  } else {
    computerGo = "scissors";
  }

  console.log(computerGo);
  let result;

  if (go1 == "rock" && computerGo == "rock") {
    result = "draw";
  } else if (go1 == "rock" && computerGo == "paper") {
    result = "computer wins";
  } else if (go1 == "rock" && computerGo == "scissors") {
    result = "human wins";
  } else if (go1 == "paper" && computerGo == "paper") {
    result = "draw";
  } else if (go1 == "paper" && computerGo == "rock") {
    result = "human wins";
  } else if (go1 == "paper" && computerGo == "scissors") {
    result = "computer wins";
  } else if (go1 == "scissors" && computerGo == "scissors") {
    result = "draw";
  } else if (go1 == "scissors" && computerGo == "rock") {
    result = "computer wins";
  } else if (go1 == "scissors" && computerGo == "paper") {
    result = "human wins";
  }

  return result;
}

console.log(winner("rock"));

/************************************************************** Task 5 **************************************************************/
//Metric Converter
//a. KM to Miles - should take the number of kilometers and convert it to the equal number of miles

//b. Feet to CM - should take the number of feet and convert it to the equal number of centimeters

function kmMiles(km) {
  let miles = km * 0.62;
  console.log(miles);
}

kmMiles(10);

function feetCM(feet) {
  let cm = feet * 0.03;
  console.log(cm);
}

feetCM(3);

/************************************************************** Task 6 **************************************************************/
// 99 bottles of soda on the wall
// create a function called annoyingSong
// the function should take a starting number as an argument and count down - at each iteration it should log (number) bottles of soda on the wall, (number) bottles of soda, take one down pass it around (number left over) bottles of soda on the wall`

function annoyingSong(num1) {
  for (let index = num1; index > 0; index--) {
    console.log(
      `${index} bottles of soda, ${index} bottles of soda, take one down pass it around ${
        index - 1
      } bottles of soda on the wall`
    );
  }
}

annoyingSong(10);

/************************************************************** Task 7 **************************************************************/
//Grade Calculator
//write a javaScript program that takes a mark out of 100 and returns a corisponding letter grade
//90s should be A
//80s should be B
//70s should be Cs
//60s should be D
//and anything below 60 should be F

function whatIs(score) {
  let grade;
  if (score >= 90) {
    grade = "A";
  } else if (score >= 80) {
    grade = "B";
  } else if (score >= 70) {
    grade = "C";
  } else if (score >= 60) {
    grade = "D";
  } else {
    grade = "F";
  }
  console.log(grade);
}

whatIs(91);

/************************************************************** Stretch **************************************************************/
//Create a function that counts the number of vowels within a string. It should handle both capitalized and uncapitalized vowels.
// Hint - you may need to study tomorrow's traning kit on arrays
// try looking up the .includes() method

/************************************************************** Stretch **************************************************************/
//Take Rock, Paper, Sissors further
//update your rock papers sissors code below to take a prompt from a user using the window object
