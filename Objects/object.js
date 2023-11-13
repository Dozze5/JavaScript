
const sym = Symbol("Key")

const Juser = {
    name: "anmol",
    mySum : sym,
    age: 18,
    location: "Bhopal",
    email: "some@gmail.com",
    lastLog: ["Monday" , "Satrurday"]
}

console.log(Juser.email)
console.log(Juser["email"])


console.log(Juser.name)

console.log(typeof Juser.name)




console.log(typeof Juser.mySum.values)
//? look into it


console.log(typeof Juser.mySum)

// console.log(typeof Juser.age)

// console.log(typeof Juser.email)


console.log(typeof Juser.lastLog)

console.log(typeof Juser.lastLog.values)


console.log(Array.isArray(Juser.lastLog))



console.log(typeof sym)


Juser.email = "anmolchourasiya6@gmail.com"

console.log(Juser)

Object.freeze(Juser) 
// ! Will freeze the object from any further modifucation


Juser.greeting = () =>{
    console.log("Hello Juser")
}

Juser.greeting();

Juser.greetingTwo = function() {
    console.log(`Hello ${this.name}`)
}

Juser.greetingTwo();

! console.log(Juser.greetingTwo())
