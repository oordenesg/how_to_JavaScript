// Context: The company that you work for suspects that credit card distributors have been mailing out cards that have invalid numbers. 
//In this project, you have the role of a clerk who checks if credit cards are valid. Every other clerk currently checks using pencil and paper 
// but you’ll be optimizing the verification process using your knowledge of functions and loops to handle multiple credit cards at a time. 
// Unlike the other clerks, you can spend the rest of your time relaxing! As you progress through the steps, use the terminal and console.log() 
// statements to check the output of your loops and functions

// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8];
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9];
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6];
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5];
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6];

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5];
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3];
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4];
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5];
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4];

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4];
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9];
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3];
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3];
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3];

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5];


//1. Create a function, validateCred() that has a parameter of an array. The purpose of validateCred() is to return true when an array contains digits of a valid credit card number and false when it is invalid. This function should NOT mutate the values of the original array. To find out if a credit card number is valid or not, use the Luhn algorithm. Generally speaking, an algorithm is a series of steps that solve a problem — the Luhn algorithm is a series of mathematical calculations used to validate certain identification numbers, e.g. credit card numbers.

const validateCred = (arrayInp) =>{
  numbers = [];
  for(let i = arrayInp.length-1; i>=0;i--){
    if((arrayInp.length)%2===0){
      if((i-1)%2 !=0){
        numbers.push(arrayInp[i]*2)
      }else{
        numbers.push(arrayInp[i])
      };
    }else if((arrayInp.length)%2 !=0){
      if((i-1)%2 ===0){
        numbers.push(arrayInp[i]*2)
      }else{
        numbers.push(arrayInp[i])
      }
    };
  }
  const checknumb = numbers.map(num =>{
    if (num > 9){
      return num-9
    }else {
      return num
    }
  })
  let sumArray = checknumb.reduce((a,b)=>a+b,0);
  if(sumArray%10 ===0){
    return true
  }else{
    return false
  }
}

console.log(validateCred(valid1))
console.log(validateCred(valid2))
console.log(validateCred(valid3))
console.log(validateCred(valid4))
console.log(validateCred(valid5))

console.log(validateCred(invalid1))
console.log(validateCred(invalid2))
console.log(validateCred(invalid3))
console.log(validateCred(invalid4))
console.log(validateCred(invalid5))

console.log(validateCred(mystery4))
console.log(validateCred(mystery4))
console.log(validateCred(mystery4))
console.log(validateCred(mystery4))
console.log(validateCred(mystery4))

//2. Create another function, findInvalidCards() that has one parameter for a nested array of credit card numbers. The role of findInvalidCards() is to check through the nested array for which numbers are invalid, and return another nested array of invalid cards.

const findInvalidCards = (nestedArray) =>{
  let invalidCards = [];
  for(i =0;i < nestedArray.length;i++){
    if(validateCred(nestedArray[i])===false){
      invalidCards.push(nestedArray[i])
    }
  }
  return invalidCards
}

//3. After finding all the invalid credit card numbers, it’s also necessary to identify the credit card companies that have possibly issued these faulty numbers. Create a function, idInvalidCardCompanies() that has one parameter for a nested array of invalid numbers and returns an array of companies.
// Currently, there 4 accepted companies which each have unique first digits. The following table shows which digit is unique to which company:
// 3 - Visa; 4 - American Express; 5 - Mastercard; 6 - Discover

const idInvalidCardCompanies = (nested_array)=>{
  let companies = [];
  var invalid_cards = findInvalidCards(nested_array);
  for(i = 0; i<invalid_cards.length;i++){
    if(companies.includes(invalid_cards[i][0])===false){
      companies.push(invalid_cards[i][0])
    }
  }
  if(companies.length === 0){
    return 'Company not found'
  } else{
    for(i = 0; i <companies.length;i++){
      if(companies[i]===3){
        companies[i] = 'Visa'
        }else if(companies[i]===4){
          companies[i] = 'Amex (American Express)'
        }else if(companies[i]===5){
            companies[i] = 'Mastercard'
        }else if(companies[i]===6){
            companies[i] = 'Discover'
            }
          }
      }
    return companies
}

console.log(idInvalidCardCompanies(batch))


