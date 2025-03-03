/**
 * Scenario 1: Counting Numbers
Write a for loop to print numbers from 1 to 10.
 */
for(let i=1;i<=10;i++){
    console.log(i)
}

/**Scenario 2: Sum of Numbers
Write a for loop to calculate the sum of all numbers from 1 to 100. */
let sum=0
for(let i=1;i<=100;i++){
    sum+=i
}
console.log(sum)
/**
 * Scenario 3: Multiplication Table
Write a for loop to print the multiplication table of 7 (up to 10).
 */
let table=num=>{for(i=1;i<=10;i++){console.log(`${num}x${i}=${num*i}`)}}
console.log(table(7))
/**Scenario 4: Even Numbers
Write a for loop to print all even numbers between 1 and 20. */
for(let e=1;e<=20;e++){if (e%2==0){console.log(e)}}
/**
 * Scenario 5: Factorial Calculation
Write a for loop to calculate the factorial of a number (e.g., 5!).
 */

let factorial=num=> {
    let fact = 1;
    if (num === 0 || num === 1) {
      return fact; // Return just the number, not a string
    } else {
      for (let f = num; f > 0; --f) {
        fact *= f;
      }
    }
    return fact;
  }
  
  console.log(factorial(4))

  /**Scenario 6: Power of a Number
Write a for loop to calculate the power of a number (e.g., 2^5). */
let power=(num,power)=>{
    var res=1
    if(num==0 && power==0){return res}
    else if(power==0){return 0}
    else {
        for(i=1;i<=power;i++){res*=num}
    }
    return res
}
console.log(power(2,0))
console.log(power(0,0))
console.log(power(2,5))
/**
 * Scenario 7: Odd Numbers in Reverse
Write a for loop to print all odd numbers between 20 and 1 in reverse order.
 */
for(o=20;o>0;o--){if(o%2!=0){console.log(o)}}