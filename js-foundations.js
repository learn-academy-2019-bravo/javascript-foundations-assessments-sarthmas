// Javascript Foundations Assessments

/* 1. Write an anonymous function that takes one argument of type number and
decides if that number is evenly divisble by three or not. If it is, print the number and
"is divisible by three" or, print the number and "is not divisble by three".*/

function divThree(num){
  if (num % 3 === 0) {
    return (num + " is divisible by three.")
  } else {
    return (num + " is not divisble by three.")
  }
}
console.log(divThree(12))

/* 2. Write an object called helloMe. Include your first_name, last_name and at
least two other properties of you. Write a function that returns a description of you.*/

var helloMe = { first_name: "Sarah",
                last_name: "Thomas",
                hair_color: "brown",
                eye_color: "brown" ,
                descriptionMe: function() { return "First Name: " + this.first_name + ", Last Name: " + this.last_name + ", Hair Color: " + this.hair_color + ", Eye Color: " + this.hair_color}
                };

    console.log (helloMe.descriptionMe());



/* 3. Create an array of 5 grocery items. Write a function that returns the first,
middle, and last item as a string.*/

const items = ["apple", "pear", "orange", "milk", "butter"]

function grocery(items){
  return (items[0] + items[2] + items[4])
}
  console.log(grocery(items));

/* 4. Write a function called alphabetSoup that takes an argument of "str" and
return a string with the letters in alphabetical order (ie. learn becomes aelnr).
Assume numbers and punctuation symbols will not be included in the parameter.*/

function alphabetSoup(str){
  var strArray = str.split("")
  strArray.sort()
  return strArray.join("")
  }

console.log(alphabetSoup("hello"));

/* 5. Given the arrays below, write a function animalNums that uses a for loop
to print one value from each array concatenated together.*/

var nums = [9, 5, 88, 2, 5, 42, 57]

var nouns = ["ducks", "elephants", "pangolin", "rhinoceros", "giraffes", "penguins", "llamas"]

// output should be: "9 ducks", etc

function animalNums(nums,nouns){
  let newAr = []
  for(i=0; i < nums.length; i++){
    newAr.push(nums[i] + " " + nouns[i])
  }
  return newAr
}

console.log(animalNums(nums,nouns));

/*6. Create an array of 5 numbers. Write a function that loops
through the array and returns a new array of the numbers multiplied by 5.*/

var arr1 = [1, 5, 7, 3, 10]

function mult5(array){
    let newArr = []
    for(let i = 0; i < array.length; i++){
        newArr.push(array[i] * 5)
    }
    return newArr
}

console.log(mult5(arr1));
