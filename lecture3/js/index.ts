// class Details { 
//   readonly name: string;
//   private age: number;

//   constructor(n: string,a: number){
//     this.name = n;
//     this.age = a;
//   }

//   print(){
//     console.log(`Name - ${this.name}, age - ${this.age}`)
//   }
// } 

// const detail = new Details("ABC",20);

// detail.name = "XYZ";
// // Error -> name is set as readonly
// // cannot change its property

// console.log(detail.age);
// Error -> age is set as private
// cannot access it outside class


// interface Details {
//   name: string;
//   age: number;
//   print(n: string,a: number) : void;
// }


// const myDetails : Details = {
//   name: "ABC",
//   age: 20,
//   print(name:string,age:number) : void {
//     console.log(`${name} - ${age}`);
//   }
// }

// console.log(myDetails);

// abstract class Details {
//   name: string;
  
//   constructor(name: string) {
//       this.name = name;
//   }

//   print(): void{
//       console.log(this.name);
//   }
// }

// class Student  extends Details { 
//   age : number;
  
//   constructor(name: string, age: number) { 
//       super(name); // must call super()
//       this.age = age;
//   }
// }

// const record = new Student("ABC",21);
// record.print();
// ABC


interface Detail {   
  name:string  
  age:number  
}  

interface Records extends Detail {   
  rollno: number
}  

let myDetails: Records;
// myDetail should contain
// all properties defined in
//  Detail and Record interfaces

myDetails = {
  name: "ABC",
  age: 20,
  rollno: 5
}

console.log(myDetails);