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
8.  Create a function that takes an input and returns true if that value is truthy and false it that value is falsy. 
9.  In general, A person's number of imaginary friends are alaays 25% of their total friends. Write a function to calculate this. The output should be a whole number.
10. Write a function to create a sentence. This function should have 3 string parameters. 
11. Create a function *howOld()* thar returns how old some who is currently that age was during that year.
12. Let's write a function that calculate tip given the quality of the service in a restaurant. To this, please consider: ‘bad’ should return a 5% tip, ‘ok’ should return a 15% tip, ‘good’ should return a 20% tip ‘excellent’ should return a 30% tip and all other inputs should default to 18%. To create this function just use 2 parameters.



## JavaScrip Part 2: Object Oriented Programming 

In this part we will check additional aspects and features of JS and start writting more complex programs. In terms of the new topics, we will cover arrays, loops, objects and iterators.

# Arrays

In different programming languagues, Arrays are a way of making list. Lists, in general, allow us to organize data in real life. Arrays can store any data type like strings, number and booleans. Let's see an example

```javascript
let my_first_array = ['element_1', 'element_2', 'element_3'] // array with 3 elements. 
console.log(my_first_array) // print out first array
```
As we saw before, to create an array we just need to add *[,,,]* with different elements within it. Additionally, we have to declare the name of this array. 

But, what happend if we want just pick one element of our fist list. We can do this by using index. Each element in a list has a numbered position (index). In JS, the first elment has the position 0. Let's see how we could access an element in an array. 

```javascript
const famousSayings = ['Fortune favors the brave.', 'A joke is a very serious thing.', 'Where there is love there is life.'];
const listItem = famousSayings[0]; // saving the first elemet of our list 
console.log(listItem) // print the first element of our list
console.log(famousSayings[2]) // print the second element of our list
console.log(famousSayings[3]) // print "undefined" result since there are just 3 element within our list. We're asking for the fourth element. 
```

Let's imagine that we've created one array but, after a couple of minutes, we realized that one of the elements is wrong. As in other programming languagues, here in JS we can also change one elemen within a list. The following example shows this.

```javascript
let groceryList = ['bread', 'tomatoes', 'milk']; // creating a array with three elments
groceryList[1] = 'avocados'; // we want to change the second element
console.log(groceryList) // this will print 'bread','avocados','milk'
```

As seen before, we've created using the *let* keyword. However, we can also create arrays using *const* keyword. In both, we can change specific elements within our array. However, if we use the *const* keyword, this array cannot be reassing a new array.

```javascript
let condiments = ['Ketchup', 'Mustard', 'Soy Sauce', 'Sriracha']; 
const utensils = ['Fork', 'Knife', 'Chopsticks', 'Spork'];

condiments[0] = 'Mayo'  // let's change the first element
console.log(condiments) // it will print 'Mayo','Mustard','Soy Sauce', 'Sriracha'

condiments = ['Mayo'] // the new array will only contain 'Mayo'

utensils[3] = 'Spoon' // let's change the fourth element of our array
console.log(utensils) // Our array will contain 'Fork','Knife','Chopsticks','Spoon'

const utensils = ['Spoon'] // this will print an error since we've declared this variable using const
console.log(utensils)
```
There are severals built-in functions that can be use in arrays. The first one is the *length* function and it helps to determine the number of elements within our list. The function is *push* and it will add new elements to the end of our array. On the other hand, the funcion *pop* removes the last element of our function. Let's see an example

```javascript
const groceryList = ['orange juice', 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains'];

console.log(chores.length) // it will print 7

chores.push('rice','tea') // it will add these two new elements to the end of our array
console.log(chores) // it will print the new array with 9 elements.

groceryList.shift()// remove the first element
console.log(groceryList) // array without 'orange juice'

groceryList.unshift('popcorn') // add 'popcorn' to the beginning of our array 
console.log(groceryList) // the first element will be 'popcorn'

console.log(groceryList.slice(1,4)) //let's select elements from our array. From index 1 to 3 (JS does not consider the fourth element)
console.log(groceryList) // this will print the full array with 9 elements

const pastaIndex  = groceryList.indexOf('pasta') // get the index of the 'pasta' element. 
console.log(pastaIndex)
```

In JS, we can change an array inside a function. When we do this, and if the array is mutated inside the function, the changes will be maintained outside the function as well. Let's see and example.

