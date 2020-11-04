
// 1 davaleba
let user={name: "giorgi", age: 25, gender: "male"};
if(user.age<18){console.log("arasrulwlovani")}
else(user.age>18&& user.gender=="male");{console.log("srulwlovani bichi")}

// 2 davaleba
let cars = ["audi","bmw", "lexus", "volkswagen", "ferrary", "porsche"];
for(let i=1; i<6; i++){console.log(cars[i])}


//3 davaleba
var names=["luka", "giorgi", "saba", "nikolozi"]
for (let i=0; i<names.length; i++)
if ( names[i].length > 4){console.log (names[i])}


// 4 davaleba
var data = ["name", "age", 25, 50, "surname", [100, 500] ];
console.log(data[5][1])

// 5 davaleba
var person = {firstname: "john",lastname: "doe",age: 50,eyecolor: "blue"};
console.log(person.eyecolor)


//6 davaleba
var massive=[1, 2, 3, 4, 5,]
for(let i=0; i<massive.length; i++){console.log(massive[i])} 

// 7 davaleba
let numbers = [3, 12, 24, 30, 31, 32, 33];
for (let i = 0; i < numbers.length; i++) 
if (numbers[i] % 2==0) {console.log(numbers[i])}