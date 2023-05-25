// const pie_value =3.142;

// for loop with updated syntax:

// let colors = ["pink","red",'black',"blue"];
// var element
// for ( element of colors){

//     console.log(element);
// }

// merging array ===

// var Boy_names =["kamran","kumar","hussain","sajjid"];
// let girl_names =["sana","sidra",...Boy_names, "ayesha"];

// for (var myvalue of girl_names){

//     document.write(myvalue+'  ');
// }
// console.log(girl_names);


// function with parameters-------- there is rest parameter concept.
// function sayhello(msg,city){

//     console.log(msg+"=="+city);
// }

// sayhello("hello class sec B","Islamabad");

// function sum(...numbers){

//     let sum =0;

//     for (let i=0;i<numbers.length;i++){

//         sum +=numbers[i];
        
//     }
    
//     console.log("sum:=="+sum);
// }

// sum(10,10,10);


//===========ES6 Class and object examples =========
// function Rectangle(height,width){

//     this.area = function(){

//         return height*width;
//     }
// }



// let square12 = new Rectangle(10,10);
// square12.area()


// class Rectangle {
//   constructor(height, width) {
//     this.height = height;
//     this.width = width;
//   }
//   // Getter
//   get area() {
//     return this.calcArea();
//   }
//   // Method
//   calcArea() {
//     return this.height * this.width;
//   }
// }
//   //object creation here
//   const square = new Rectangle(10, 10);

// console.log(square.area); // 100



//===================Inheritance in javascript ================
// 


/*================== Arrow function ==================
Arrow functions are anonymous functions (the functions without a name and not bound with an identifier). They don't return any value and can declare without the function keyword. Arrow functions cannot be used as the constructors. The context within the arrow functions is lexically or statically defined. They are also called as Lambda Functions in different languages.

Arrow functions do not include any prototype property, and they cannot be used with the new keyword.

Syntax for defining the arrow function*/



//Let's understand with examples===============
// var myfun1 = function show() {  
//  console.log("It is a Function Expression");     
// }  
  
// // Anonymous function  
  
// var myfun2 = function () {  
//     console.log("It is an Anonymous Function");     
//    }  
     
// //Arrow function  
  

// var myfun3 = () => {  
//     console.log("It is an Arrow Function");     
//    };  
  
// myfun1();  
// myfun2();  
// myfun3();  

let sum = (num1,num2,...arr1)=>{

    console.log(num1+num2);
}

sum(10,10);

var show = (a, b=200, c=50) => {
    console.log(a + " " + b+"  "+c);
}
show(100,500);

// arrow functions with return type===========

var show_1 = (value) => {  
    return value/2;  
 }  
 
 let result =show_1(50);

 console.log(result);