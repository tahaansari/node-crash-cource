console.log(__filename,__dirname)
class Person{
    constructor(name,age){
        this.name = name
        this.age = age
    }
    greet(){
        console.log(`My Name is ${this.name} and i am ${this.age} years old`)
    }
}

module.exports = Person;