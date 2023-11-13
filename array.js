let arr1 = [1,2,3,4]

let arr2 = [5,6,7,8]

arr1.push(arr2.slice(0,4));

newArr = arr1.concat(arr2)

console.log(newArr)


newArr2 = [...arr1, ...arr2]

console.log(newArr2)


let other = [1,2,3,[3,4,6],7,[7,8,[8,0]]]

let other2 = other.flat(Infinity)

console.log(other2)


let str = "Anmol"

console.log(Array.isArray(str))
console.log(Array.from(str))

console.log(Array.from({name: "anmol"}))
