

const spotifyUser = new Object()

spotifyUser.id = "123abc"
spotifyUser.name = "Anmol"
spotifyUser.isLoggedIn = false

console.log(spotifyUser)

// !nested  object
const regular = {
    email : "anmol@gmail.com",
    name:{
        first: "Anmol",
        last: "Chourasiya"
    }
}

//! merge object

const obj1 = {1:'A',2: 'B'}
const obj2 = {3:'C',4: 'D'}
const obj3 = {5:'E',6: 'F'}

// const obj4 = Object.assign({}, obj1 , obj2 , obj3)

//! another way

const obj4 = {...obj1,...obj2,...obj3}

// console.log(obj4)


//! array of objects
const user = [
    {
        id:1
    },
    {
        id:2
    },
    {
        id:3
    },
]
//! return
console.log(Object.keys(spotifyUser))
console.log(Object.values(spotifyUser))
console.log(Object.entries(spotifyUser))

console.log(spotifyUser.hasOwnProperty("isLoggedIn"))


! object iteration

const person = {
    name: 'John',
    age: 25
};

for (let key in person) {
    console.log(key, person[key]);
}

const obj = {
    name: 'John',
    age: 30
};

for (const [key, value] of Object.entries(obj)) {
    console.log(key + ': ' + value);
}

//! Object Define Property
const User = {
    name: "Vela",
}

Object.defineProperty(User,'gender',{
    value:"Male",
    writable: false,
    enumerable: false,
    configurable: false
});

User.gender = "Female"

console.log(User.gender)
//Output Male
