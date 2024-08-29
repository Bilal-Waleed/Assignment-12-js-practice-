// Question 1 

var char = prompt("Enter a number (A=65, Z=90, a=97, z=122): "); 
var asciiCode = char;

if (asciiCode >= 65 && asciiCode <= 90) {
    alert("The input is an uppercase letter.");
} else if (asciiCode >= 97 && asciiCode <= 122) {
    alert("The input is a lowercase letter.");
} else {
    alert("The input is not a number or letter.");
}

// Question 2 

var num1 = prompt("Check which number is larger?\nEnter the first number:");  
var num2 = prompt("Enter the second number:");

if (num1 > num2) {
    alert(num1 + " is larger.");
} else if (num1 < num2) {
    alert(num2 + " is larger.");
} else if (num1 == num2) {
    alert("Both numbers are equal.");
}

// Question 3 

var num = prompt("Check number is positive, negative or zero\nEnter a number:");  

if (num > 0) {
    alert("The number is positive.");
} else if (num < 0) {
    alert("The number is negative.");
} else {
    alert("The number is zero.");
}

// Question 4 

var char = prompt("Check the Alphbet is vowel\nEnter a character:");  
var vowels = "aeiouAEIOU";

if (vowels.includes(char)) {
    alert("True, it is a vowel.");
} else {
    alert("False, it is not a vowel.");
}

// Question 5 

var correctPassword = "bilal4"; 
var userPassword = prompt("Enter your password:"); 

if (userPassword == "" ) {
    alert("Please enter your password.");
} else if (userPassword == correctPassword) {
    alert("Correct! The password you entered matches the original password.");
} else {
    alert("Incorrect password.");
}

// Question 6 

var greeting;
var hour = prompt("Enter the current hour (0-23):"); 

if (hour < 18) {
    greeting = "Good day";
} else {
    greeting = "Good evening";
}
alert(greeting);

// Question 7 

var hour = parseInt(prompt("Enter time in 24-hour format (e.g., 19 for 7pm):"));  

if (hour >= 0 && hour < 12) {
    alert(hour + "am");
} else if (hour >= 12 && hour < 24) {
    if (hour === 12) {
        alert(hour + "pm");
    } else {
        alert((hour - 12) + "pm");
    }
} else {
    alert("Invalid time.");
}