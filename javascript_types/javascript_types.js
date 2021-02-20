// var a;
// typeof a;

// a= 'Hello world';
// typeof a;

// a = 42;
// typeof a;

// a= true;
// typeof a;

// a = 'null';

// typeof a;

// a=undefined;
// typeof a;

// var a = null;
// (!a && typeof a==="object");

// typeof function a(){

// }==="function";

// function a(b,c){

// }

// a.length;

// console.log(a.length);


// var a= 42;
// typeof a;

// console.log(typeof a);

// type of operator inspect the types of the given value, and always returns one of seven string values

// typeof null === 'object';
// console.log(typeof null);


// var a;

// typeof a;
// console.log(typeof a);

// var b = 42;
// var c;

// b=c;

// console.log(typeof a);
// console.log(typeof b);


// const iLoveJavascript = true;

// var a = 1.07 * 1000 * 1000 * 1000 * 1000* 1000* 1000* 1000* 1000* 1000;
// console.log(a.toString());


// var a={
//     valueOf:function(){
//         return "42";
//     }
// };

// var b = {
//     toString:function(){
//         return "42";
//     }
// };

// var c= [4,2];
// c.toString=function(){
//     return this.join("");
// };


// // console.log(typeof a.valueOf);
// console.log(b.toString());

// var a = new Boolean(false);
// var b = new Number(0);
// var c = new String("");
// var d = Boolean(a&&b&&c);
// d;

// console.log(d);



// var a= "false";
// var b= "0";
// var c= "''";

// var d = Boolean(a&&b&&c);
// console.log(d);



// var a= [];
// var b= {};
// var c =function(){};

// var d=Boolean(a&&b&&c);
// console.log(d);


// var a =42;
// var b= String(a);
// var c ="3.14";
// var d =Number(c);

// console.log(b);
// console.log(d);


// var d = new Date("12-11-21");

// +d;

// console.log(+d);


// var a= "42";
// var b = "0";

// var c= 42;
// var d= 0;

// var one =a+b;
// var two =c+d;

// console.log(one);
// console.log(two);


// function onlyOne(){
//     var sum= 0;
//     for (var i=0; i<arguments.length; i++){
//         if (argument[i]){
//             sum +=arguments[i];
//         }
//     }
//     return sum ==1;

// }


// console.log(onlyOne());


// var a=42;
// var b="abc";
// var c;
// var d= null;

// if (a){
//     console.log("yep");
// }

// while(c){

// }

// var johnh= null;
// var johnm= null;
var victorh= null;
var victorm= null;
var johnh = prompt("Enter John's height in meter: ");
var johnm = prompt("Enter John's weight in kilogram: ");
var victorh = prompt("Enter Victor's height in meters:  ");
var victorm= prompt("Enter Victor's weight in kilograms: ");
var bmiJohn= johnm/johnh*johnh;
var bmiVictor= victorm/victorh*victorh;
console.log("John's BMI is at"+bmiJohn);
console.log("Victors's BMI is at"+bmiVictor);
