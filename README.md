# how_to_JavaScript

JavaScript is primarily know as the languague of most modern web browsers. At the begining it had a bad reputation. However, the languague has continued to evolve and improve. In general, we can say that JS is flexible, powerful and fast programming language. Now, it has been used it a lot for complex web development and beyond.

In JavaScript, the console keyword refers to an object, a collection of data and actions, that we can use in out code.  In the other hand, keywords are words that are built into the JavaScrip languague, so computers will recognize them and treats them specially.

One method that is buil into the console object is the *.log()* method. It is very useful when we want to print values to the console so we can the work that we're doing. For example, if we want to print a number

```javascript
console.log(2); // It shows how to use the keyword log() 
```
In JS there are 7 fundamental data types. Quite similar to other programming languages. Number, String, Boolean, Null, Undefined, Symbol, Object (collections of realted data). The first 6 of them are considered *primitive data types* since they are the most basic data types. This is an example of using *log* with a couple of data types.

```javascript
console.log('JavaScript');
console.log(2011);
console.log('Woohoo! I love to code! #codecademy');
console.log(20.49);
```

In terms of *Arithmetic operators*, JS works with built-in operators that allow us to performe mathematical calculations on numbers. We can use this operators within the *console.log()* function

```javascript
console.log(3 + 4); // Prints 7
console.log(5 - 1); // Prints 4
console.log(4 * 2); // Prints 8
console.log(9 / 3); // Prints 3
```

We can also concatenate strings within the *console.log()* function. Let's see an example:

```javascript
console.log('Hello'+'World');
console.log('Hello'+' World');
```
Every string instance has a property called *length* that stores the number of characters in that string. We can retrieve this information by appending the string with a period. 
```javascript
console.log('Teaching the world how to code'.length);
```

we can do the same using others built-in functions. In the following example we show new keywords.

```javascript
console.log('MyName'.toUpperCase()); // Use .toUpperCase() to log 'MyName' in all uppercase letters
console.log('    Remove whitespace   '.trim()); // Remove the whitespaces
```

In JS, we can also stored variables. Here it is important to declare the keyworkd *var* before the name of the variable. In the following example, we stored two variables with different data types. 

```javascript
var favoriteFood = 'pizza'; // store the string "pizza" to the variable favoriteFood
var numOfSlices = 8;  //store the number 8 to the variable numOfSlices
console.log(favoriteFood);
console.log(numOfSlices);
```

In ES6, the keyword *let* was introduced. This keywords signals that a variable can be reassigned a different value.  Additionally, we can declare a variable using *let* without assigning a value. In this case, the variable will be automatically initialized with a value of *undefined*. 

```javascript
let changeMe = true; 
changeMe = false;
console.log(changeMe); // it will print false 
```
Another important keyword is *const*. The main difference between *let* and *const* is that the latter cannot be changed or reassigned. If you try to reassign a *const* variable, you'll get a *TypeError* 

```javascript
const entree = 'Enchiladas';
console.log(entree);
entree = 'Tacos'; // It will show an error
```
 
We can also concatenate strings using variables. We can use the *+* operator to do this within the *console.log()*. Example: 

```javascript
// Option 1
let favoriteAnimal = 'Dog';
console.log('My favorite animal: ANIMAL');
console.log('My favorite animal:' +favoriteAnimal); // it will print 'My favorite animal: Dog'

// Option 2
let myName ='Oscar';
let myCity = 'Talcahuano';
console.log(`My name is ${myName}. My favorite city is ${myCity}.`);

```

## Exercises

### Exercise 1
Using a temperature in degrees *Kelvin*, try to convert it and then display the temperature in degrees Fahrenheit and Newton. 
```javascript
const kelvin = 293; // variable kelvin is constant
let celsius = kelvin -273;  //  get the tempeture in celsius
let fahrenheit = Math.floor(celsius*(9/5)+32); // get the tempeture in fahrenheit
let newton = Math.floor(celsius*(33/100));

// show the result in the console
console.log(`The tempeture is ${fahrenheit} degrees Fahrenheit.`);
console.log(`The tempeture is ${newton} degrees Newton.`);
``` 
### Exercise 2

How old would you be if you were a dog?

