/************************************************************** Task 1: Warm-up! **************************************************************/
//Task a: declare a variable called votingAge, console log true if age > 18 (no function required)
let votingAge = 19;
if (votingAge > 18) {
  console.log(true);
}

//Task b: declare a variable and then use a conditional to change the value of that variable based on the value assigned to a second variable (no function required)

let ranVar = "something";
let otherVar = "something else";
if (10 > 0) {
  ranVar = otherVar;
}

console.log(ranVar);

//Task c: Convert string ("1999") to integer (1999)  (no function required) // hint look up the Number method

console.log(Number("1999"));

//Task d: Write a function to multiply a*b

function multi(a, b) {
  return a * b;
}

console.log(multi(2, 3));

/************************************************************** Task 2 **************************************************************/
//Age in Dog years
//write a function that takes your age and returns it to you in dog years - they say that 1 human year is equal to seven dog years

function dogYears(age) {
  return age * 7;
}

console.log(dogYears(30));

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

function dogFeeder(weight, age) {
  if (age < 4 / 12) {
    return 0.1 * weight;
  } else if (age < 7 / 12) {
    return 0.05 * weight;
  } else if (age < 1) {
    return 0.01 * weight;
  } else if (age >= 1 && weight <= 5) {
    return 0.05 * weight;
  } else if (age >= 1 && weight <= 10) {
    return 0.04 * weight;
  } else if (age >= 1 && weight <= 15) {
    return 0.03 * weight;
  } else if (age >= 1 && weight > 15) {
    return 0.02 * weight;
  }
}
console.log(dogFeeder(15, 1));

/************************************************************** Task 4 **************************************************************/
// Rock, Paper, Sissors
// Your function should take a string (either rock paper or sissors)
// it should return you won or you lost based on the rules of the game (you may need to look up the rules if you have not played before)
// use math.random to determine the computers choice
// hint while you can complete this with only conditionals based on strings it may help to equate choice to a number

let computersGo;

function computer(max) {
  let computersAnswer = Math.floor(Math.random() * Math.floor(max));
  if (computersAnswer == 0) {
    computersGo = "rock";
  } else if (computersAnswer == 1) {
    computersGo = "paper";
  } else if (computersAnswer == 2) {
    computersGo = "scissors";
  }
  return computersAnswer;
}

computer(3);

function rockPaperScissors(myGo, computersGo) {
  if (myGo == "rock" && computersGo == "paper") {
    return "computer wins";
  } else if (myGo == "rock" && computersGo == "scissors") {
    return "you win";
  } else if (myGo == "rock" && computersGo == "rock") {
    return "draw";
  } else if (myGo == "paper" && computersGo == "rock") {
    return "you win";
  } else if (myGo == "paper" && computersGo == "scissors") {
    return "computer wins";
  } else if (myGo == "paper" && computersGo == "paper") {
    return "draw";
  } else if (myGo == "scissors" && computersGo == "rock") {
    return "computer wins";
  } else if (myGo == "scissors" && computersGo == "paper") {
    return "you win";
  } else if (myGo == "scissors" && computersGo == "scissors") {
    return "draw";
  }
}

console.log(rockPaperScissors("rock", computersGo));

/************************************************************** Task 5 **************************************************************/
//Metric Converter
//a. KM to Miles - should take the number of kilometers and convert it to the equal number of miles

function converterKM(km) {
  return km * 0.621371;
}

console.log(converterKM(10));

//b. Feet to CM - should take the number of feet and convert it to the equal number of centimeters

function converterIN(inch) {
  return inch * 2.54;
}

console.log(converterIN(10));

/************************************************************** Task 6 **************************************************************/
// 99 bottles of soda on the wall
// create a function called annoyingSong
// the function should take a starting number as an argument and count down - at each iteration it should log (number) bottles of soda on the wall, (number) bottles of soda, take one down pass it around (number left over) bottles of soda on the wall`

function annoyingSong(startNum) {
  for (let i = startNum; i > 0; i--) {
    console.log(
      `${i} bottles of soda, ${i} bottles of soda, take one down pass it around, ${
        i - 1
      } bottles of soda on the wall`
    );
  }
}

annoyingSong(9);

/************************************************************** Task 7 **************************************************************/
//Grade Calculator
//write a javaScript program that takes a mark out of 100 and returns a corisponding letter grade
//90s should be A
//80s should be B
//70s should be Cs
//60s should be D
//and anything below 60 should be F

function gradeCalc(mark) {
  if (mark >= 90) {
    return "A";
  } else if (mark >= 80) {
    return "B";
  } else if (mark >= 70) {
    return "C";
  } else if (mark >= 60) {
    return "D";
  } else if (mark < 60) {
    return "F";
  }
}

console.log(gradeCalc(70));

/************************************************************** Stretch **************************************************************/
//Create a function that counts the number of vowels within a string. It should handle both capitalized and uncapitalized vowels.
// Hint - you may need to study tomorrow's traning kit on arrays
// try looking up the .includes() method

let vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];

function countVowels(text) {
  let count = 0;
  for (let letters of text) {
    if (vowels.includes(letters)) {
      count++;
    }
  }
  console.log(count);
}

countVowels("William");

/************************************************************** Stretch **************************************************************/
//Take Rock, Paper, Sissors further
//update your rock papers sissors code below to take a prompt from a user using the window object

let playerChoice = prompt("Type in one of the follow: rock, paper or scissors");

let computersGo1;

function computer1(max1) {
  let computersAnswer1 = Math.floor(Math.random() * Math.floor(max1));
  if (computersAnswer1 == 0) {
    computersGo1 = "rock";
  } else if (computersAnswer1 == 1) {
    computersGo1 = "paper";
  } else if (computersAnswer1 == 2) {
    computersGo1 = "scissors";
  }
  return computersAnswer1;
}

computer1(3);

function rockPaperScissors1(myGo1, computersGo1) {
  if (myGo1 == "rock" && computersGo1 == "paper") {
    return "computer wins";
  } else if (myGo1 == "rock" && computersGo1 == "scissors") {
    return "you win";
  } else if (myGo1 == "rock" && computersGo1 == "rock") {
    return "draw";
  } else if (myGo1 == "paper" && computersGo1 == "rock") {
    return "you win";
  } else if (myGo1 == "paper" && computersGo1 == "scissors") {
    return "computer wins";
  } else if (myGo1 == "paper" && computersGo1 == "paper") {
    return "draw";
  } else if (myGo1 == "scissors" && computersGo1 == "rock") {
    return "computer wins";
  } else if (myGo1 == "scissors" && computersGo1 == "paper") {
    return "you win";
  } else if (myGo1 == "scissors" && computersGo1 == "scissors") {
    return "draw";
  }
}

console.log(rockPaperScissors1(playerChoice, computersGo1));
