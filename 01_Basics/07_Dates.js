// let myDate = new Date();
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toUTCString());
// console.log(myDate.toISOString());
// console.log(myDate.toLocaleString());

// console.log(typeof myDate);

let myCreatedDate = new Date(2023,0,23);
console.log(myCreatedDate.toDateString());

let myTimeStamp = Date.now();
console.log(myTimeStamp);
console.log(myCreatedDate.getTime());

console.log(myCreatedDate.toLocaleString('default', {
    weekday: "long",
}));

