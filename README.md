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
