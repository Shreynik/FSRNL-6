// 

// type NumString = number | string;


// number

// string

// boolean

// any

// unknown

// void

// null

// undefined


// let a: NumString = 5;


// a = "shreynik";

// a = ()=>{

// }


// type OwnUser = {
//     name: string;
//     age?: number;
// }

// type AnotherUser = {
//     address?:string
// }

// type CombinedUser = AnotherUser & OwnUser;

// let user: CombinedUser = {
//     name:'shreynik'
// };

// user.age = 25;
// user.address = "sdfsfdsdf";



// type PossibleMode = 'road' | 'air' | 'water' | ( string & {} );

// let mode: PossibleMode = '';





// function test(){

//     console.log(user);
//     return user;
// }



// let usesr = "shreynik";

// const u = test();

// u.filter()

function print(a:string){
    return a;
}

type AddFunc = (a:(num:string)=> string, b:number) => number 


 


// const add: AddFunc = (a, b)=>{
//     return a+b;
// };

// let duplicate: (input:AddFunc) => void;

// const myFunc = (fn: AddFunc) =>{
//     const res = fn(3,2);
//     return res;
// }

// duplicate = myFunc;



// duplicate = add;


// type MyUser = {
//     name: string;
//     getName: (a:number)=>string;
// }

// let user: MyUser = {
//     name: 'shreynik',
//     getName:  function(){
//         return this.name;
//     }
// }

// type myFunc = {
//     description: string;
//     (someArg: string): string;
//   }

// const testFunc: myFunc = function myName(a:string){
//     return a;
// };

// testFunc.description = "Hey this is function"





// const generateError = () => {
//     let i =1;
//     while(i){
//         //do something
//     }
//   };

// class Details {
//     name: string;
//     age: number;
//   ​
//     constructor(n: string, a: number) {
//       this.name = n;
//       this.age = a;
//     }
//   ​
//     print() {
//       console.log(`Name - ${this.name}, age - ${this.age}`);
//     }
// }
//   ​
// const detail = new Details("abc", 20);
//   ​
// detail.name;


// class BadGreeter {
//     name: string;
// }


// const instance = new BadGreeter();


// class Base {
//     k = 4;
// }
   
// class Derived extends Base {
//     constructor() {
//         super();
//         console.log(this.k);
//     }
// }


// class Greeter {
//     public greet() {
//       console.log("Hello, " + this.getName());
//     }
//     protected getName() {
//       return "hi";
//     }
//   }
   
//   class SpecialGreeter extends Greeter {
//     public howdy() {
//       console.log("Howdy, " + this.getName());
//     }
//   }
//   const g = new SpecialGreeter();
//   g.greet();
//   g.getName();


// function testFunc(a: number | string | [] | boolean : myFunc ) : {
//     return any;
// }   


// function testFunc<X>(a: X): X{
//     return a;
// }

// testFunc('shreynik');
// testFunc(5);


// function testFunc<X,Y>(a: X): X|Y{
//     return a;
// }

// testFunc<string, number | string>('shreynik');
// testFunc<number, boolean>(5);

// function testFunc<X,Y>(a: X): string{
//     return `a`;
// }

// testFunc<string, number | string>('shreynik');
// testFunc<number, boolean>(5);

// testFunc<{a:string}, boolean>({
//     a:'shreynk'
// });

interface MyArray<X> {
    name: Array<X>
}

// type MyType  = {
//     age: number;
//     address?:string
// }

// const user: MyArray<MyType> = {
//     name: [
//         {
//         age:25
//     },
//     {
//         age: 26,
//         address:'sdfsf'
//     }
// ]
// }


// const users : {name:string}[] = [{name:'sssss'}]

// const users :Array<{name:string}> = [{name:'sssss'}]


// function getProperty<Type, Key extends keyof Type>(obj: Type, key: Key) {
//     return obj[key];
// }

// // type Myx = {
// //     a:number;
// //     b:number;
// //     c:number;
// //     d:number;
// // }
  
// let x = { a: 1, b: 2, c: 3, d: 4 };
  
// getProperty(x, "a");
// getProperty(x, "m");



function post<X,Y>(url:string, data: X): Promise<Y>{
    return new Promise((resolve,reject)=>{
        fetch('hsdfsdfas').then(res=> res.json()).then(resolve).catch(reject)
    })
}




