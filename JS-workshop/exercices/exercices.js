//--------------------------------------------------- EXO 1 ---------------------------------------------------

//- Write a single line comment which says : comments can make code readable


// comments can make code redable 



//- Write a multiline comment which says : comments can make code readable, easy to reuse and informative

/*      comments can make code readable,
                                        easy to reuse and informative */



//-  and declare variables and assign string, boolean, undefined and null data types


var string = "qq"
var boolean = true
var test
var Name = null






//- in variable.js file and use the JavaScript typeof operator to check different data types.

typeof string
typeof boolean
typeof test
typeof Name

//  Check the data type of each variable
string
boolean
// undefined
// null 


//- Declare four variables without assigning values

var firstname
var lastname
var isOnline
var country



//- Declare variables to store your first name, last name, isOnline, country and age(number) in multiple lines
var firstname
var lastname
var isOnline
var country
var age

//- Declare variables to store your first name, last name, marital status, country and age(number) in a single line
var firstname, lastname, isOnline, country, age

// - Declare two variables myAge and yourAge and assign them initial values and log to the browser console like this :
//   I am 25 years old.
//   You are 30 years old.

var myAge = "I am 25 years old"
console.log(myAge)

var yourAge = "you are 30 years old"
console.log(yourAge)






//--------------------------------------------------- EXO 2 ---------------------------------------------------

/*
Figure out the result of the following comparison expression first without using console.log(). After you decide
the result confirm it using console.log():

- 4 > 3 // true
- 4 >= 3 // true
- 4 < 3 // false 
- 4 <= 3 // true
- 4 == 4 // true
- 4 === 4 // true
- 4 != 4 // false
- 4 !== 4 // false
- 4 == '4' // true
- 4 != '4'// false
- 4 === '4' // false 
- 4 !== '4' // false
- (4 > 3) && (10 < 12)// true 
- (4 > 3) && (10 > 12)// true
- (4 > 3) || (10 < 12)// true
- (4 > 3) || (10 > 12)// true
- !(4 > 3) // false
- !(4 < 3) // true 
- !(false) // true
- !(4 > 3 && 10 < 12) // false
- !(4 > 3 && 10 > 12) // true
- !(4 === '4') // true
console.log()
*/

//--------------------------------------------------- EXO 3 ---------------------------------------------------
// fichier : corriger.js
/*
- triangle.js Write a script that prompt the user to enter base and height of the triangle and calculate an area of a
  triangle (area = 0.5 x b x h).
- Write a script that prompt the user to enter side a, side b, and side c of the triangle and and calculate
  the perimeter of triangle (perimeter = a + b + c)
- Get length and width using prompt and calculate an area of rectangle (area = length x width)
 and the perimeter
  of rectangle (perimeter = 2 x (length + width))
- Get radius using prompt and calculate the area of a circle (area = pi x r x r)
  and circumference of a circle
  (circumference = 2 x pi x r) where pi = 3.14
  const pi = 3,14
*/

var base = prompt("base")
var height = prompt("height")
var area = 0.5 * base * height
console.log(area)

var side1 = prompt("side a")
var side2 = prompt("side b")
var side3 = prompt("side c")"
var perimeter = side1 + side2 + side3
console.log(perimeter)


var width = prompt("width")
var length = prompt("length")
var area = width * length
console.log(area)
var perimeter = 2 * (length + width)
console.log(perimeter)


const pi = 3.14
var r = prompt("radius")
var area = pi * r * r
console.log(area)
var circumference = 2 * pi * r
console.log(circumference)


//--------------------------------------------------- EXO 4 ---------------------------------------------------


/*
- Get user input using prompt(“Enter your age:”). If user is 18 or older ,
 give feedback:'You are old enough to drive'
 but if not 18 give another feedback stating to wait for the number of years he neds to turn 18.

- Compare the values of myAge and yourAge using if … else. Based on the comparison and
 log the result to console
  stating who is older (me or you). Use prompt(“Enter your age:”) to get the age as input.
*/

var Age = prompt("Enter your age")
if (Age >= 18) {
  console.log("You are old enough to drive")
}
else {
  console.log("wait until 18 or older")
}

  
}

/*
- Even numbers are divisible by 2 and the remainder is zero.
  How do you check, if a number is even or not ?
*/

var test = 8
console.log(test % 2)



/*
- Write a code which can give grades to students according to theirs scores:
  90-100, A
  70-89, B
  60-69, C
  50-59, D
  0-49, F
- Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
  September, October or November, the season is Autumn.
  December, January or February, the season is Winter.
  March, April or May, the season is Spring
  June, July or August, the season is Summer
*/


