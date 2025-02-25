function greet(callback){
    console.log(callback(4))

}
let fun= a=> a+2
greet(fun)