```javascript
const myAge = 29; // enter your current age as a number
let earlyYears = 2; 
earlyYears *= 10.5; 
laterYears = myAge - 2;
laterYears *= 4;
myAgeInDogYears = earlyYears + laterYears;
myName = 'Oscar'.toLowerCase(); // my name in lower case
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years`) //create a sentence using the interpolation method.
```

# Conditional Statements

In this part we will explore how JS make decisions by evaluating conditions. Given this, we will introduce logic into our code. To do this, we will check the most common logical keywords widely used in programming. 

In programming, we can also perform a task based on a condition using an if statement. In JS, the *if* keyword followed by a set of parentheses *()* which is followed by a code block indicated by curly braces {}. Let's see an example.

```javascript
let sale = true;
if (sale){
  console.log('Time to buy!') // if the condition is True, then show the string 'Time to by!'
}
```

If we want to add an *else* statement we just have to add this keyword after the *if* keyword. Take a look at the inclusion of an *else* statement:
```javascript
let sale = true
sale = false;
if(sale) {
  console.log('Time to buy!');
} else{
  console.log('Time to wait for a sale.')
}
```
In some case when, we need to use different types of operators to compare values. These operators are called *comparison operators* and we can add them to evaluate a condition within the *if* statement.
```javascript
let hungerLevel = 7;
if (hungerLevel > 7){
  console.log('Time to eat!') // if hungerLevel is greater than 7, so 'Time to eat!'. Otherwise, 'We can eat later!"
} else{
  console.log('We can eat later!')
}
```
We can use logical operators to add more sophisticated logit to our conditional functions. In programming, there are three logical operators: 
- The *and* operator (&&)
- The *or* operator (||)
- The *not* operator (or we can use the bang operator *!*) 

Let's see an example on how to use these operators.
```javascript
let mood = 'sleepy';
let tirednessLevel = 6;

if (mood === 'sleepy' && tirednessLevel > 8){
  console.log('time to sleep')
} else{
  console.log('not bed time yet')
}
```

Now, let's imagine that we have website and we want to take a user's name to make a personalized greeting. In some situations, the user does not have an account, making the username variable falsy. We can create a process using conditional statement to evaluate this procedure. 

```javascript
let defaultName;
if (username) {   // If username is not falsy let's assign the username variable to defaultName
  defaultName = username;
} else {          // if username is falsy, show the string 'Strange'
  defaultName = 'Stranger';
}
``` 
Instead of using the classic *if else* structure we can also use a short form to evaluate the same procedure. 

```javascript
let defaultName = username || 'Stranger';
```
In general, we can user a *ternary* operator to simplify an *if else* statement. We can do this by changing the actual structure and using the *'?'* and *':'* expressions

```javascript
let isNightTime = true;
if (isNightTime) {
  console.log('Turn on the lights!');
} else {
  console.log('Turn off the lights!');
}

// we can rewrite this using the following structure
isNightTime ? console.log('Turn on the lights!') : console.log('Turn off the lights!');

// Another example
let favoritePhrase = 'Love That!';
favoritePhrase ==='Love That!' ? console.log('I love that!') : console.log("I don't love that!");
``` 

Finally, we can also add more *else* statements to our code by just adding the *else if* statement. Let's see the following code block.

```javascript
let season = 'summer';
if (season === 'spring') {
  console.log('It\'s spring! The trees are budding!');
} else if (season === 'winter'){
  console.log('It\'s winter! Everything is covered in snow.')
} else if (season === 'fall'){
  console.log('It\'s fall! Leaves are falling!')
} else if (season === 'summer') {
  console.log('It\'s sunny and warm because it\'s summer!')
} else {
  console.log('Invalid season.');
}
```

Similar to this structure, we can use the *switch* statement which provides an alternative syntax that is easier to read and write. 
```javascript
let groceryItem = 'papaya';
switch (groceryItem) {
  case 'tomato':
    console.log('Tomatoes are $0.49');
    break;
  case 'lime':
    console.log('Limes are $1.49');
    break;
  case 'papaya':
    console.log('Papayas are $1.29');
    break;
  default:
    console.log('Invalid item');
    break;
}
```

## Exercises

### Exercise 1

In this project we will build the Magic Eight Ball using control flow in JS. Create a function that can answer your questions using your name. If you don't add your name. It should print the answer of your question without your name. 

```javascript
let userName = 'Oscar';
let userQuestion = 'It will rain tomorrow?';
let randomNumber = Math.floor(Math.random()*8);
let eightBall = '';

switch (randomNumber){
  case 0:
    eightBall = 'It is certain'
  case 1:
    eightBall = 'It is decidedly so'
  case 2:
    eigtBall = 'Reply hazy try again'
  case 3:
    eightBall = 'Cannot predict now'
  case 4:
    eightBall = 'Do not count on it'
  case 5:
    eightBall = 'My sources say no'
  case 6:
    eightBall = 'Outlook not so good'
  case 7:
    eightBall = 'Signs point to yes'
}

userName ? console.log(`Hello ${userName}. ${userQuestion}. ${eightBall}`) :
console.log(`Hello!. ${userQuestion}. ${eightBall}`)

