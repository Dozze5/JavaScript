/**
 * ! ​‌‍‌JavaScript Arrays​
 */

let myArray = [1,2,3,4,5,6]; // * Declaration of array

console.log(myArray);

/**
 * ​‌‍‌𝗢𝘂𝘁𝗽𝘂𝘁 --->
 * ![1,2,3,4,5,6]
 * ? at console screen​
 */

/**
 * Indexing of array
 */


console.log(myArray[2]);

//! output-->
// 3

console.log(myArray['2']);

//! output-->
// 3


// ! ​‌‌‍Dyanamic Array of javascript​


dyanaArr = [1,2,3,"string",{"key":'value'},[1,2,3,]];

console.log(dyanaArr[4]);

/**
 * ! ​‌‍‌Some  Operation of Array​ 
 */

//? .push()

/* -------------------------------------------------------------------------- */
/*                                ⁡⁣⁢⁣Operation ⁡                                  */
/* -------------------------------------------------------------------------- */
let arr = [];

arr.push("banana", "apple", "peach");

console.log(arr);

var len = arr.length;

console.log(len);


console.log(Object.keys(arr));

/* -------------------------------------------------------------------------- */
/*                               Interesting One                              */
/* -------------------------------------------------------------------------- */

array = [];

console.log(array.length);

/**Expexted is zero 0 */
/**Output ---> 0 */

array[5] = "outOfBoundIndex"
console.log(array)

// !Output --->

/* -------------------------------------------------------------------------- */
/*            ​‌‍‌⁡⁢⁣⁢‍[ <𝟱 𝗲𝗺𝗽𝘁𝘆 𝗶𝘁𝗲𝗺𝘀>, '𝗼𝘂𝘁𝗢𝗳𝗕𝗼𝘂𝗻𝗱𝗜𝗻𝗱𝗲𝘅' ]⁡​                   */
/* -------------------------------------------------------------------------- */

console.log(array.length)

// !Output ---> 6

console.log(Object.keys(array));

// !Output ---> 

/* -------------------------------------------------------------------------- */
/*                                   [ '5' ]                                  */
/* -------------------------------------------------------------------------- */


/* -------------------------------------------------------------------------- */
/*                              Array Constructur                             */
/* -------------------------------------------------------------------------- */


var list = new Array(5)

console.log(list.length)

var createList = new Array(6,1,2,3,4);
console.log(createList.length,"\n",createList)

var newList = new Array("Banana", "kela", )
