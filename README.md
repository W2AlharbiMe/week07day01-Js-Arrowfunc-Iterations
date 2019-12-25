# Week 07 Day 01 - Fat Arrow Callbacks

## Objectives

By the end of this talk, developers should be able to:

- Convert function expressions to fat arrow functions
- Define callback functions for use with array methods
- Invoke array methods and pass callback functions as the argument

## Arrow Functions

We frequently use `arrow` (sometimes referred to as `fat arrow`) functions as
callbacks (which we will define next).  This is convenient when the callback is
simple and anonymous.

### How to Convert to Arrow Syntax

We can convert an existing JavaScript function to use the arrow syntax with the following steps.

1. Remove the `function` keyword
2. Add a fat arrow (`=>`) between the function parameters  `()` and the opening brace `{`

```js
// Without arrow syntax

const helloWorld = function () {
  console.log('Hello World!')
}

const add = function (num1, num2) {
  return num1 + num2
}

// Using arrow syntax

const helloWorld = () => {
  console.log('Hello World!')
}

const add = (num1, num2) => {
  return num1 + num2
}
```

### Single Expression Implicit Return

Arrow functions bodies that are a single expression have an added benefit, an
implicit return.  This means that arrow function bodies without `{}` return the
value of the expression without needing to use `return`.

```js
// Without arrow syntax
const add = function (x, y) {
  return x + y
}

// Using arrow syntax with an explicit return
const add = (x, y) => {
  return x + y
}

// Using arrow syntax with an implicit return
const add = (x, y) => x + y
```

### Single Parameter

When using the arrow function syntax with a single parameter, then parenthesis are not required.

```js
// Without arrow syntax
const isPositive = function (num) {
  return num > 0
}

// Using arrow syntax with an implicit return value
const isPositive = (num) => num > 0

// Parenthesis aren't required for a single parameter
const isPositive = num => num > 0
```

### Fat Arrow Lab

Complete the lab in [exercises/fat_arrow_lab.js](exercises/fat_arrow_lab.js).

## Callbacks

Along with primitives and reference types, you can also pass in functions
into other functions. A function at the end of the day is just another kind
of object.

A function that is passed to another function is called a _callback_.

```js
const add = function (num1, num2) {
  return num1 + num2
}

const subtract = function (num1, num2) {
  return num1 - num2
}

const doMath = function (num1, num2, operation) {
  return operation(num1, num2)
}

doMath(2,1, add) // 3
doMath(2,1, subtract) // 1
```

This is a *very important term*: What is a *callback*?

A callback is a function that is passed to another function.

### Fat Arrow Functions as Callbacks

We will often use arrow functions as callbacks to take advantage of the implicit return and to signify to other developers that the function is going to be used as a callback.

```js
const add = (num1, num2) => num1 + num2

const subtract = (num1, num2) => num1 - num2

const doMath = function (num1, num2, operation) {
  return operation(num1, num2)
}

doMath(2,1, add) // 3
doMath(2,1, subtract) // 1
```

## Array Iteration Methods

