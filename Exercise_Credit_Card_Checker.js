// Context: The company that you work for suspects that credit card distributors have been mailing out cards that have invalid numbers. In this project, you have the role of a clerk who checks if credit cards are valid. Every other clerk currently checks using pencil and paper, but you’ll be optimizing the verification process using your knowledge of functions and loops to handle multiple credit cards at a time. Unlike the other clerks, you can spend the rest of your time relaxing! As you progress through the steps, use the terminal and console.log() statements to check the output of your loops and functions

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
