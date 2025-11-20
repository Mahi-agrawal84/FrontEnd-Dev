//Using create
const child={
    greet()
    {
        console.log("hiiii")
    }
}
const child1=Object.create(child);
child.age=24;


//using JSON
const person='{"name":"Akarsha", "age":"20"}'
const jsonObj=JSON.parse(person)//converted to JSON object from String
console.log(jsonObj.name)
const stringObj=JSON.stringify(jsonObj)