We'll explore the array methods that allow us to test and transform arrays more
simply and consistently, [Iteration
methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#Iteration_methods),
and optionally at the end, we'll model some of these JavaScript Array methods as
functions. Being able to use these methods correctly is our main goal.

There are two main groups of array iteration methods:

1. Those that must process all of the array elements
1. Those that may only process a subset of the array elements

### Processing all array elements

#### Demo: using `forEach`

The
[forEach](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)
method iterates over all of the elements in an array. Unlike a `for` loop, it
cannot be stopped (all elements are processed).  `forEach` returns `undefined`.

From the MDN documentation:

    There is no way to stop or break a forEach() loop other than by throwing an
    exception. If you need such behavior, the forEach() method is the wrong
    tool, use a plain loop instead. If you are testing the array elements for a
    predicate and need a Boolean return value, you can use every() or some()
    instead. If available, the new methods find() or findIndex() can be used for
    early termination upon true predicates as well.

This means that `forEach` is a poor choice for an array operation that may
terminate early.

Complete the exercise in [exercises/for-each.js](exercises/for-each.js).

#### Code along: using `map`

The
[map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
method returns a **new** array the same size as the existing array.  The
elements of the new array are set to the return value of the callback passed to
`map` invoked with the corresponding element from the original array as its
argument (e.g. `newArray[i] = callback(array[i])`).  The array `map` is called
upon is **not** mutated.

Complete the exercise in [exercises/map.js](exercises/map.js).

#### Lab: using `filter`

The
[filter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
method returns a **new** array containing elements from the original array for
which the callback returns `true`.  `filter` uses a predicate callback method to
decide on which elements to add to the new array that it returns. The length of
the new array may be 0 if the callback returned `false` for every element, or
equal to the length of the original array, if the callback returned `true` for
every element in the original array.

Callbacks passed to `filter` should be predicate functions.

Complete the exercise in [exercises/filter.js](exercises/filter.js).

### Processing a subset of the array elements

#### Demo: using `findIndex`

The
[findIndex](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex)
method returns the index of the first element in the array for which the
callback returns true.

Why do we need `findIndex`?  Why not just use
[indexOf](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf)?

Complete the exercise in [exercises/find-index.js](exercises/find-index.js).

#### Code along: using `find`

The
[find](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find)
method returns the first element in the array for which the callback returns
true.

Complete the exercise in [exercises/find.js](exercises/find.js).

#### Code along: using `some`

The
[some](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some)
method return true if the callback returns `true` for any element of the array.

Callbacks passed to `some` should be predicate functions.

Complete the exercise in [exercises/some.js](exercises/some.js).

#### Lab: using `every`

The [every](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every)
method checks to see if all elements of the array meet some test.  The function
used for this should only return `true` or `false`.  This type of function is
often called a predicate.

Callbacks passed to `every` should be predicate functions.

Complete the exercise in [exercises/every.js](exercises/every.js).

### Processing all array elements with an accumulator

#### Code along: using `reduce`

The
[reduce](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce)
method returns a single value from operating on all the values in the array.  It
"reduces" many to one. The original array does not change.

The key to **using** `reduce` properly is to methodically walk-through the
"How reduce works" section at the above link.

Complete the exercise in [exercises/reduce.js](exercises/reduce.js).

### Additional Labs: Dive deeper and build your own array iteration methods

Complete these exercises in [exercises/challenge.js](exercises/challenge.js).

#### Lab: Adding functionality - count

`Array.prototype.length` tells us the number of elements in the array.  But what
if we want to know the number of elements that pass a certain test?

We'll build a function that counts the elements in an array for which a
predicate callback returns `true`.

#### Lab: modeling `forEach`

Write your own `myForEach` method that accomplishes
what `forEach` does.  HINT:  use `for` loop

#### Lab: modeling `map`

Write your own `myMap` method that accomplishes
what `map` does.  HINT:  use `forEach` method

#### Lab: modeling `reduce`

Write your own `myReduce` method that accomplishes
what `reduce` does.  HINT:  use `forEach` method

#### Lab: modeling `filter`

Write your own `myFilter` method that accomplishes
what `filter` does.  HINT:  use `forEach` method

#### Lab: modeling `find`

Write your own `myFind` method that accomplishes
what `find` does.  HINT:  use `findIndex` method

#### Lab: modeling `some`

Write your own `mySome` method that accomplishes
what `some` does.  HINT:  use `findIndex` method

#### Lab: modeling `every`

Write your own `myEvery` method that accomplishes
what `every` does.  HINT:  can we use `findIndex` or `some` method?

## Additional Resources 
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
- https://www.w3schools.com/js/js_array_iteration.asp
- https://www.digitalocean.com/community/tutorials/how-to-use-array-methods-in-javascript-iteration-methods
- https://www.youtube.com/watch?v=Urwzk6ILvPQ
- [Array Methods Explorer](https://codepen.io/sdras/details/gogVRX)
