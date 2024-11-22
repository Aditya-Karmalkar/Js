const score = 100;
const scoreValue = 100.3;

const isLoggedIn = false
const outsideTemp = null;
let userEmail;

const id = Symbol('123');
const anotherId = Symbol('123');

console.log(id === anotherId);

const bigNumber = 233232141414214124n;

console.log(bigNumber);


//Stack (Primitive), Heap (Non-Primitive)

let myName  = 'Aditya';
let anotherName = myName;
anotherName = "Karmalkar";

console.log(myName);
console.log(anotherName);

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne;

userTwo.email = 'aditya@google.com'

console.log(userOne.email);
console.log(userTwo.email);