```javascript
const concept = ['arrays', 'can', 'be', 'mutated']; // see we are using the const keyword
function changeArr(arr){
  arr[3] = 'MUTATED';
}

changeArr(concept);  
console.log(concept)  // it will print ['arrays', 'can', 'be', 'MUTATED']

const removeElement = (newArr) =>{
  newArr.pop()
}
removeElement(concept) 
console.log(concept) // it will print ['arrays', 'can', 'be']
```
Finally, another important concept in this section is *"nested array"*. This concept means that an array is storing other arrays. Examine the example below: 

```javascript
const numberClusters = [[1,2],[3,4],[5,6]]; // three arrays inside one array
const target = numberClusters[2][1] // select the second element of the third array
console.log(target) // it will print 6
```

## Exercise

```javascript

let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];

//1. Remove the last string of the array.
secretMessage.pop()
console.log(secretMessage.length)

//2. Add the words 'to' and 'program' to the end of the array.
secretMessage.push('to','Program')
console.log(secretMessage.length)
//3. Change the word 'easily' to the word 'right'.
secretMessage[secretMessage.indexOf('easily')] = 'right'

//4. Remove the first element of the array.
secretMessage.shift()

//5. Add the new element 'programming' to the beginning of the array.
secretMessage.unshift('Programming')

//6. Remove the strings from 'get' to 'time,' and replace them with the single string 'know',
secretMessage.splice(secretMessage.indexOf('get'),5,'know')
//7. Print the sentence
console.log(secretMessage.join(" "))
```
### Loops

A useful programming tool is the use of loops. A loop repeats a set of instructions until a specified condition is met. When we see that a problem has to repeat a task multiple times, then we will probably write a loop to solve it. This useful tool will help us to write more efficent code in order to automates processes.  

The first, an one of most important element, in loops is the *for* keyword. Inside this keyword, we need to defined three main elements. The first one is the *initialization* which starts the loop and can also be used to declare the iterator variable. The second is the * stop condition * which states the condition that must be met. Last element is an *iteration statement* which is used to update the iterator variable on each loop.

```javascript
for (let counter = 5; counter <= 10; counter++){ // thre main elements "initialization", "stop condition" and the "iterator"
  console.log(counter)
  }
  
// The loop below loops from 0 to 3. Edit it to loop backwards from 3 to 0
for (let counter = 3; counter >= 0; counter--){ // again, we've declared the three main elements.
  console.log(counter);
}
```
We can also iterate over arrays using for loops. To do this we just have consider the length of our array since the loop needs a *stop condition*. Let's see an example.

```javascript
const vacationSpots = ['Bali', 'Paris', 'Tulum'];
for(let i = 0;i < vacationSpots.length; i++){  // We have the three conditions having established a stop condition according to the length of the array.
  console.log('I would love to visit ' +vacationSpots[i])
}
``` 

In some cases we need to add a *for* loop inside another loop. We call that a *nested loop*. We can use this technique to compare elements in two arrays, for example. For each round of the outer for loop, the inner for loop will run completely. 

```javascript
const bobsFollowers = ['Friend_1','Friend_2','Friend_3','Friend_4']; 
const tinasFollowers = ['Friend_1','Friend_3','Friend_5'];
const mutualFollowers = [];
for(let i = 0; i < bobsFollowers.length;i++){
  for(let j = 0;j < tinasFollowers.length;j++){
    if (bobsFollowers[i] === tinasFollowers[j]){
      mutualFollowers.push(bobsFollowers[i])
    }
  }
}
console.log(mutualFollowers)
```
Another type of loop is the *While Loop*. But, what's the difference between *for loop* and *while loop*?. *For loop* is ideal when we know how many times the loop should run. In some cases, we don't know how many times we need to run out program. In that case, a *while loop* is a better choice. Let's see an example.

```javascript
const cards = ['diamond', 'spade', 'heart', 'club'];
let currentCard = 0;
while (currentCard != 'spade'){  // run until we find the card "spade"
  currentCard = cards[Math.floor(Math.random()*4)];
  console.log(currentCard)
}
```
There is another case when we cant to run a code at least once and then loop based on a specific condition. We can do this by using *Do while* statement. This statement says to do a task once and then keep doing it until a specific condition is no longer met

