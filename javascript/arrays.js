 //1. Create an Array
 //Create an array with five numbers and print it.
   a=[1,2,'hello',i=>console.log('world')]
   console.log(a)
 
 //2. Access an Element
 //Given an array, print the third element.
 a=[1,2,3,4,5,6,7,8,9]
 console.log(a[2])
 //3. Change an Element
 //Modify the second element of an array to a new value.
 a[1]=10
 console.log(a)
 //4. Find Length
 //Write a function that returns the length of an array.
 var l=a.length
 console.log(l)
 //5. Add an Element (Push)
 //Add a new element to the end of an array.
 a.push(11)
 console.log(a);
 //6. Remove the Last Element (Pop)
 //Remove the last element from an array and print the updated array.
 a.pop(a.length)
 console.log(a);
 //7. Loop Through an Array
 //Use a loop to print each element of an array.
  for (n of a){console.log(n)}
 //8. Check if an Element Exists
 //Write a function to check if a given value exists in an array.
 /**method -1 using for of loop */
 let checkElement=(ele,arr)=>{ for(element of arr){
     if (element==ele){return `${ele} is present`}
     }return `${ele} is not present`}    
 console.log(checkElement(10,a))  
 /**method-2 using indexOf() method
  * This method can be used to find the index of
  *  the first occurrence of the search element 
  * provided as the argument to the method. 
 */
var element=80
  if(a.indexOf(element)>=0){console.log(`${element} is present in array`)}
  else{console.log(`${element} is not present in array`);}

 //9. Copy an Array
 //Create a copy of an array and print it.
 /**method-1 using spread operator(...) */
 a1=[...a]
 console.log('a1=',a1);
 /**method-2 using slice()*/
a2=a1.slice()
console.log('a2=',a2)
/**method-3 using .concat()*/
console.log('a3=',a3=[].concat(a2))
 //10. Convert Array to String
 //Convert an array to a string using .join() and print the result.
 var a4
 console.log('a4=',a4=a3.join());
 
 /**method2 using toString*/
let a5=a3.toString()
console.log('a5=',a5);