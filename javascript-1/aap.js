// //Question 1
// //alert("Hello World");
// //Interpretation:
// //Alert is a JavaScript function,it throughs a pop up to users.It's used to convey message, instruction or alse to users
// //2
// /*var favouriteFood =("Biryani");
// console.log(favouriteFood);
// */

// //3
// var num1 = 6;
// var num2 =3;
// console.log(num1 + num2);
// console.log(num1-num2);
// console.log(num1*num2);
// console.log(num1/num2);
// console.log(num1%num2);

// /*4
// legal & illegal variable name:
// A letter, dollar sign($), or underscore (_) must make up the first character. A number cannot be the initial character.

// Any letter, number, or underscore can complete the variable name. You cannot use some characters, such as spaces, symbols, and punctuation.

// Names of variables are case-sensitive.
// The name of the variable can be of any limit as per your need.

// The name of a variable cannot contain a reserved word in JavaScript.

//  using camelCase be like this ; studentAtSmit
// */

// /*5
// var myNumber =8+(4+5)-2*3;
// document.write(myNumber)

// */
// //Modulus is used to fine the remainder after dividing a number by another,It can be represented by the sign of percent %
// var myNumber = 10;
// var anyNumber = 3 ;
// var result = myNumber % anyNumber;
// console.log(result);

// //post increment
// var num1 = 10;
//  num1++
//  console.log(num1);
//  //pre increment
//  var num1 = 12;
//  ++num1;
//  ++num1;
//  console.log(num1);
//  //concatentating Text strings:
//  /*var firstName ="Faiz";
//  var lastName = "Mahmood";
//  var fullName = firstName +" "+ lastName;
//  console.log(fullName);*/
//  //prompt

// /*var userAge=prompt("Enter your Age");
// console.log(userAge)*/


// //if statements;

// /*var userNumber = prompt("Enter any number");
// var result = userNumber % 2;
// if(result== 0){
//  "Even"
// }else{
//   "Odd"
// }
// alert(result)

// var number = prompt("Enter your marks")

//     if(number > 90) alert("A+")
//     else if(number > 80 ) alert("A")
//     else if(number > 70) alert("B+")
//     else if(number > 60) alert("B")
//     else if(number > 50) alert("Passed")
//     else{
//        alert("You failed")
//     }
  

// // Date 27/02/2024
// // Javascript conditional operators practices
// let age = prompt("Enter your age:");
// let isStudent = prompt("Are you student? (yes/no)").toLowerCase();

// let ticketPrice;

// if (age < 12) {
//     ticketPrice = 5;
// } else if (age => 12 && age <= 18 && isStudent === "yes") {
//     ticketPrice = 8;
// } else if (age >= 12 && age <= 18 && isStudent === "no") {
//     ticketPrice = 10;
// } else {
//     ticketPrice = 12;
// }

// alert("Ticket Price: $" + ticketPrice);
// */
// // Javascript array method Pop, push, shift, unshift, slice, and splice practices

// //CRUD system in Javascript
// //data can be text number pics etc.
// //Boolean data : true false
// //string

// //Adding, removing & Replacing 


// /*method to remove from last index
// arr.pop();

// removing last element;
// arr.shift()
// adding data at the end;
// arr.puch("pls add this")
// element to add on first index;
// arr.unshift(true)


// arr.lenght;is a property
// that tells the total value of anything 

// arr.splice(1,3)
// */


// //#######
// /*var arr =[29,30 ,"Faiz",31,2 <1 ];
// console.log(arr);*/

// /*var arr = [1,2,3,4,5,6,];
// arr.pop();
// console.log(arr)*/


// /*
// var arr = [1,3,3,4,"Ismail"];
// arr.pop();
// console.log(arr)
// */
// /*

// var arr = [1,2,3,4,5,6,7,8,];
// arr.pop()
// console.log(arr)
// */
// /*
// var habibAli = ["Habib","Ali"];
// habibAli.shift()
// console.log(habibAli);*/
// /*
// var faiz = [1,2,3];
// faiz.unshift("Mahmood")
// console.log(faiz)*/
// //[Mahmood,1,2,3]
// /*

// var arr = [1,2,3,]
// arr.pop()
// console.log(arr)
// var rr = [1,3,4,5]
// rr.shift(rr)
// console.log(rr)
// var nn = [3,2]
// nn.unshift('01')
// console.log(nn)


// //push;Add element in last index
// var rra = ["Apple","Orange", "Strawberry","Mango"]
// rra.push("Kiwi")
// console.log(rra)
// //"kiwi" will be added in last index
// //,just after "Mango"


// //USING SPLICE
// var arr = [1,2,3,4,5,6]
// arr.splice(2,1,"faiz");
// console.log(arr)
// //1 faiz ,2,3

// // USES OF Splice to remove multiple values,
// //In this example,habib & mehboob have been removed & added Asim & Talha on their slots
// var arr2 = ["faiz","umair","habib","mehboob","kashif","yasir"]
// arr2.splice(2,2,"Asim","Talha")
// console.log(arr2)
// */

// // slice 

// var arrayOfStudentsName = ["Shehzad", "hashim","Sufiyan","Amla","Shujaat"];

// var slicingStudents = arrayOfStudentsName.slice(1,2);
// console.log("slice", slicingStudents);

