// Question 1 & 2 
document.write("<br><strong>Question 1 & 2</strong>")

var number1 = 10; 
var number2 = 5; 

var sum = number1 + number2;             
var difference = number1 - number2;     
var product = number1 * number2;        
var quotient = number1 / number2;       
var modulus = number1 % number2;         

document.write("<h1>Arithmetic Operations</h1>");
document.write("<p>Sum of 10 & 5 is " + sum + "</p>");
document.write("<p>Difference of 10 & 5 is " + difference + "</p>");
document.write("<p>Product of 10 & 5 is " + product + "</p>");
document.write("<p>Quotient of 10 & 5 is " + quotient + "</p>");
document.write("<p>Modulus of 10 & 5 is " + modulus + "</p>");

// Question 3 
document.write("<strong>Question 3</strong><br>")

var myVariable;
document.write("<br>Value after variable declaration is: " + myVariable + "<br>");

myVariable = 5;
document.write("Initial value: " + myVariable + "<br>");

myVariable++;
document.write("Value after increment is: " + myVariable + "<br>");

myVariable += 7;
document.write("Value after addition is: " + myVariable + "<br>");

myVariable--;
document.write("Value after decrement is: " + myVariable + "<br>");

var remainder = myVariable % 3;
document.write("The remainder is: " + remainder + "<br>");

// Question 4 
document.write("<br><strong>Question 4</strong><br>")

var ticketPrice = 600;
var numberOfTickets = 5;
var totalCost = ticketPrice * numberOfTickets;
document.write("<br>The total cost of buying " + numberOfTickets + " tickets is: " + totalCost + " PKR");

// Question 5 
document.write("<br><br><strong>Question 5</strong><br>")

var number = 4;
document.write("<h2>Multiplication Table of " + number + "</h2>");
    for (var i = 1; i <= 10; i++) {
        var result = number * i; 
        document.write(number + " x " + i + " = " + result + "<br>");
    }

// Question 6 

document.write("<br><strong>Question 6</strong><br><br>")

var celsius = 25;
var fahrenheit = (celsius * 9/5) + 32; 
document.write(celsius + "°C is " + fahrenheit + "°F<br>");

var fahrenheitTemp = 70; 
var celsiusConverted = (fahrenheitTemp - 32) * 5/9; 
document.write(fahrenheitTemp + "°F is " + celsiusConverted + "°C");

// Question 7 

document.write("<br><br><strong>Question 7</strong><br>")

var priceItem1 = 650; 
var priceItem2 = 100; 
var quantityItem1 = 3; 
var quantityItem2 = 7; 
var shippingCharges = 100; 
var totalCostItem1 = priceItem1 * quantityItem1; 
var totalCostItem2 = priceItem2 * quantityItem2;
var totalCost = totalCostItem1 + totalCostItem2 + shippingCharges; 

document.write("<h2>Receipt :</h2>");
document.write("Price of item 1 is " + priceItem1 + " PKR<br>");
document.write("Quantity of item 1 is " + quantityItem1 + "<br>");
document.write("Total cost of item 1 is " + totalCostItem1 + " PKR<br><br>");

document.write("Price of item 2 is " + priceItem2 + " PKR<br>");
document.write("Quantity of item 2 is " + quantityItem2 + "<br>");
document.write("Total cost of item 2 is " + totalCostItem2 + " PKR<br><br>");

document.write("Shipping Charges: " + shippingCharges + " PKR<br><br>");
document.write("Total Cost: " + totalCost + " PKR");

// Question 8 

document.write("<br><br><strong>Question 8</strong><br>")

var totalMarks = 980; 
var marksObtained = 804;
var percentage = (marksObtained / totalMarks) * 100;

document.write("<h2>Percentage Calculation</h2>");
document.write("Total Marks: " + totalMarks + "<br>");
document.write("Marks Obtained: " + marksObtained + "<br>");
document.write("Percentage: " + percentage + "%"); 

// Question 9 
document.write("<br><br><strong>Question 9</strong><br>")

var usDollars = 10;
var saudiRiyals = 25;
var exchangeRateUSD = 104.80; 
var exchangeRateSAR = 28; 

var totalInPKR = (usDollars * exchangeRateUSD) + (saudiRiyals * exchangeRateSAR);

document.write("<h2>Currency in PKR</h2>");
document.write("Total currency in PKR: " + totalInPKR + ".");

// Question 10 
document.write("<br><br><strong>Question 10</strong><br>")

var initialNumber = 7;
var result = ((initialNumber + 5) * 10) / 2;
document.write("<h2>Arithmetic Operations</h2>");
document.write("Initial Number: " + initialNumber + "<br>");
document.write("Result after operations: " + result);

// Question 11
document.write("<br><br><strong>Question 11</strong><br>")

var currentYear = 2024; 
var birthYear = 2005; 
var age = currentYear - birthYear; 


document.write("<h2>Age Calculator</h2>");
document.write("Current Year: " + currentYear + "<br>");
document.write("Birth Year: " + birthYear + "<br>");
document.write("Your Age: " + age + "<br>");

// Question 12 
document.write("<br><strong>Question 12</strong><br>")

var radius = 20; 
var pi = 3.142; 
var circumference = 2 * pi * radius;
var area = pi * radius * radius;

document.write("<h2>The Geometrizer</h2>");
document.write("Radius of a circle: " + radius + ".<br>");
document.write("The circumference is " + circumference + ".<br>"); 
document.write("The area is " + area + ".");

// Question 13 
document.write("<br><br><strong>Question 13</strong><br>")

var favoriteSnack = " Chocolate Chips"; 
var currentAge = 19; 
var maxAge = 80; 
var estimatedAmountPerDay = 3; 
var yearsLeft = maxAge - currentAge;
var totalSupply = yearsLeft * 365 * estimatedAmountPerDay; 
document.write("<h2>Lifetime Supply Calculator</h2>");
document.write("Favourite Snack: " + favoriteSnack + "<br>");
document.write("Current age: " + currentAge + "<br>");
document.write("Estimated Maximum Age: " + maxAge + "<br>");
document.write("Amount of snacks per day: " + estimatedAmountPerDay + "<br>");
document.write("You will need " + totalSupply + favoriteSnack + " to last you until the ripe old age of " + maxAge + ".");