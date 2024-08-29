// Question 1 

var city = prompt("Enter the city name:");
if (city === "karachi") {
  alert("Welcome to the city of lights");
} else {
  alert("Welcome to " + city);
}

// Question 2 

var gender = prompt("Enter your gender (male/female):");
if (gender === "male") {
  alert("Good Morning Sir");
} else if (gender === "female") {
  alert("Good Morning Ma'am");
} else {
  alert("Good Morning");
}

// Question 3

var signalColor = prompt("Enter the signal color (red, yellow, or green):");

  if (signalColor === "red") {
    alert("Must Stop");
  } else if (signalColor === "yellow") {
    alert("Ready to move");
  } else if (signalColor === "green") {
    alert("Move now");
  } else {
    alert("Invalid color. Please enter red, yellow, or green.");
  }

// Question 4 

var remainingFuel = prompt("Enter the remaining fuel in liters:");

  if (remainingFuel < 0.25) {
    alert("Please refill the fuel in your car.");
  } else {
    alert("You have sufficient fuel.");
  }

//   question 5 

var a = 4;
if (++a === 5){
alert("given condition for variable a is true");
}

var b = 82;
if (b++ === 83){
alert("given condition for variable b is true");
}

var c = 12;
if (c++ === 13){
alert("condition 1 is true");
}
if (c === 13){
alert("condition 2 is true");
}
if (++c < 14){
alert("condition 3 is true");
}
if(c === 14){
alert("condition 4 is true");
}

var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The cost equals");
}

if (true){
alert("True");
}
if (false){
alert("False");
}

if("car" < "cat"){
alert("car is smaller than cat");
}

// Question 6 
document.write("<br><strong>Question 6</strong><br>")

var totalMarks = parseInt(prompt("Enter total marks to make Marksheet:"));
var subject1Marks = parseInt(prompt("Enter marks in subject 1:"));
var subject2Marks = parseInt(prompt("Enter marks in subject 2:"));
var subject3Marks = parseInt(prompt("Enter marks in subject 3:"));

var marksObtained = subject1Marks + subject2Marks + subject3Marks;
var percentage = (marksObtained / totalMarks) * 100;

let grade, remarks;

if (percentage >= 80) {
  grade = "A-one";
  remarks = "Excellent";
} else if (percentage >= 70) {
  grade = "A";
  remarks = "Good";
} else if (percentage >= 60) {
  grade = "B";
  remarks = "You need to improve";
} else {
  grade = "Fail";
  remarks = "Sorry";
}

document.write("<h2>Marks Sheet</h2>");
document.write("<p>Total marks: " + totalMarks + "</p>");
document.write("<p>Marks obtained: " + marksObtained + "</p>");
document.write("<p>Percentage: " + percentage + "%</p>");
document.write("<p>Grade: " + grade + "</p>");
document.write("<p>Remarks: " + remarks + "</p>");

// Question 7 

var secretNumber = 2;
var guessedNumber = parseInt(prompt("Guess a number between 1 and 10:"));

  if (guessedNumber === secretNumber) {
    alert("Bingo! Correct answer.");
  } else if ( guessedNumber === secretNumber + 1) {
    alert("Close enough to the correct answer. The secret number was " + secretNumber + ".");
  } else {
    alert("Incorrect answer. The secret number was " + secretNumber + ".");
  }

// Quetion 8 

var number = parseInt(prompt("Enter a number to find it's divisble by 3:"));

  if (number % 3 === 0) {
    alert("The number " + number + " is divisible by 3.");
  } else {
    alert("The number " + number + " is not divisible by 3.");
  }

// Question 9 

var number = parseInt(prompt("Enter a number to find it's even or odd:"));

  if (number % 2 === 0) {
    alert("The number " + number + " is even.");
  } else {
    alert("The number " + number + " is odd.");
  }

// Question 10 

var temperature = parseFloat(prompt("Enter the temperature in degrees Celsius:"));

  if (temperature > 40) {
    alert("It is too hot outside.");
  } else if (temperature > 30) {
    alert("The weather today is normal.");
  } else if (temperature > 20) {
    alert("Today's weather is cool.");
  } else if (temperature > 10) {
    alert("OMG! Today's weather is so cool!"); 
  } 
    else {
    alert("It's freezing outside!");
  }

// Question 11 

var firstNumber = parseFloat(prompt("Calculator\nEnter the first number:"));
var secondNumber = parseFloat(prompt("Enter the second number:"));
var operation = prompt("Enter the operation (+, -, *, /, %):");

  if (operation === "+") {
    var result = firstNumber + secondNumber;
    alert("Result: " + result);
  } else if (operation === "-") {
    var result = firstNumber - secondNumber;
    alert("Result: " + result);
  } else if (operation === "*") {
    var result = firstNumber * secondNumber;
    alert("Result: " + result);
  } else if (operation === "/") {
    if (secondNumber === 0) {
      alert("Error: Division by zero is not allowed.");
    } else {
      var result = firstNumber / secondNumber;
      alert("Result: " + result);
    }
  } else if (operation === "%") {
    if (secondNumber === 0) {
      alert("Error: Modulus by zero is not allowed.");
    } else {
      var result = firstNumber % secondNumber;
      alert("Result: " + result);
    }
  } else {
    alert("Invalid operation. Please enter +, -, *, /, or %.");
  }