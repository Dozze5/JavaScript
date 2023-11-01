//! destructuring objects

const course = {
    name: "JS",
    price: "999",
    tutor: "Anmol"
}

const {name:nm} = course // destructuring

console.log(nm)

//? JSON

/**
    {
        "name": "Anmol",
        "course": "Javascript" ,
        "price":"999"
    }
 */

    // [
    //     {},
    //     {},
    //     {}
    // ]