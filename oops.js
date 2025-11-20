//OOPS
//INHERITANCE
class person
{
    constructor(name,age)
    {
        this.name=name;
        this.age=age;
    }
    showInfo()
    {
        console.log(`Name:${this.name}, Age: ${this.age}`)
    }
}
class Student extends person
{
    constructor(name,age)
    {
        super(name,age)
    }
}

const stud1= new Student("Akarsha", 20);
stud1.showInfo();