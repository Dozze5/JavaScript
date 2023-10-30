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