``` 

### Exercise 2

Create a program using JS that can help show the number of the runner and the time he or she competes. Remember that there are adult runners (over 18 years of age) and youth runners (under 18 years of age). They can register early or late. Runners are assigned a race number and start time based on their age and registration.

Race number: Early adults receive a race number at or above 1000. All others receive a number below 1000.
Start time: Adult registrants run at 9:30 am or 11:00 am. Early adults run at 9:30 am. Late adults run at 11:00 am. Youth registrants run at 12:30 pm (regardless of registration). But we didn’t plan for runners that are exactly 18! 

```javascript
let raceNumber = Math.floor(Math.random() * 1000);
const registeredEarly = true;
const runnerAge = 18;

if (runnerAge > 18 && registeredEarly){
  raceNumber = 1000
} else {
  raceNumber
}

if (runnerAge > 18 && registeredEarly){
  console.log(`Your race number is ${raceNumber}. You will race at 9:30 am.`)
} else if (runnerAge > 18 && registeredEarly === false) {
  console.log(`Your race number is ${raceNumber}. You will race at 11:00 am.`)
} else if (runnerAge < 18) {
  console.log(`Your race number is ${raceNumber}. You will race at 12:30 pm.`)
} else{
  console.log(`See the registration desk`)
}
```


# Functions

In JS there are several ways to create a function. The most common one is by using a function declaration. A function declaration binds a function to a name, or an identifies. Additionally, all the functions have a block of statements which perform a specific task. 

```javascript
function getReminder(){  // function 1 
  console.log('Water the plants.')
}

function greetInSpanish(){ // function 2
  console.log('Buenas Tardes.')
}

getReminder() // call the function getReminder() to print the message
greetInSpanish() // call the function greetInSpanish() to print the message
```

Previously, we just called functions without inputs. When declaring a function, we also can specify its parameters. With this, we can perform a task using the inputs(s). Let's see an example.

```javascript
function sayThanks(name) {
  console.log('Thank you for your purchase '+ name + '! We appreciate your business.');
}
sayThanks('Cole') // Calling the function with an input (string). The function will print the message with the name of the person. 
```

In some cases, we need to pass a default parameter. It is possible to do this by just adding this defaul parameter. By using a default parameter, we account for situations when an argument isn’t passed into a function that is expecting an argument.

```javascript
function makeShoppingList(item1 = 'milk', item2 = 'bread', item3 = 'eggs'){
  console.log(`Remember to buy ${item1}`);
  console.log(`Remember to buy ${item2}`);
  console.log(`Remember to buy ${item3}`);
}
makeShoppingList() // the console will print milk,bread,eggs
makeShoppingList('soda','chocolate','milk') // the console will print soda,chocolate, milk
```

In some cases, we want to return a value o result from the function. To create a return statement, we use the return keyword followed by the value what we wish to return. This keyword is used within the funcion body and it will help us to no return undefined results. Let's see an example

```javascript
function rectangleArea(width, height) {
  let area = width * height;
}
console.log(rectangleArea(5, 7)) // Prints undefined

// return the area

function rectangleArea(width, height) {
  let area = width * height;
  return area 
}
console.log(rectangleArea(5, 7)) // Prints 35
```
We can also use the return value of a function inside another function. These functions are called *helper functions*. Since each the output of an specific function will help to return a new resultos from a second function. In some cases this makes our code easier to read and debug if necessary. Here's an example.

```javascript
function monitorCount(rows, columns) {
  return rows * columns;
}
function costOfMonitors(rows,columns){
  return monitorCount(rows,columns)*200
}

const totalCost = costOfMonitors(5,4);
console.log(totalCost)
```
Another way to define a function is to use a function expression. This is possible defining a function inside an expression. We can do this just using the function keyword. In a function expression, we can omit the function's name. A function with no name is called an anonymous function. The following code shows an example.
```javascript
const plantNeedsWater = function(day){
  if (day === 'Wednesday'){
    return true
  } else {
    return false
  }
}

plantNeedsWater('Tuesday');
console.log(plantNeedsWater('Tuesday'));
```

In ES6 we can also create a function by using the *arrow function*. Thi is a shorter way to write a function by using *fat arrow* notation *() =>*. Arrow functions remove the need to type out the keyword function every time we need to create a function. Using the last example, we ca rewrite out by using the new notation-
```javascript
const plantNeedsWater = (day) => {
  if (day === 'Wednesday') {
    return true;
  } else {
    return false;
  }
};
``` 

In JS we can also write functions in a more concise way. To do this, we can write a function using the *Consise Body Arrow Functions*. We'll explore a few of these techniques below.

```javascript
// In terms of parameters
// zero parameters
const functionName = () => {};
// one parameter
const functionName = paramOne => {};
// two o more parameters
const functionName = (paramOne,paramTwo) => {};

