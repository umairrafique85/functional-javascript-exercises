

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