```javascript
const cupsOfSugarNeeded = 2;
let cupsAdded = 0;

do {
 cupsAdded++
 console.log(cupsAdded + ' cup was added') 
} while (cupsAdded < cupsOfSugarNeeded);
```

In some cases we want stop the foor loop when one condition is met. We can do this by adding the *break* keyword inside the *for* loop. Let's check how to do this.

```javascript
const rapperArray = ["Lil' Kim", "Jay-Z", "Notorious B.I.G.", "Tupac"];
for (let i = 0; i < rapperArray.length; i++){
  if (rapperArray[i] === 'Tupac'){
    break;
  }
  console.log(rapperArray[i])
}
console.log("are the best. So if you didn't know, now you know.")
```

In some cases, typing the same *for* keyword over and over can be exhausting. ES6 version of js instroduced a shorter and more concise structure of *for* loops called *for...or* loop. Let's see the differecentes between them. 

```javascript
// for loop
const hobbies = ['singing', 'eating', 'quidditch', 'writing'];
for (let i = 0; i < hobbies.length; i++) {
  console.log(`I enjoy ${hobbies[i]}.`);
// for...of loop 
const hobbies = ['singing', 'eating', 'quidditch', 'writing'];
for (const hobby of hobbies) {
  console.log(`I enjoy ${hobby}.`);
}
}
```
Let's see another example.
```javascript
const strangeBirds = ['Shoebill', 'Cockatrice', 'Basan', 'Terrorbird','Parotia','Kakapo'];
for (const bird of strangeBirds) {
  if (bird === 'Basan'){ 
    break; 
  }
  console.log(bird);
}

// in some cases *for...of* loop 

const nums = [1, 2, 3];
for (let i = nums.length - 1; i >= 0; i--) {
  console.log(nums[i]);
}
console.log('Time is up!');
```
### Objects

One of most fundamentals data types in JS are objects. Objects allow us to the model real-world-things or we can use them to build data structures that make our web possible.
Objects in JS store data and functions that can perform several tasks. In this seccion we will cover in detail the main aspects of objects and we will understand the mechanics of them. 

To create an object in JS we just have declare the name of the object + *{}* (curly braces). Inside our object, we can store unordered data. This data must be organized into key-value pairs. But, what is a key? A key is a variable name that points to a location in memory that holds a value. Given this, to add key-value paris we just have write the key'sname followed by a colon and then the value. Let's see an example

```javascrit
let fasterShip = {
  'Fuel Type':'Turbo Fuel',  // The property 'Fuel Type' has quotation marks because it has a space.
  color: 'silver'
};
```
To access to the properties and methods. We just have to call the name of object + *.* + the property. See the code below.
```javascript
let spaceship = {
  homePlanet: 'Earth',
  color: 'silver'
};
spaceship.homePlanet; // It will return 'Earth',
spaceship.color; // It will Return 'silver',
```

Another way to acess a key's values is by using *[]*. As we saw earlier, we can use bracket to obtain elements from an array. However, we can also use this method to obtain the properties of our objects.
```javascript
let spaceship = {
  'Fuel Type' : 'Turbo Fuel',
  'Active Mission' : true,
  homePlanet : 'Earth', 
  numCrew: 5
 };
let propName =  'Active Mission';
// Write your code below
let isActive = spaceship['Active Mission'];
console.log(spaceship[propName])
```

Using objects, we can not only select some properties but we can also update, add or delete values of some properties. Here is an example:

```javascript
let spaceship = {
  'Fuel Type' : 'Turbo Fuel',
  homePlanet : 'Earth',
  color: 'silver',
  'Secret Mission' : 'Discover life outside of Earth.'
};
spaceship.color = 'glorious gold' //update the value of the property color
spaceship.numEngines = 10 // add a new property-value
delete spaceship['Secret Mission']; // remove the propertie 'Screte Mission'
```
In some cases, we want to store a function inside our object. This is what we called a *method*. In objects, a property is what an object has, while a method is what an object does. 

```javascript
let retreatMessage = 'We no longer wish to conquer your planet. It is full of dogs, which we do not care for.';

const alienShip = {
  retreat: function () {
    console.log(retreatMessage) // if we call the method retreat, show the retreatmessage
  },
  takeOff: function () {
    console.log('Spim... Borp... Glix... Blastoff!') // if we call the method takeoff print this message
  }
}
alienShip.retreat()
alienShip.takeOff()
```

