#!/usr/bin/env node
'use strict'

// Example array
const nums = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]

// Find the sum of all elements in an array using anonymous arrow function
const sum = nums.reduce((prev, curr) => prev + curr)
console.log(sum)

// 1.  Find the sum of all elements in an array using named arrow function
// CODE ALONG CODE GOES HERE

// Find the largest of all elements in an array using anonymous arrow function
const largest = nums.reduce((prev, curr) => prev > curr ? prev : curr)
console.log(largest)

// 2.  Find the largest of all elements in an array using named arrow function
// CODE ALONG CODE GOES HERE

// 3.  Find the total number of days in fridge for all the food in the fridge
// using anonymous arrow function
// start the count with 0
const fridge = // eslint-disable-line no-unused-vars
[
  { food: 'Carrots', daysInFridge: 32 },
  { food: 'Onions', daysInFridge: 23 },
  { food: 'Bell Peppers', daysInFridge: 16 },
  { food: 'Soda', daysInFridge: 7 },
  { food: 'Pizza', daysInFridge: 4 },
  { food: 'Cake', daysInFridge: 3 }
]

// CODE ALONG CODE GOES HERE
