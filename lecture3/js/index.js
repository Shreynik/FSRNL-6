var add = function (num1, num2) {
    return num1 + num2;
};
// let myAns : () => number;
// myAns = add;
// Error
//  myAns accepts a type of funtion
// where there are no parameters
// and return value is number
// but add function do accept two parameters
var rightAns;
rightAns = add;
// No error
// The type of funtion rightAns accept
// is same as the type of add function 
// The return type of this function
// is never because it never returns
// anything
var generateError = function () {
    throw { message: "Something went wrong" };
};
console.log(generateError());
