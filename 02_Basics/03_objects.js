//Object.create


//Object Literals
const mySym = Symbol("key1");

const JsUser = {
    name: "Aditya",
    [mySym] : "Key2",
    age: 18,
    location: "Pune",
    email: "aditya@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"],
}

// console.log(JsUser["name"]);
// console.log(JsUser[mySym]);

// JsUser.email = "ak@gpt.com";
// //Object.freeze(JsUser);
// JsUser.email = "ak@microsoft.com";
// console.log(JsUser);

JsUser.greeting = function(){
    console.log(`Hello JS User, ${this.name}`);
}

console.log(JsUser.greeting());



