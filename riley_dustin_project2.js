//alert("JavaScript works!");

/*
  Dustin Riley
  SDI 1403
  Project 2
*/

// Declaring my global variables
var fName = "Billy"; lName = "Belly"; time = 0; workout = true; hours = 0; intro = "";

// Prompting the user
fName = prompt("What is your first name?", "i.e. Gandalf");
lName = prompt("What is your last name?", "i.e. Tyson");
time = prompt("What time is it? (24hr clock, no zeroes before or after)", "Please use the 24hr clock, with no preceeding or proceeding zeroes");

// Quality Control, Parsing INT
time = parseInt(time);

// Method to convert the 24hr time to 1-12
function timeConvert(i) {

    if (i <= 12) {
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
    return i;
    
} // END   t i m e C o n v e r t ( )


// Beginning boolean method
function workoutMethod(i,j){

    // Declare local variable
    var x = j;
    
    while (x == j) {
        // Implementing the conditional
        if (x == j) {
            console.log("It is " + x + " O'Clock, lets see if you're ready.")
            x++;
        } else {
            i = true;
            break;
        } // END else
    } // END while loop
    
    return i;   
} // END      w o r k o u t M e t h o d ( ) 


// Beginning math process
function timeAfterWorkout(h){
    //Declare local variable
    var shortWorkout = 1;
    
    for(var x = 0; x != 1; x++){
        h = time + shortWorkout;
    } // END for loop
    
    // Returning hours with workout
    return h;
} // END  t i m e A f t e r W o r k o u t


// Beginning String function
function fullName(i, j){
    
    // Declare local variables
    var greet = "Hello, "; getMotivated = ", Let's get our blood pumping!"; together = "";
    
    // Concatenating it all together now
    together = greet + i + " " + j + getMotivated;
    
    // Spit it back
    return together;
    
} // END       f u l l N a m e ( ) 


// Calling all methods and returning for print outs
time = timeConvert(time);
workout = confirm("Since it's " + time + " O'Clock, Would you like to start " + fName + "?");
workout = workoutMethod(workout, time);
hours = timeAfterWorkout(time);
intro = fullName(fName, lName);

console.log(intro + "\nSince it's " + time + " O'Clock now, after your workout it'll be " + hours + " O'Clock. Better go get that blood pumping!");

