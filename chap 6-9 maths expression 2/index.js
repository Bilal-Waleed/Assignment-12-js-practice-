// Question 1 
document.write("<br><strong>Question 1</strong><br>")

var a = 10;
        
document.write("<h2>Result:</h2>");
document.write("The value of a is: " + a + "<br>");
document.write("................................................<br><br>");

document.write("The value of ++a is: " + (++a) + "<br>");
document.write("Now the value of a is: " + a + "<br><br>");

document.write("The value of a++ is: " + (a++) + "<br>");
document.write("Now the value of a is: " + a + "<br><br>");

document.write("The value of --a is: " + (--a) + "<br>");
document.write("Now the value of a is: " + a + "<br><br>");

document.write("The value of a-- is: " + (a--) + "<br>");
document.write("Now the value of a is: " + a + "<br>");

// Question 2 
document.write("<br><strong>Question 2</strong><br>")

var a = 2, b = 1;
document.write("<h3>Initial Values:</h3>");
document.write("a = " + a + "<br>");
document.write("b = " + b + "<br><br>");

document.write("<h3>Step 1: --a;</h3>");
var step1 = --a;
document.write("a = " + a + "<br>");
document.write("b is still " + b + "<br><br>");

document.write("<h3>Step 2: --a - --b;</h3>");
var step2 = --a - --b;
document.write("a = " + a + "<br>");
document.write("b = " + b + "<br>");
document.write("Result of --a - --b = " + step2 + "<br><br>");

document.write("<h3>Step 3: --a - --b + ++b;</h3>");
var step3 = --a - --b + ++b;
document.write("a = " + a + "<br>");
document.write("b = " + b + "<br>");
document.write("Result of --a - --b + ++b = " + step3 + "<br><br>");

document.write("<h3>Step 4: --a - --b + ++b + b--;</h3>");
var result = --a - --b + ++b + b--;
document.write("a = " + a + "<br>");
document.write("b = " + b + "<br>");
document.write("Final Result = " + result + "<br>");

// Question 3 
document.write("<br><strong>Question 3</strong><br><br>")

var userName = prompt("Please enter your name:");
document.write("Hello, " + userName + "! Welcome to our website.");

// Question 5 
document.write("<br><br><strong>Question 5</strong><br>")

var number = prompt("Enter a number to display its multiplication table:");
if (number === null || number === "") {
    number = 5;
}
document.write("<h2>Multiplication Table of " + number + "</h2>");
for (var i = 1; i <= 10; i++) {
    document.write(number + " x " + i + " = " + (number * i) + "<br>");
}

// Question 6
document.write("<br><strong>Question 6</strong><br>")

var subject1 = prompt("Marksheet\nEnter the name of the first subject:");
var subject2 = prompt("Enter the name of the second subject:");
var subject3 = prompt("Enter the name of the third subject:");

var obtainedMarks1 = parseInt(prompt("Enter obtained marks for " + subject1 + ":"));
var obtainedMarks2 = parseInt(prompt("Enter obtained marks for " + subject2 + ":"));
var obtainedMarks3 = parseInt(prompt("Enter obtained marks for " + subject3 + ":"));

var totalMarksEach = 100;
var totalMarks = totalMarksEach * 3;
var totalObtainedMarks = obtainedMarks1 + obtainedMarks2 + obtainedMarks3;
var percentage1 = (obtainedMarks1 / totalMarksEach) * 100;
var percentage2 = (obtainedMarks2 / totalMarksEach) * 100;
var percentage3 = (obtainedMarks3 / totalMarksEach) * 100;
var percentage = (totalObtainedMarks / totalMarks) * 100;

document.write("<h2>Marksheet : </h2>");
document.write("<table border='1'>");
document.write("<tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th><th>Percentage</th></tr>");
document.write("<tr><td>" + subject1 + "</td><td>" + totalMarksEach + "</td><td>" + obtainedMarks1 + "</td><td>" + percentage1 + "%</td></tr>");
document.write("<tr><td>" + subject2 + "</td><td>" + totalMarksEach + "</td><td>" + obtainedMarks2 + "</td><td>" + percentage2 + "%</td></tr>");
document.write("<tr><td>" + subject3 + "</td><td>" + totalMarksEach + "</td><td>" + obtainedMarks3 + "</td><td>" + percentage3 + "%</td></tr>");
document.write("<tr><td> Total" + "</td><td>" + totalMarks + "</td><td>" + totalObtainedMarks + "</td><td>" + percentage + "%</td></tr>");
document.write("</table>");