With this we realize that every time we use *console.log()* we are calling the *console* object and the *log* method. In some real applications, objects are often nested, this means that one object could have another object as a property. 

```javascript
let spaceship = {
  passengers: null,
  telescope: {
    yearBuilt: 2018,
    model: "91031-XLT",
    focalLength: 2032 
  },
  crew: {
    captain: { 
      name: 'Sandra', 
      degree: 'Computer Engineering', 
      encourageTeam() { console.log('We got this!') },
     'favorite foods': ['cookies', 'cakes', 'candy', 'spinach'] }
  },
  engine: {
    model: "Nimbus2000"
  },
  nanoelectronics: {
    computer: {
      terabytes: 100,
      monitors: "HD"
    },
    'back-up': {
      battery: "Lithium",
      terabytes: 50
    }
  }
}; 

const capFave = spaceship.crew.captain['favorite foods'][0] // select the firt favorite food of the captain
spaceship.passengers = [{name: 'passenger_1'}] // add a new passenger
const firstPassenger = spaceship.passengers[0] // create a new variable and store the passenger's name. 
```

In JS objects are passed by reference. When we pass a variable assigned to an object into a function as a arguemtn, the computer interprets the parameter name as pointing to the sape in memory. This means that the function will mutate the object permanently. 

```javascript
let spaceship = {
  'Fuel Type' : 'Turbo Fuel',
  homePlanet : 'Earth'
};

let greenEnergy = obj => {
  obj['Fuel Type']= 'avocado oil' // update the value of the 'Fuel Type' property
}
let remotelyDisable = obj =>{
  obj['disabled'] = true  // add a new property with the value true
}
greenEnergy(spaceship)
remotelyDisable(spaceship)
console.log(spaceship) // it will print 'Fuel type','homePlanet','disabled'
```
In objects, we can also use *for* loops to iterate over an object. Let's see an example

```javascript
let spaceship = {
    crew: {
    captain: { 
        name: 'Lily', 
        degree: 'Computer Engineering', 
        cheerTeam() { console.log('You got this!') } 
        },
    'chief officer': { 
        name: 'Dan', 
        degree: 'Aerospace Engineering', 
        agree() { console.log('I agree, captain!') } 
        },
    medic: { 
        name: 'Clementine', 
        degree: 'Physics', 
        announce() { console.log(`Jets on!`) } },
    translator: {
        name: 'Shauna', 
        degree: 'Conservation Science', 
        powerFuel() { console.log('The tank is full!') } 
        }
    }
}; 

for (let member in spaceship.crew) {
  console.log(member+': ' + spaceship.crew[member].name) // it wil print the charge of each member + member's name 
}

for (let member in spaceship.crew){
  console.log(spaceship.crew[member].name + ': ' + spaceship.crew[member].degree ) // names + degree
}
```

### Advanced Objects

As we previously, we can create methods inside objetcts like the object *console.* and the method *log*.  Now,  what if we want to add a new method to our object that prints the value of a property? Can we do that?. Yes, we can do this by adding the keyword *this. Let's see an example.

```javascript
const robot = {
  model: '1E78V2',
  energyLevel: 100,
  provideInfo(){
    return ('I am ' + this.model + ' and my current energy level is ' + this.energyLevel+'.') //using the this keyword to call each property
  }
};
console.log(robot.provideInfo()) // it will return the sentence with model and energylevel values.
```
In this case, we have to consider that we cannot use arrow functions since these functions inherently bind, or tie, an already defined this value to the function itself that is NOT the calling object.

Another important aspect to cover in objects is privacy. In some cases we do not want other code simply accessing or updating a value o property. Sadly, JS does not have any feature to block properties or values. However, JS developers use a common convention *_* (underscore) to say that the property should not be altered. Here’s an example of using _ to prepend a property.

```javascript
const robot = {
  _energyLevel: 100,
  recharge(){
    this._energyLevel += 30;
    console.log(`Recharged! Energy is currently at ${this._energyLevel}%.`)
  }
};
robot.recharge() // it will print "Recharged! Energy is currently at 130%." 
// If we change _energyLevel: 'high'
// _energyLevel: 'high'
// it will print "Recharged! Energy is currently at high30%."
``` 



```
