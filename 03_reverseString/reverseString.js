// const reverseString = function() {
//     let string = "";
//     let splitStr = string.split("");
//     let reverseArray = splitStr.reverse();
//     let joinArray = reverseArray.join("");
//     return joinArray;
// };

// // Do not edit below this line
// module.exports = reverseString;

const reverseString = function (string) {
    return string.split("").reverse().join("");
  };
  
  module.exports = reverseString;