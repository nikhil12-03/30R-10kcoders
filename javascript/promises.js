//1.online food delivery
function orderRecieved(){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{resolve("Order Recieved")},1000)
    })
}

function preparingFood(){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{resolve("Your food is being prepared")},1000)
    })
}

function packingFood(){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{resolve("food is getting packed")},2000)
    })
}

function assigningDelivery(){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{resolve("Assigning Delivery person")},3000)
    })
}

function deliveringFood(){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{resolve("Out for Delivery")},4000)
    })
}

orderRecieved()
.then(res=>{console.log(res);return preparingFood()})
.then(res=>{console.log(res);return packingFood()})
.then(res=>{console.log(res);return assigningDelivery()})
.then(res=>{console.log(res);return deliveringFood()})
.then(res=>console.log(res))

//2.Movie Ticket Booking
function selectingSeats(){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{resolve("Please Select Seats")},2000)
    })
}

function processingPayment(){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{resolve(`Your payment ids being processed
            payment recieved..!`)},3000)
    })
}

function generatingTicket(){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{resolve("Generating your E-Ticket")},1000)
    })
}

function sendingComformation(){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{resolve("A Conformation ticket is sent to the registered mail please check your inbox")},2000)
    })
}
selectingSeats()
.then(res=>{console.log(res);return processingPayment()})
.then(res=>{console.log(res);return generatingTicket()})
.then(res=>{console.log(res);return sendingComformation()})
.then(res=>console.log(res))

//3.Car service center
function carCheckin(){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{resolve("You just got checked-in your car")},1000)
    })
}

function oilChange(){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{resolve("Oil changed")},2000)
    })
}

function engine(){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{resolve("car's engine is getting checked")},3000)
    })
}

function carWash(){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{resolve("car is getting washed")},2000)
    })
}

function finalcheck(){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{resolve("Car is out for Quality check")},2000)
    })
}

carCheckin()
.then(res=>{console.log(res);return oilChange()})
.then(res=>{console.log(res);return engine()})
.then(res=>{console.log(res);return carWash()})
.then(res=>{console.log(res);return finalcheck()})
.then(res=>console.log(res))

//4 Laptop repair servce
function diagnosing(){return new Promise((resolve, reject) => {
    setTimeout(()=>{resolve('Diagnos completed')},3000)
})}

function repair(){return new Promise((resolve, reject) => {
    setTimeout(()=>{resolve('Replacing the faulty parts')},4000)
})}

function update(){return new Promise((resolve, reject) => {
    setTimeout(()=>{resolve('Updating Softwware')},2000)
})}

function test(){return new Promise((resolve, reject) => {
    setTimeout(()=>{resolve('Laptop is under testing')},2000)
})}

function reTurn(){return new Promise((resolve, reject) => {
    setTimeout(()=>{resolve('Laptop returned to the customer sucessfuly')},1000)
})}

diagnosing()
.then(res=>{console.log(res);return repair()})
.then(res=>{console.log(res);return update()})
.then(res=>{console.log(res);return test()})
.then(res=>{console.log(res);return reTurn()})
.then(res=>console.log(res))

//5.Online course enrollment
function availability(){return new Promise((resolve, reject) => {
    setTimeout(()=>{resolve('Checking for course availability')},1000)
})}

function fees(){return new Promise((resolve, reject) => {
    setTimeout(()=>{resolve('Processing course fee')},3000)
})}

function onBoarding(){return new Promise((resolve, reject) => {
    setTimeout(()=>{resolve('Generating enrollment ID for onboarding')},1000)
})}

function stationary(){return new Promise((resolve, reject) => {
    setTimeout(()=>{resolve('sending course materials')},2000)
})}

function lms(){return new Promise((resolve, reject) => {
    setTimeout(()=>{resolve('Granting Access for LMS')},2000)
})}

availability()
.then(res=>{console.log(res);return fees()})
.then(res=>{console.log(res);return onBoarding()})
.then(res=>{console.log(res);return stationary()})
.then(res=>{console.log(res);return lms()})
.then(res=>console.log(res))