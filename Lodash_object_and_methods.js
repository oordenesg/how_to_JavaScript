//Lodash

// In this project, you will be implementing some of the most exciting functionality from the widely-popular lodash.js library which provides many methods that add new functionality for numbers, strings, objects, and arrays.

//1.  we need to create an object to contain them. This object will represent our library containing all the functionality we add to it. Create a new variable called _ that is initialized to an empty object.
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
    drop(array,n){
      if(n === undefined){
        n = 1
      } 
      let droppedArray = array.slice(n,array.length);
      return droppedArray
    },
    dropWhile(array,predicate){
      const cb = (element,index) =>{
        return !predicate(element,index,array)
      };    
      let dropNumber = array.findIndex(cb)
      let droppedArray = this.drop(array,dropNumber)
      return droppedArray
    },
    chunk(array,size){
      if(size === undefined){
        size = 1
      }
      let new_array = [];
      for(let i = 0;i < array.length;i += size){
        let new_array = array.slice(i, i + size);
        new_array.push(new_array);
      }
      return new_array
    }
}

// Do not write or modify code below this line.
module.exports = _;
