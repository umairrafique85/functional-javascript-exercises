

## My solutions to functional Javascript exercises assigned during training at Marketlytics

First time learned JavaScript from CodeAcademy. And NOT fucking adequate to complete these exercises.

### 1

Task

Write a function that takes an input string and returns it uppercased.

Arguments

  * input: a String of random words (lorem ipsum).

### 2

Task

Implement a function that takes a function as its first argument, a number num as its second argument, then executes the passed in function num times.

Use the boilerplate code given to you below to get started. Most/all future exercises will provide boilerplate.

Arguments

  * operation: A Function, takes no arguments, returns no useful value.
  * num: the number of times to call `operation`

### 3

Task

Convert the following code from a for-loop to Array#map:

    function doubleAll(numbers) {
      var result = []
      for (var i = 0; i < numbers.length; i++) {
        result.push(numbers[i] * 2)
      }
      return result
    }
    
    module.exports = doubleAll

Arguments

  * numbers: An Array of 0 to 20 Integers between 0 and 9

Conditions

  * Your solution should use Array.prototype.map()
  * Do not use any for/while loops or Array.prototype.forEach.
  * Do not create any unnecessary functions e.g. helpers.

### 4

Task

Use Array#filter to write a function called getShortMessages.

getShortMessages takes an array of objects with '.message' properties and returns an array of messages that are less than < 50 characters long.

The function should return an array containing the messages themselves, without their containing object.

Arguments

  * messages: an Array of 10 to 100 random objects that look something like this:

    {
      message: 'Esse id amet quis eu esse aute officia ipsum.' // random
    }

Conditions

  * Do not use any for/while loops or Array#forEach.
  * Do not create any unnecessary functions e.g. helpers.

Hint

  * Try chaining some Array methods!

Example

    [ 'Tempor quis esse consequat sunt ea eiusmod.',
      'Id culpa ad proident ad nulla laborum incididunt.',
      'Ullamco in ea et ad anim anim ullamco est.',
      'Est ut irure irure nisi.' ]

### 5

Task

Return a function that takes a list of valid users, and returns a function that returns true if all of the supplied users exist in the original list of users.

You only need to check that the ids match.

Example

    var goodUsers = [
      { id: 1 },
      { id: 2 },
      { id: 3 }
    ]
    
    // `checkUsersValid` is the function you'll define
    var testAllValid = checkUsersValid(goodUsers)
    
    testAllValid([
      { id: 2 },
      { id: 1 }
    ])
    // => true
    
    testAllValid([
      { id: 2 },
      { id: 4 },
      { id: 1 }
    ])
    // => false

Arguments

  * goodUsers: a list of valid users

Use array#some and Array#every to check every user passed to your returned function exists in the array passed to the exported function.

Conditions

  * Do not use any for/while loops or Array#forEach.
  * Do not create any unnecessary functions e.g. helpers.

### 6

Task

Given an Array of strings, use Array#reduce to create an object that contains the number of times each string occured in the array. Return the object directly (no need to console.log).

Example

    var inputWords = ['Apple', 'Banana', 'Apple', 'Durian', 'Durian', 'Durian']
    
    console.log(countWords(inputWords))
    
    // =>
    // {
    //   Apple: 2,
    //   Banana: 1,
    //   Durian: 3
    // }

Arguments

  * inputWords: An array of random Strings.

Conditions

  * Do not use any for/while loops or Array#forEach.
  * Do not create any unnecessary functions e.g. helpers.

### 7

Task

Implement Array#reduce using recursion.

To test your reduction works correctly we will use your reduce implementation to execute our solution to the previous basic_reduce problem. i.e. your reduce function will be passed an array of words, and a function, and an initial value which will return an object containing the counts for each word found in the array. You don't need to implement this functionality, it will be supplied to your reduce implementation.

For simplicity, your implementation of reduce need not replicate the behaviour of a reduce missing an initial value. You may assume the initial value will always be supplied.

Arguments

  * arr: An Array to reduce over
  * fn: Function to use as the reduction step. Like regular Array#reduce, this function must be passed previousValue, currentValue, index and the array we're iterating over.
  * init: Initial value of the reduction. Unlike Array#reduce, this value is required (and you may assume it will always be supplied).

Example

    // Your reduce function should behave the same as a
    // regular Array#reduce, but it will take the array
    // to operate on as the first argument:
    
    reduce([1,2,3], function(prev, curr, index, arr) {
      return prev + curr
    }, 0)
    // => 6

Conditions

  * Do not use any for/while loops.
  * Do not use any Array methods like Array#map or Array#reduce.

# FUCK YEAH!!! NAILED IT!!!

### Official solution (talk about lame, man!)

function reduce(arr, fn, initial) {
      return (function reduceOne(index, value) {
        if (index > arr.length - 1) return value // end condition
        return reduceOne(index + 1, fn(value, arr[index], index, arr)) // calculate & pass values to next step
      })(0, initial) // IIFE. kick off recursion with initial values
    }
    
    module.exports = reduce

### 8

JavaScript implements 'duck' typing. Duck typing is a style of dynamic typing in which an object's methods and properties determine the valid semantics, rather than its inheritance from a particular class or implementation of a specific interface. The name of the concept refers to the duck test, attributed to James Whitcomb Riley, which may be phrased as follows:

  "When I see a bird that walks like a duck and swims like a duck and quacks like a duck, I call that bird a duck"

In JavaScript, in order to write robust programs we sometimes need to check an object conforms to the type that we need.

We can use Object#hasOwnProperty to detect if an object 'has' a property defined on itself (i.e. not inherited from its prototype):

    var duck = {
      quack: function() {
        console.log('quack')
      }
    }
    
    duck.hasOwnProperty('quack') // => true

We didn't give the duck a .hasOwnProperty method, where did it come from?

Duck was created with the {} syntax, and as such it inherits from Object.prototype:

    var object = {quack: true}
    
    Object.getPrototypeOf(object) === Object.prototype // => true
    object.hasOwnProperty('quack')                     // => true

But what if an object doesn't inherit from Object.prototype?

    // create an object with 'null' prototype.
    var object = Object.create(null)
    object.quack = function() {
      console.log('quack')
    }
    
    Object.getPrototypeOf(object) === Object.prototype // => false
    Object.getPrototypeOf(object) === null             // => true
    
    object.hasOwnProperty('quack')
    // => TypeError: Object object has no method 'hasOwnProperty'

We can still use hasOwnProperty from the Object.prototype though, if we call it with the this value set to something that 'looks like an object'. Function#call allows us to invoke any function with an altered this value.

    // the first argument to call becomes the value of `this`
    // the rest of the arguments are passed to the function as per
    
    Object.prototype.hasOwnProperty.call(object, 'quack') // => true

Task:

Write a function duckCount that returns the number of arguments passed to it which have a property 'quack' defined directly on them. Do not match values inherited from prototypes.

Example:

    var notDuck = Object.create({quack: true})
    var duck = {quack: true}
    duckCount(duck, notDuck) // 1

Arguments

  * You will be passed 0-20 arguments. Each argument could be of any type with any properties. Some of these items will have a 'quack' property.

Conditions

  * Do not use any for/while loops or Array#forEach.
  * Do not create any counter/accumulator variables.
  * Do not create any unnecessary functions e.g. helpers.

Hint

  * The `arguments` variable, available in every function, is an *Object* that quacks like an *Array*:

    {
      0: 'argument0',
      1: 'argument1', // etc
      length: 2
    }