var score = prompt("entre your score")
if (score >= 90 && score <= 100) {
  console.log("A")
} else if (score >= 80 && score <= 89) {
  console.log("B")
} else if (score >= 70 && score <= 79) {
  console.log("C")
} else if (score >= 60 && score <= 69) {
  console.log("D")
} else if (score >= 50 && score <= 59) {
  console.log("E")
} else if (score >= 00 && score <= 49) {
  console.log("F")
} else {
  console.log("invalid")
}

var season = prompt("entre your month")
if (month == "September" || month == "October" || month == "November") {
  console.log("Autumn");
} else if (month == "December" || month == "January" || month == "February") {
  console.log("Winter");
} else if (month == "March" || month == "April" || month == "May") {
  console.log("Spring");
} else if (month == "June" || month == "July" || month == "August") {
  console.log("Summer");
} else {
  console.log("invalid month");
}


//--------------------------------------------------- EXO 5 ---------------------------------------------------
/*
- Declare an empty array.


- Declare an array with more than 5 number of elements.
- Find the length of your array use arr.length
- Get the first item, the middle item and the last item of the array.
- Declare an array called mixedDataTypes, put different data types in the array and find the length of the array,
  the array size should be greater than 5.
- Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM,
  Oracle and Amazon.
- Print the array using console.log().
- Print the number of companies in the array.
- Print the first company, middle and last company.
*/

//--------------------------------------------------- EXO 6 ---------------------------------------------------
/*
- Iterate 0 to 10 using for loop, do the same using while and do while loop.
- Use loop to print the following pattern:
  0 x 0 = 0
  1 x 1 = 1
  2 x 2 = 4
  3 x 3 = 9
  4 x 4 = 16
  5 x 5 = 25
  6 x 6 = 36
  7 x 7 = 49
  8 x 8 = 64
  9 x 9 = 81
  10 x 10 = 100


- Use for loop to iterate from 0 to 100 and print only even numbers.
- Use for loop to iterate from 0 to 100 and print only odd numbers.

- Use for loop to iterate from 0 to 100 and print the sum of all numbers.
let i = 0;
let s = 0;
do {
  s+=s
  i++
}
while(i)
- Use for loop to iterate from 0 to 100 and print the sum of all evens
 and the sum of all odds.
- Using the countries array, create an array for countries length'.
  var countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
].

- Use the countries array to create the following array of arrays:
  [
    ['Albania', 'ALB', 7],
    ['Bolivia', 'BOL', 7],
    ['Canada', 'CAN', 6],
    ['Denmark', 'DEN', 7],
    ['Ethiopia', 'ETH', 8],
    ['Finland', 'FIN', 7],
    ['Germany', 'GER', 7],
    ['Hungary', 'HUN', 7],
    ['Ireland', 'IRE', 7],
    ['Japan', 'JAP', 5],
    ['Kenya', 'KEN', 5]
  ]
*/

//--------------------------------------------------- EXO 7 ---------------------------------------------------
/*
- Create an empty object called dog
- Print the dog object on the console
- Add name, legs, color and age properties for the dog object.
- Print name, legs, color and age value from the dog object.
- Set new properties the dog object: breed.
- Find in the users object, the user who have the most skills :
  var users = {
  Alex: {
    email: 'alex@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript'],
    age: 20,
    isLoggedIn: false,
    points: 30
  },
  Asab: {
    email: 'asab@asab.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
    age: 25,
    isLoggedIn: false,
    points: 50
  },
  Daniel: {
    email: 'daniel@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
    age: 20,
    isLoggedIn: false,
    points: 40
  },
}
*/
//--------------------------------------------------- EXO 8 ---------------------------------------------------
/*
- Declare a function fullName and it print out your full name.
- Declare a function fullName and now it takes firstName, lastName as a parameter and it returns your full name.
- Declare a function addNumbers and it takes two parameters and it returns sum.
- Declare a function to convert Celsius to Fahrenheit
- Write a function to generate a random number use 
  Math.random: generate a number between min and max
- A volume of a rectangular prism is calculated as follows: volume = length x width x height. Write a function 
  which calculates volumeOfRectPrism.
- Body mass index(BMI) is calculated as follows:
  bmi = weight in Kg / (height x height) in m2. Write a function 
  which calculates bmi. BMI is used to broadly define different
  weight groups in adults 20 years old or older.
  Check if a person is underweight, normal, 
  overweight or obese based the information given below :
    The same groups apply to both men and women.
    Underweight: BMI is less than 18.5
    Normal weight: BMI is 18.5 to 24.9
    Overweight: BMI is 25 to 29.9
    Obese: BMI is 30 or more
*/