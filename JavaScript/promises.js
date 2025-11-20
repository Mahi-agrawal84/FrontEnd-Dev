//PROMISES
function a()
{
    return new Promise((resolve)=>{
        //now this is asynchronus, so we can use all 3states: resolve,desolve,
        console.log("First")
        resolve()
    })
}
function b(){
    return new Promise((resolve)=>{
        console.log("Second")
        resolve()
    })
}
function c(){
    return new Promise((resolve)=>{
        console.log("Third")
        resolve()
    })
}
a()
.then(b)
.then(c)
.catch((err)=>console.log("NOT EXECUTED"))