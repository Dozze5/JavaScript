# Day 1 JS Challenge

>##  ***JavaScript Array***

**The Array object**, as with arrays in other programming languages, enables storing a collection of multiple items under a single variable name, and has members for performing common *array operations*.

In JavaScript, arrays aren't <ins>primitives</ins> rather 
they are <ins>Daynamic</ins>

### `Characterstics`
* JavaScript arrays are resizable and can contain a mix of different data types

```js
// ! ​‌‌‍Dyanamic Array of javascript​


myArr = [1,2,3,"string",{"key":'value'},[1,2,3,]];

console.log(myArr[4]);

```

* JavaScript arrays are not associative arrays and so, array elements cannot be accessed using arbitrary strings as indexes, but must be accessed using nonnegative integers 

```javascript
console.log(myArr[2]);

//! output-->
// 3

console.log(myArr['2']);

//! output-->
// 3

```

* JavaScript arrays are zero-indexed: the first element of an array is at index 0, the second is at index 1, and so on — and the last element is at the value of the <ins>Array.length-1.</ins>


### `Array Indices`

* It's also possible to quote the array indices (e.g., years['2'] instead of years[2]), although usually not necessary.

```js
let year = [1,2,3,4,5,"yearStr"];

console.log(year[2]) // Valid

console.log(year['2']); // valid

console.log(year['02']) // inValid

```


* The 2 in years[2] is coerced into a string by the JavaScript engine through an implicit <ins>***toString()***</ins> conversion. As a result, '2' and '02' would refer to two different slots on the years object, and the following example could be true:

### `Interesting array property`

- When we assign an value in **array** on a index that is 
<ins>out of bound</ins> the engine will update the <ins>array's length</ins> property accordingly

```js
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

```

- The engine will put \<empty items\> in js Array

### `Array() Constructor`

* The Array() constructor creates Array objects.

- ### Syntax
```js
new Array()
new Array(element0)
new Array(element0, element1)
new Array(element0, element1, /* … ,*/ elementN)
new Array(arrayLength)

Array()
Array(element0)
Array(element0, element1)
Array(element0, element1, /* … ,*/ elementN)
Array(arrayLength)
```
>Note: Array() can be called with or without new. Both create a new Array instance.

### `Array constructor with a single parameter`

- Arrays can be created using a constructor with a single number parameter. 
- When Single Parameter is Passed in `Array()` constructor
and it is an integer with range ***<ins>0 and 232 - 1 (inclusive)***</ins>.

```js
var list = new Array(5)

console.log(list.length)
```

```js
const arrayOfOne = new Array("2"); // Not the number 2 but the string "2"

console.log(arrayOfOne.length); // 1
console.log(arrayOfOne[0]); // "2"
```

### `Array constructor with multiple parameters`

```js
var createList = new Array(6,1,2,3,4);
console.log(createList.length,"\n",createList)
```
```js
const fruits = new Array("Apple", "Banana");

console.log(fruits.length); // 2
console.log(fruits[0]); // "Apple"
```