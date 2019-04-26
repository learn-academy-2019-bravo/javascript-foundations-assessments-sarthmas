# Javascript Foundations Assessments

### Without using Google answer the following:

1. List the data types in Javascript. Indicate which are primitives.

Data types: string, number, boolean, null, undefined, symbol, object
All are primitive except object.

2. What's the difference between =, ==, and === in JavaScript?

Strict equality (===) means values which we are comparing must have the same type. This means "2" will not be equal to 2 ("2"===2 it will return false)

Type converting equality (==) means automatically it will covert the variable to value irrespective of data type; either it is a string or a number.

One equal sign (=) is an arithmetic operator used to calculate values. Arithmetic operators are used to perform arithmetic between variables and/or values.

3. What is the difference between an array's index and length?
An array's index is the set of numbers indicating the position of each character in the array.  The first item in the index is always at index number zero.  The length of an array is the number of items in the array.  The length of an array will be equal to the total number of items in the index plus one (because index starts at zero and length starts at one).

4. What are the three parts of a for loop?
Java for loop statement has three parts: initialization sets a loop control variable to an initial value. condition is a Boolean expression that tests the loop control variable. The third part is the iteration through the loop.

5. What is a function's declaration, argument, and call?
A function's declaration defines a function's name, return type, and parameters.
A function's argument is the variable passed into the function.
Calling a function is running it with the specified variable in it and getting the intended result to occur.

6. What are the three main steps in saving work to github?
git add .
git commit -m"message"
git push

7. What is the terminal command to move directories?
cd

8. Do you have a suggestion for a Check In question?
Do you prefer mac or PC?  

9. What was your favorite topic this week?
Discussion of JSON - starting to understand this database language and how information can be pulled from APIs.  I liked the lecture on how the internet works.

10. What was your "A-ha!" moment this week?
APIs are generally all written in JSON which makes the data compatible for aggregation and use in other applications.

### Stretch: The following questions are potential interview questions. First, try to answer each question on your own then Google the answer to further your knowledge.

1. Look at this Javascript and try to predict, what will the browser's console show?

``` javascript
var text = 'outside'
function logIt(){
    console.log(text)
    var text = 'inside'
}

logIt()
```

2. What is JSON? How does it relate to javascript objects?

3. Describe a closure, what is it good for and how do you recognize one?