//In terms of a function body
//single-line block 
const sumNumbers = number => number + number;
// multi-line block
const sumNumbers = number =>{
  const sum = number + number;
  return sum;
}
``` 
Let's see an example of how to convert a function using the *Consise Body* form.

```javascript
const plantNeedsWater = (day) => {
  return day === 'Wednesday' ? true : false;
};

// reconverting this function

const plantNeedsWater = day => day === 'Wednesday' ? true : false;
```

# Scope

Another relevant idea in programming is *scope*. But, what is this?. *Scopes* defines "where variables can be accesed of referenced". In some cases, we can use a variable from anywhere within a specific program. However, there may be some variables that can be accessed in a specific part of your code or in a specific context. In this part, we will cover this concept more in detail.

First of all, it is important to mention another relevant concept called *block*. We can describe a block as a "code found inside a set of curly braces". In general, a block can help us create a structure with a function. Let's see an example

```javascript
const city = 'New York City'; // we've defined a variable outside the function

function logCitySkyline() {  // in this seccion we added a code within a block 
  let skyscraper = 'Empire State Building'
  return 'The stars over the ' + skyscraper + ' in ' + city;
}
console.log(logCitySkyline())
```
In *Scope*, our variables can declare inside or outside the blocks. In global scope, variables are declared outside of blocks. These variables are called *global variables*. We can create a funcion calling these global variables and the function should be able to access to these variables. The following code shows an example. 

```javascript
const satellite =  'The Moon'; // global variable satellite
const galaxy = 'The Milky Way'; // global variable galaxy
const stars = 'North Star'; // global variable start

const callMyNightSky = () => {
  return 'Night Sky: ' + satellite + ', ' + stars + ', and ' + galaxy;
}
console.log()callMyNightSky())
```

On the other hand, when we talk about *block scope* we refer to the creation of variables within the block. This means that these variables will only exist within the function. Given this, if we call these varaibles out of the function, we will get an error from the function. Let's see an example.
When we talk about you we refer to the creation of variables within the block.

```javascript
const logVisibleLightWaves = () => {
  const lightWaves = 'Moonlight'; // creating a variable within the function. This variable will only exist locally
  return console.log(lightWaves)
}

logVisibleLightWaves() // it will print Moonlight
lightWaves // if we call the variable, we will get an error to the console. 
```

In some cases, it is quite overwhelming to have so many global variables which can be easy to get confused. We call this *Scope pollution* and is when we have too many global variables in the global space. This could cause problems in our program. Let's see what happend when we do not use global and local variables correctly. 

```javascript
const satellite = 'The Moon';
const galaxy = 'The Milky Way';
let stars = 'North Star'; // we've defined our variable stars globally

const callMyNightSky = () => {
  stars = 'Sirius'  // where we've defined our variable start again, but locally
	return 'Night Sky: ' + satellite + ', ' + stars + ', ' + galaxy;
};

console.log(callMyNightSky()); 
console.log(stars) // this line will print 'Sirius' but no 'North Star'
```

Finally, it is important to keep in mind the importance of create global and local variables. It makers our code more understandable since it helps our to check which variables are linked with different parts of the program rather than having to keep track all of them. 


## Full Exercise

We've covered a bunch of new topics in JavaScript. Now it is time put all this knowledge in action. The best way to do this is through practice. In exercise, we will cover different topicos that we already checked. 
 
1. Write a function call greetWorld(). This function should have no parameters and return the string 'Hello, World!'.
2. Write a function to check of you can vote or note. Remember, if you are 18 years old or older, you can vote. In this case, this funciton should print *true* otherwise *false*.
3. Write a function to check if two strings are similar or not. Let's call this function agreeOrDisagree(). This function should print 'You agree!' if both strings are the same.
4. Create a function and call it *lifePhase()*. This function should take just one input (age) and must return in which phase of life you are. Be creative with the phase of life. *Hint: if statement*.
5.  Calculate your final grade using a function. Create a funcion called *finalgrade()*. This function should take 3 arguments. It should return an error if any of the three grades are less than 0 or greater than 100. Additionally, it should print if you got an 'A', 'B','C','D','F'.
6.  Create a function called *reportingForDuty()*. This function should have two inputs, rank and lastname, and it should return 'rank lastName reporting for duty!’.
7.  Create a function called *calculateWeight()*. This function should have two parameters, *earthWeight* (number) and *planet* (string). We want to return return a number representing what that Earth-weight would equate to on the planet passed in. For this function, please consider: 'Mercury' weight = earthWeight * 0.378, 'Venus' weight = earthWeight * 0.907, 'Mars' weight = earthWeight * 0.377, 'Jupiter' weight = earthWeight * 2.36, 'Saturn' weight = earthWeight * 0.916.



