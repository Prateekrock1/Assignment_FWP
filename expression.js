// Compute the area of a circle with radius r and store the result in area
var r = 7;
var area = Math.PI * Math.pow(r, 2);

// Compute the value of two more than the product of six and a number x, and store the result back in x
var x = 12;
x = 2 + (6 * x);

// Compute how much money you will have if you start with $5 and invest it with an interest rate of 5%, compounded annually
var money = 5;
var interest = 0.05; // 5%
var years = 1;
var futureValue = money * Math.pow(1 + interest, years);

// Compute how many pennies you will have left over after giving as many pennies as possible to each of three nieces
var pennies = 23;
var leftoverPennies = pennies % 3;

// Print the results
document.write("Area of the circle: " + area + "<br>");
document.write("Value of x after computation: " + x + "<br>");
document.write("Future value of the investment: $" + futureValue.toFixed(2) + "<br>");
document.write("Leftover pennies: " + leftoverPennies);
