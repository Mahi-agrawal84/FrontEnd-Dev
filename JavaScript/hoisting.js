// it is a behaviour of javascript where it moves the declaration of variable, functions, and classes to the top of their scope during the compilation phase
// and before the code is executed

// inside hoisting all var keyword  will be declared undefined

// two types of phase
// memory phase-code will execute line by line
// execution phase-all var keyword are assigned

// console.log(a);//reference error
// variable function class hoisting

//function hoisting
//add();//20
//function add(){
    //console.log(10+10)// fully hoisted
//}

// d();// reference error//var
// d(); //d=undefined
// const d=function sub(){ // let const TDZ(temperer dead zone)
//     console.log(10-10)
// }

//variable hoisting
//console.log(f)//reference error same with const
// f=5;

// const stud1=new Student("Mahi",19);//reference error
// stud1.show();//TDZ
//class hoisting
class Student{
    constructor(name,age)
    {
        this.age=age
        this.name=name
    }
    show(){
        console.log(`Name:${this.name},Age:${this.age}`);
        
    }
}
const stud1=new Student("Mahi",19);
stud1.show()//Mahi 19

//object second way
const student={
    Name:"Mahi",
    Age:19,
    ID:1234,
    Department:"CSE"
}