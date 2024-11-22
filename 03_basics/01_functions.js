// function addTwoNumbers(number1, number2){
//     let result = number1 + number2;
//     return result;
// }

// const result = addTwoNumbers(3,7);
// console.log("Result:", result);

function calculateCartPrice(...num1){
    return num1;
}

console.log(calculateCartPrice(200,20202,20201,201010101));


const myNewArray = [200, 300, 400, 700, 800]

function returnSecondValue(getArray){
    return getArray[4];
}

console.log(returnSecondValue(myNewArray));
