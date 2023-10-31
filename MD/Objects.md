# ⁡⁢⁣⁢JavaScript Objects⁡

## Why should you use it?

```
- Objects are used to store data in a structured way.
- Objects can be used to create reusable code.
- Objects can be used to create complex data structures.
```

## What are Objects?

<font size = "3">Objects are a fundamental data structure in JavaScript. They are collections of key-value pairs, which are used to store and access data. Objects are similar to arrays, but instead of using indexes to access data, they use keys. Keys can be strings, numbers, or symbols. Values can be any data type, including objects. Objects are declared using curly braces, and the key-value pairs are separated by commas. Keys are always followed by a colon, and values can be followed by a comma. Here is an example of an object:</font>

```js
const person = {
  name: 'John',
  age: 30,
  gender: 'male'
};
```
<br>

## Object Definition
<font size = "4">Objects are collections of properties, and a property is an association between a name (or key) and a value. A property's value can be a function, in which case the property is known as a method. In addition to objects that are predefined in the browser, you can define your own objects.</font>
```js
const myObject = {
  name: 'John',
  age: 30
};

console.log(myObject);
```

<br>

## Accessing Properties
<font size = "4">Properties can be accessed using dot notation or bracket notation</font>

```js
const myObject = {
  name: 'John',
  age: 30
};

console.log(myObject.name); // John
console.log(myObject['age']); // 30
```
<br>

## Adding Properties
<font  size = "4">To add a new key-value pair to an object, we use dot notation or bracket notation. Here is an example of adding a new key-value pair to an object:</font>

```js
const myObject = {
  name: 'John',
  age: 30
};

myObject.location = 'New York';
myObject['country'] = 'USA';

console.log(myObject);
```
<br>

<font size = "4">To delete a key-value pair from an object, we use the delete keyword. Here is an example of deleting a key-value pair from an object:</font>

```js
const myObject = {
  name: 'John',
  age: 30
};

delete myObject.age;

console.log(myObject);
```

<br>

## Object Properties

<font size = "4">In JavaScript, objects can contain properties that can be accessed and modified. The properties of an object are defined as a name-value pair. The name is a string that is used to access the value. The value can be of any type, including functions, arrays, and other objects. Properties are typically added to an object when it is created, but they can also be added or removed at any time. To access a property of an object, use the dot notation: objectName.propertyName To set a property of an object, use the assignment operator: objectName.propertyName = value To delete a property of an object, use the delete keyword: delete objectName.propertyName Here is an example of an object with two properties:</font>

```js
const person = {
  name: 'John',
  age: 30
};

console.log(person.name); // 'John'
console.log(person.age); // 30

person.name = 'Jane';
person.age = 25;

console.log(person.name); // 'Jane'
console.log(person.age); // 25

delete person.age;

console.log(person.age); // undefined
```

<br>

## Object Iteration
<font size = "4">Iterating over objects is a common task in JavaScript. It can be done in several ways. One of the most popular ways is to use the for...in loop. This loop will iterate over all of the properties of an object and return the key-value pairs.</font>

```js
const person = {
  name: 'John',
  age: 25
};

for (let key in person) {
  console.log(key, person[key]);
}
```
<br>

## Object Keys

<font size = "4">o find out what keys an object has, you can use the Object.keys() method. This method takes an object as an argument and returns an array containing the object's keys.</font>

```js
const person = {
  name: 'John',
  age: 30,
  city: 'New York'
};

console.log(Object.keys(person));
// Output: ['name', 'age', 'city']
```

<br>

## Object Values

<font size = "4">In JavaScript, an object is a collection of key-value pairs. The values can be of any type, including numbers, strings, booleans, arrays, functions, and even other objects. The key is a unique identifier.

Values can be accessed and modified using dot notation or bracket notation. </font>

## Object Define Properties

<font size = "4">The Object.defineProperty() method is used to add a single property to an object, or to modify the attributes of an existing property of an object. The syntax for Object.defineProperty() is as follows:</font>

><font size = "4"> The first argument of Object.defineProperty() is the object on which to define the property. The second argument is the name of the property to be defined or modified. The third argument is an object that specifies the descriptor for the property being defined or modified. The descriptor object can have the following properties:
>
><b>configurable</b>: This property specifies whether or not the property can be deleted or modified. It is a Boolean value. The default value is false.
>
><b>enumerable</b>: This property specifies whether or not the property can be enumerated in a for-in loop. It is a Boolean value. The default value is false.
>
><b>value</b>: This property specifies the value associated with the property. It can be any valid JavaScript value (number, object, function, etc). The default value is undefined.
>
><b>writable</b>: This property specifies whether or not the property can be modified. It is a Boolean value. The default value is false.
>
><b>get</b>: This property specifies a function that will be called when the property is accessed. The default value is undefined.
>
><b>set</b>: This property specifies a function that will be called when the property is modified. The default value is undefined.</font>

```js
let user = {};
Object.defineProperty(user, 'name', {
  value: 'John',
  writable: true,
  configurable: true
});
```