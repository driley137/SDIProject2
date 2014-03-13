//alert("JavaScript works!");

/*
  Dustin Riley
  SDI 1403
  Project 2
*/

// Declaring my global variables
var fName = "Billy"; lName = "Belly"; time = 0; workout = true;

// Prompting the user
fName = prompt("What is your first name?", "i.e. Gandalf");
lName = prompt("What is your last name?", "i.e. Tyson");
time = prompt("What time is it? (24hr clock, no zeroes before or after)", "Please use the 24hr clock, with no preceeding or proceeding zeroes");

// Beginning of my "Procedure" step of the flow chart.
function timeConvert(i) {
    if (i <=12) {
        // Spitting back input number
        i = i;
    } else {
        if (i == 13) { // Beginning of IF/ELSE TREE to convert hrs 13-24 to 1-12
            i = 1;
        } else if (i == 14) {
            i = 2;
        } else if (i == 15) {
            i = 3;
        } else if (i == 16) {
            i = 4;
        } else if (i == 17) {
            i = 5;
        } else if (i == 18) {
            i = 6;
        } else if (i == 19) {
            i = 7;
        } else if (i == 20) {
            i = 8;
        } else if (i == 21) {
            i = 9;
        } else if (i == 22) {
            i = 10;
        } else if (i == 23) {
            i = 11;
        } else {
            i = 12;
        } // End IF/ELSE TREE
        
    } //End first else
} // END   t i m e C o n v e r t ( ) 

// Calling the function for the PROCEDURE step in the workflow
timeConvert(time);
workout = confirm("Would you like to start " + fName + "?");
