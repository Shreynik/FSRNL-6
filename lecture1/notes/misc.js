// const user = {
//     name:'shreynik'
// }

// const anotherUser ={
//     job:'it'
// }

// console.log(user.name)
// console.log(anotherUser.name)

// Object.setPrototypeOf(anotherUser,user);


// console.log(anotherUser.name, Object.getPrototypeOf(anotherUser))

// const a = [10,2,3,4,5];

// console.log(a.slice(1));


Array.prototype.myFunc = function(){
    console.log('shreynik');
}

const a = [10,2,3,4,5];

console.log(a.myFunc());

const user = {
    name: 'shreynik'
};

for(let key in user){
    console.log(key);
}


const myFunc = function(){

    return function(){

        console.log(this.name);
    }
}

const myFunc1 = function(){
    const self = this;
    return ()=>{
    }
}

const makeCounter = (()=>{
    let counter = 0;
    return function(){
      return counter++
    }
  })();

console.log('counter is', makeCounter());
console.log('counter is', makeCounter());


const testfunc = ()=>{
    throw new Error('some error occured');
}


const fetchRestaurants = function(){
    return new Promise((resolve,reject)=>{
        // make a server call

        resolve('res');

    })
}


(async()=>{
    try{
        const result = await fetchRestaurants();
        const offer = result.map();
        this.renderResults = processResults;
    }
    catch(err){
        console.log(err.message)
    }finally{
        
    } 
})()

console.log('shreynik');

alert(5)