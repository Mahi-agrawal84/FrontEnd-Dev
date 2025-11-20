//errors : errors are the problematic mistakes done by the developer 
//types:syntax, type ,reference,URI
//in js error can be handle by using try and catc block 
//try: executing lines 
 // catch : exception '
 //finally :important lines 
 //we can use try and finally block without using catch block 
 // we do not need  multiple try block 
 // we cannot handle exception use finally block

 //Hoisting : it is a behaviour of js where it moves to the declaration of variables ,function , classes. to 
 // the top of thier scope during the com[ilation phase before the code is executed ', all th variable declare using var 
 //will declare undefined .there are two phases : memory phase and execution phase 
 //

/*
let d=12
//d.toLowerCase();
console.log("%%222")
try{
    console.log(10/0)
}
catch(error){
    console.log(error.message);
}
finally{
   console.log("finally block");
}

console.log(a)//reference error 
*/


//variable and function and class  hoisting

//function hoisting 
/*
add();
function add(){
    console.log(10+10)// fully hoisted

}*/
// var value is only undefined ..let and const have nothing  got an reference error \
//TDZ temperor dead zone  eror ane ke or initializtion k bich m jo bhi code likhogewoh tdz hogi

//variable hoisting 
/*
d()//type error//var
d();// d=undefined

var d=function sub(){
    console.log(10-10)
}

console.log(f)//reference error same with const
let f=1


//class hoisting 
const stud1=new Student("palak",20)//Refernce error
stud1.show();//TDZ
*/
// class Student{
//     constructor(name,age){
//         this.age=age
//         this.name=name

//     }
//     show(){
//       console.log(Name: ${this.name}, Age: ${this.age});

//         //console.log("Name"+this.name)
//     }
// }
// const stud1=new Student("palak",20)
// stud1.show()//palak 20

//serialization to deserialization using json object 

//object 2nd way 
// const student={
//     Name:"Palak",
//     Age:20,
//     Id:1234,
//     Department:"CSE"

// }

// we need  class to map real world entities

//on the way object Empty object
// const car=new Object();
// car.brand="KIA"
// car.model="Carnival"
// car.price="7000000"

// //constructor function 
// function bike(name,price)
// {
//     this.name=name
//     this.price=price
//     this.greet=function()
//     {
//         return hi my name is ${this.name}and price is ${price}//intermediate invoke function 
//     }
// }
// // we give const to object  since no one can change the object  
// const bike1= new bike("KIA-Seltos",1200000)