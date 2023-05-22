//In realtime our business logic will go according to the data only
/*
JavaScript has 8 Datatypes
1. String
2. Number
3. Bigint
4. Boolean
5. Undefined
6. Null
7. Symbol
8. Object
 */

/*
note:single variable holds single value at a time.
1. String
note:single variable holds single value eg:-let carName1 = "Volvo XC60"; (how we know wether the varibale hold single value or multible values )if it holds multibale values seperated with (comma operator).
                                          eg let carName1 = "Volvo XC60" ,"lokesh" (here two values are present 1)"Volvo XC60" 2)"lokesh" it hold only onevalue it is not possible to hold two value)								  
2. Boolean	-->boolean data types are fixed(it consit only true or false only)
3.Number -->(it consist decimal or float values) eg:a=10, b=20.5 */

//1. String
let carName1 = "Volvo XC60";
console.log(carName1);
//2.Boolean--Booleans are often used in conditional testing.
let x1 = true;
let x2 = false;
//3.Number
// With decimals:
let c1 = 34.0;
// Without decimals:
let c2 = 34;

//note:single variable holds single value at a time to overcome this (single variable holds multible values) we use array and object
/*inside array we can pass all data types (which is supported by js (number,boolean,sring,array,object,date,null,undefine)
An array can hold many values under a single variable name (the value are sperated with comma operator), and you can access the values by referring to an index number.
for acess each and array value we use index number ,index number start from 0
we use Looping Array Elements for acess all array 
object is parent (array is a (child) array is a one  part in  object)
Arrays are a special kind of objects, with numbered indexes.

*/
const fruits = ["Banana", "Orange", "Apple"];

//5.objects
//JavaScript objects are written with curly braces {}.
//Object properties are written as name:value pairs, separated by commas.
//inside object we can pass all data types (which is supported by js (number,boolean,sring,array,object,date,null,undefine)
/*
The Difference Between Arrays and Objects
In JavaScript, arrays use numbered indexes.  

In JavaScript, objects use named indexes.
When to Use Arrays. When to use Objects.
JavaScript does not support associative arrays.
You should use objects when you want the element names to be strings (text).
You should use arrays when you want the element names to be numbers.

*/
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue",
};
//null data type
const null1 = null; //(nuull is false)
//undefined data type
let data1; //data1 is undefined (it is not hodling any value) it is empty.

//next class we will discuss about data type deeply
//array
//object
//when to use array and object and string and number and boolean and null and undefined
//how to find path for array or object (dy using dev tools)
//how to check this path is correct or not
//how to know which method or propery we want to use for array or object to complete our task.
