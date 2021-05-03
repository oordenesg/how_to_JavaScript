// In the exercises that follow, you will practice and reinforce your understanding of JavaScript scope, arrays, loops, iterators, and objects.

//1. Write a function, reverseArray(), that takes in an array as an argument and returns a new array with the elements in the reverse order

const reverseArray = (input) =>{
  let new_array = [];
  for(let i = 0;i < input.length;i++){
    new_array[i] = input[(input.length-1)-i]
  };
  return new_array 
}
const sentence = ['sense.','make', 'all', 'will', 'This'];
console.log(reverseArray(sentence)) 

//2. Write a function, greetAliens(), that takes in an array of strings and uses a for loop to print a greeting with each string in the array.

const greetAliens = (input1) =>{
  for (let i = 0; i < input1.length;i++){
    console.log(`Oh powerful ${input1[i]}, we humans offer our unconditional surrender!`)
  }
}
const aliens = ["Blorgous", "Glamyx", "Wegord", "SpaceKing"];
greetAliens(aliens);

//3. Write a function, convertToBaby(), that takes in an array as an argument and, using a loop, returns a new array with each string in the array prepended with 'baby '.
const convertToBaby = (input1) => {
  let new_array = [];
  for(let i = 0; i < input1.length;i++){
    new_array[i] = 'baby ' + input1[i]
  }
  return new_array
}
const animals = ['panda', 'turtle', 'giraffe', 'hippo', 'sloth', 'human'];
console.log(convertToBaby(animals)) 

//4. Write a function declineEverything() that takes in an array of strings and, using .forEach(), loops through each element in the array and calls politelyDecline() with each of them. The .forEach() function should apply politelyDecline() directly; it should NOT merely receive an argument function that uses politelyDecline().You can test your function when you’re ready by passing in the veggies array or by making your own array!. Now we need to get healthy! Write a function acceptEverything() that takes in an array of strings and loops through each element in the array and grudgingly accepts each of them, by logging to the console in the following format: 'Ok, I guess I will eat some [element].'

const veggies = ['broccoli', 'spinach', 'cauliflower', 'broccoflower'];
const politelyDecline = (veg) => {
      console.log('No ' + veg + ' please. I will have pizza with extra cheese.');
};
const declineEverything = (array1) =>{
  array1.forEach(politelyDecline)
};

declineEverything(veggies);

const acceptEverything = (array1) =>{
  array1.forEach(element => console.log(`Ok, I guess I will eat some ${element}.`)
  )
};
acceptEverything(veggies);

//5. Write a function, squareNums(), that takes in an array of numbers and, using .map(), returns an array with the square of each of the elements of that array.

const numbers = [2, 7, 9, 171, 52, 33, 14]
const toSquare = num => num * num

const squareNums = (input1)=>{
  return input1.map(x => toSquare(x))
}
console.log(squareNums(numbers))

//6. Write a function shoutGreetings() that takes in an array of strings and returns a new array. This new array should contain all the strings from the argument array but with capitalized letters and an exclamation point appended to the end: 'heya' will become 'HEYA!'
const shoutGreetings = (array1) =>{
  return array1.map(x => x.toUpperCase()+'!')
}
const greetings = ['hello', 'hi', 'heya', 'oi', 'hey', 'yo'];

console.log(shoutGreetings(greetings)) // Should print [ 'HELLO!', 'HI!', 'HEYA!', 'OI!', 'HEY!', 'YO!' ]

//7. Write a function sortYears() that takes in an array of years, and, using the built-in .sort() method, returns that array with the years sorted in descending order.

const sortYears = (array) => {
  return array.sort(function(a, b){return b-a})
}
const years = [1970, 1999, 1951, 1982, 1963, 2011, 2018, 1922]
console.log(sortYears(years))

//8. Write a function justCoolStuff() that takes in two arrays of strings, and, using the built-in .filter() method, returns an array with the items that are present in both arrays.

const justCoolStuff = (firstArray, secondArray) => firstArray.filter(item => secondArray.includes(item))

const coolStuff = ['gameboys', 'skateboards', 'backwards hats', 'fruit-by-the-foot', 'pogs', 'my room', 'temporary tattoos'];
const myStuff = [ 'rules', 'fruit-by-the-foot', 'wedgies', 'sweaters', 'skateboards', 'family-night', 'my room', 'braces', 'the information superhighway']; 

console.log(justCoolStuff(myStuff, coolStuff))

