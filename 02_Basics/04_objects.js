const NewUser = {}

NewUser.name = "AK"
NewUser.id = 34
NewUser.email = "aditya@newuser.com"

//console.log(NewUser);

//console.log(NewUser.hasOwnProperty('name'));


const course  = {
    coursename:"JS",
    price: "222",
    courseInstructor:"AK"
}

//course.courseInstructor

const{courseInstructor} = course;

console.log(courseInstructor);