//Task 1: Object Destructuring
const person = { 
    name: "John Doe", 
    age: 30, 
    address: { 
    city: "New York", 
    country: "USA" 
    }, 
    hobbies: ["Reading", "Traveling"] 
    };
let {name:firstname,age,address:{city,country},hobbies:[firsthoby,secondhoby]}=person
console.log(firstname,age,city,country,firsthoby)   

//Task 2: Array Destructuring
const fruits = ["Apple", "Banana", "Mango", "Orange", "Pineapple"];
let [fruit1, fruit2, ...rest] = fruits;
let remaining = [...rest];
[fruit1, fruit2] = [fruit2, fruit1];
console.log(fruit1, fruit2); 
console.log(remaining);    
//Task 3: Function with Rest Parameters
function sumNumbers(...rest){
   return rest.reduce((sum,next)=>sum+next)
}
console.log(sumNumbers(1,2,3,4));
console.log(sumNumbers(5,6,7,9,3,4,6,7,6,8));
// Task 4: Merging Objects using Spread Operator
const user = { name: "Alice", age: 25 }; 
const job = { title: "Developer", company: "TechCorp" };
const userProfile={...user,...job,"experiene":"2Years"}
console.log(userProfile);
// Task 5: Copy and Modify an Array using Spread Operator
const numbers = [1, 2, 3, 4, 5];
let newNumbers=[...numbers]
console.log(newNumbers);
//method-1
newNumbers.unshift(0);
newNumbers.push(6);
console.log(newNumbers);
//method-2
let updatedNumbers=[0,...newNumbers,6]
console.log(updatedNumbers);
