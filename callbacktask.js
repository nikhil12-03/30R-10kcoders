/**
 *1.  Write a function named processNumbers that accepts two numbers and a callback
function as parameters. InsideprocessNumbers , return the result of invoking the
callback with the two numbers. Next, callprocessNumbers with the numbers 
3 and 4,passing an anonymous function that returns the sum of these numbers. Store the
returned value in a variable and log it with a descriptive message (e.g., "Sum:" ).
What output should be printed to the console when the code is executed?

 */

function processNumbers(n1, n2, anonymous) {
    return anonymous(n1, n2);
}

let result = processNumbers(3, 4, function(a, b) {
    return a + b;
});

console.log("Sum of numbers is: " + result);

/**
 * 2. Create a function called greet that takes a single parameter—a callback function. 
 *  Inside greet , call the callback with the stringthe callback's result.
 *  Then, invoke  greet by passing an anonymous function that accepts a parameter (e.g.,name ) and returns a greeting in the format
 * "Hello, [name]!" 
 * Store the result in a variable and log it. What output will appear in the console? 
 */

function greet(anonymous){
     return (anonymous("Nikhil"))
}
let result2 =greet(function(name){return "Hello, "+ name+ " !"})
console.log(result2)

/**
 * 3.Define a function named calculate that takes three parameters: two numbers and a callback function 
 * representing an operation to perform on these numbers. Within calculate , return the result of calling the callback with the two numbers.
 * Next, call calculate with the numbers 10 and 5, and pass an arrow function as the callback that subtracts the second number from the first.
 * Log the result with an appropriate message (e.g.,"Difference:" ). 
 * What is the expected output when the code is executed?
 */
function calculate(a,b,anonymous){
    return anonymous(a,b)
}
let c= (a,b)=> {return (a-b)}
let result3=calculate(10,5,c)
console.log("The Difference is : "+result3)