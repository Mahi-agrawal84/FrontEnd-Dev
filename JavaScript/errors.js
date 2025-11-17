// type of error
// syntax error
//console.log(

// type error
//let d=52
//d.toLowerCase();

//reference error
//console.log(fg);

//uri (uniform resource identifier) error
//console.log("%%ZZZ");
try{
    console.log(10/0)
}
catch(error){
    console.log(error.message);
}
finally{
    console.log("finally block");
}

