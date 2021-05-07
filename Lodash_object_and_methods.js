//Lodash

// In this project, you will be implementing some of the most exciting functionality from the widely-popular lodash.js library which provides many methods that add new functionality for numbers, strings, objects, and arrays.

//1.  we need to create an object to contain them. This object will represent our library containing all the functionality we add to it. Create a new variable called _ that is initialized to an empty object.
const _ = {
  clamp(number,lower,upper){
    var lowerClampedValue = Math.max(number,lower);
    var clampedValue = Math.min(lowerClampedValue,upper);
    return clampedValue
  },
  inRange(number,start,end){
    if (end === undefined){
      end = start
      start = 0
    }
    if(start > end){
      var temp = end
      end = start
      start = temp
    }
    var isInRange = start <= number && number < end;
    return isInRange
    },
    words(input1){
      return input1.split(' ')
    },
    pad(string,a_length){
      if(string.length >= a_length){
        return string;
      };
      const startPaddingLength  = Math.floor((a_length-string.length)/2);
      const endPaddingLength = a_length - string.length - startPaddingLength;
      const paddedString = ' '.repeat(startPaddingLength) + string + ' '.repeat(endPaddingLength);
      return paddedString
    },
    has(object,key){
      const hasValue = object[key];
      if(hasValue != undefined){
        return true;
      }return false
      return hasValue
    },
    invert(object){
      let invertedObject = {};
      for(let key in object){
        const originalValue  = object[key];
        invertedObject = {originalValue : key};
        };
        return invertedObject;
    },
    findKey(object, predicate){
      for(let key in object){
        let value = object[key];
        let predicateReturnValue = predicate(value);
        if(predicateReturnValue){
          return key;
        };
      };
      undefined
      return undefined

    },
    drop(array,number){
      if(number === undefined){
        return 1
      } let new_array = array.slice(0,number);
      return new_array
    }
}

// Do not write or modify code below this line.
module.exports = _;
