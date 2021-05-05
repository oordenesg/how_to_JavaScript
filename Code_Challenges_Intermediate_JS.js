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

//9. Write a function isTheDinnerVegan() that takes in an array of food objects and returns a boolean value based on whether or not every item in the array has entirely plant-based origins.

const isTheDinnerVegan = (input1)=>{
  let source = [];
  for(i=0;i<input1.length;i++){
    source.push(input1[i]['source'])
  };
  return source.every(x => x=='plant')
}

const dinner = [{name: 'hamburger', source: 'meat'}, {name: 'cheese', source: 'dairy'}, {name: 'ketchup', source:'plant'}, {name: 'bun', source: 'plant'}, {name: 'dessert twinkies', source:'unknown'}];
console.log(isTheDinnerVegan(dinner))// Should print false

//10. Write a function sortSpeciesByTeeth() that takes in an array of species objects and sorts the array in ascending order based on the average number of teeth that species possesses (numTeeth) . You’ll need to access each object’s .numTeeth property. Feel free to either write a named comparison function, or use an anonymous function for your argument to .sort().

const speciesArray = [ {speciesName:'shark', numTeeth:50}, {speciesName:'dog', numTeeth:42}, {speciesName:'alligator', numTeeth:80}, {speciesName:'human', numTeeth:32}];

const sortSpeciesByTeeth = arr => arr.sort((speciesObj1, speciesObj2) => speciesObj1.numTeeth > speciesObj2.numTeeth)

console.log(sortSpeciesByTeeth(speciesArray))

//11. Write a function, findMyKeys(), that takes in an array of strings which may or may not contain 'keys'. If the keys are in the array, your function should return the index at which they can be found. If they’re not in the array, your function should return -1.

onst findMyKeys = array => {
  if(array.findIndex(x => x=='keys') != -1){
    return array.findIndex(x => x=='keys')
  } else{
    return -1
  }
}
const randomStuff = ['credit card', 'screwdriver', 'receipt', 'gum', 'keys', 'used gum', 'plastic spoon'];

console.log(findMyKeys(randomStuff)) // Should print 4

//12. Write a function, dogFactory(). It should: have 3 parameters: name, breed, and weight (in that order). Then add getters and setters for each of the three properties and change the property names to have an underscore prepended. Finally, add two methods to your object: .bark() which returns ‘ruff! ruff!’ and .eatTooManyTreats() which should increment the weight property by 1.

const dogFactory = (name,breed,weight) =>{
  return{
    _name:name,
    _breed:breed,
    _weight:weight,
    get name(){
      return this._name
    },
    get breed(){
      return this._breed
    },
    get weight(){
      return this._weight
    },
    set name(nameInput){
      this._name=nameInput
    },
    set breed(breedInput){
      this._breed=breedInput
    },
    set weight(weightInput){
      this._weight = weightInput
    },
    bark(){
      return 'ruff! ruff!'
    },
    eatTooManyTreats(){
      this._weight += 1
    }
  }
}

exampleObj = dogFactory('Joe', 'Pug', 27);
console.log(exampleObj.bark())
exampleObj.eatTooManyTreats()
console.log(exampleObj)

//13. Write a function factorial() that takes a number as an argument and returns the factorial of the number. Example: factorial(6) returns 720

const factorial = n => {
  let result = 1;
  for (let i=n; i>0; i--) {
    result *= i;
  }
  return result;
}

factorial(6);

//14. Write a function subLength() that takes 2 parameters, a string and a single character. The function should search the string for the two occurrences of the character and return the length between them including the 2 characters. If there are less than 2 or more than 2 occurrences of the character the function should return 0.
// Examples: subLength('Saturday', 'a'); // returns subLength('summer', 'm'); // returns 2
const subLength = (input1,input2) => {
  let positions = [];
  for(i = 0;i <= input1.length;i++){
    if(input1[i]===input2){
      positions.push(i)
      }
   };
   if(positions.length != 2){
     return 0
   } else{
     return positions[1]-positions[0]+1
   }
}
console.log(subLength('Saturday', 'a')); // returns 6
console.log(subLength('summer', 'm')); // returns 2
console.log(subLength('digitize', 'i')); // returns 0
console.log(subLength('cheesecake', 'k')); // returns 0


//15. Write a function groceries() that takes an array of object literals of grocery items. The function should return a string with each item separated by a comma except the last two items should be separated by the word 'and'. Make sure spaces (' ') are inserted where they are appropriate.
// groceries( [{item: 'Carrots'}, {item: 'Hummus'}, {item: 'Pesto'}, {item: 'Rigatoni'}] );returns 'Carrots, Hummus, Pesto and Rigatoni'
//groceries( [{item: 'Bread'}, {item: 'Butter'}] ); returns 'Bread and Butter'
//groceries( [{item: 'Cheese Balls'}] );returns 'Cheese Balls'
const groceries = input1 =>{
  let elements = [];
  for(i = 0; i<input1.length;i++){
    elements.push(input1[i]['item'])
  }
  if(elements.length === 1){
    return elements.join('')
  } else if (elements ===2){
    return elements.join(' and ')
  } else{
    return `${elements.slice(0,elements.length-1).join(', ')} and ${elements[elements.length-1]}` 
  }

}
groceries( [{item: 'Carrots'}, {item: 'Hummus'}, {item: 'Pesto'}, {item: 'Rigatoni'}] );
groceries( [{item: 'Bread'}, {item: 'Butter'}] );
groceries( [{item: 'Cheese Balls'}] );

