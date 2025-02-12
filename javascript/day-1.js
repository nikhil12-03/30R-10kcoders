// question-1
function sayHello(){
    console.log("Hello , world.!")
}
sayHello()

// question-2
function displayWarning(){
    console.log("Warning..! System overload..!")
}
displayWarning()

// question-3
function printStatus(){
    console.log("System Status : Active")
}
printStatus()

// question-4
function initialize(){
    console.log("Initialization Complete.")
    shutDown()
}
function shutDown(){
    console.log("System Shutting Down...")
}
initialize()

// question-5
function startProcess(){
    console.log("Process Started.")
    endProcess()
}
function endProcess(){
    console.log("Process ended...")
}
startProcess()

// question-6
function greetUser(name){
    console.log('Hello,',name)
}
greetUser('nikhil')
greetUser('heamnth')
greetUser('yaswanth')

// question-7
function calculateSum(num1,num2){
    console.log('sum of numbers is:',num1 + num2)
}
calculateSum(3,4)
calculateSum(62,80)
calculateSum(62,95)

// question-8
function countDown(){var i;
   for(i=5 ; i>=0; i--){console.log(i)}
}
countDown()

// question-9
function checkEvenOdd(num){
    if (num%2 ==0){console.log("the number is even")}
    else {console.log("number is odd")}
}
checkEvenOdd(465)
checkEvenOdd(462)
checkEvenOdd(466)

// question-10
function beginSession(){
    console.log("Session Started.")
    endSession()
}
function endSession(){
    console.log("Session Ended.")
}
beginSession()