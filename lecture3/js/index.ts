
const add =  (num1 : number, num2 : number): number => {
    return num1 + num2;
  };


// let myAns : () => number;

// myAns = add;

// Error
//  myAns accepts a type of funtion
// where there are no parameters
// and return value is number
// but add function do accept two parameters

let rightAns: (num1: number,num2: number) => number;
rightAns = add;

// No error
// The type of funtion rightAns accept
// is same as the type of add function 



// The return type of this function
// is never because it never returns
// anything
const generateError = () : never => {
    throw { message: "Something went wrong" };
}

// This will print nothing
// Since the function never returns anything
console.log(generateError());


