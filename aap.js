//Question 1
//alert("Hello World");
//Interpretation:
//Alert is a JavaScript function,it throughs a pop up to users.It's used to convey message, instruction or alse to users
//2
/*var favouriteFood =("Biryani");
console.log(favouriteFood);
*/

//3
var num1 = 6;
var num2 =3;
console.log(num1 + num2);
console.log(num1-num2);
console.log(num1*num2);
console.log(num1/num2);
console.log(num1%num2);

/*4
legal & illegal variable name:
A letter, dollar sign($), or underscore (_) must make up the first character. A number cannot be the initial character.

Any letter, number, or underscore can complete the variable name. You cannot use some characters, such as spaces, symbols, and punctuation.

Names of variables are case-sensitive.
The name of the variable can be of any limit as per your need.

The name of a variable cannot contain a reserved word in JavaScript.

 using camelCase be like this ; studentAtSmit
*/

/*5
var myNumber =8+(4+5)-2*3;
document.write(myNumber)

*/
//Modulus is used to fine the remainder after dividing a number by another,It can be represented by the sign of percent %
var myNumber = 10;
var anyNumber = 3 ;
var result = myNumber % anyNumber;
console.log(result);

//post increment
var num1 = 10;
 num1++
 console.log(num1);
 //pre increment
 var num1 = 12;
 ++num1;
 ++num1;
 console.log(num1);
 //concatentating Text strings:
 /*var firstName ="Faiz";
 var lastName = "Mahmood";
 var fullName = firstName +" "+ lastName;
 console.log(fullName);*/
 //prompt

/*var userAge=prompt("Enter your Age");
console.log(userAge)*/


//if statements;

/*var userNumber = prompt("Enter any number");
var result = userNumber % 2;
if(result== 0){
 "Even"
}else{
  "Odd"
}
alert(result)
*/
var number = prompt("Enter your marks")

    if(number > 90) alert("A+")
    else if(number > 80 ) alert("A")
    else if(number > 70) alert("B+")
    else if(number > 60) alert("B")
    else if(number > 50) alert("Passed")
    else{
       alert("You failed")
    }
