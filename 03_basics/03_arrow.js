const user = {
    username : "aditya",
    price : 999,

    welcomeMessage: function(){
        console.log(`${this.username} , welcome to the website`);
        // console.log(this);
    } 
}

// user.welcomeMessage()
// user.username = "sam";
// user.welcomeMessage();

// console.log(this);

// const chai  = () => {
//     let username = "aditya"
//     console.log(this);
// }

// console.log(chai());

// const addTwo = (num1, num2) => num1 + num2

// console.log(addTwo(3, 4));
