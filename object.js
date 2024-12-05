//syntex of object

// let objectName= {

// key1:"value",
// key2:"value2"

// }


let student ={
    name:"ankit",
    age:18,
    address:"bhopal",
welcome:function(){
    return`HEllo my name is ${this.name} and age is ${this.age}`
}
}

console.log(student.name); // acces

student.gender="male";  // added

console.log(student)

student.age=21;

console.log(student)  // update



console.log(student.welcome ())  
