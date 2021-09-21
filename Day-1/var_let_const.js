

// use strict=> It is going to check scope and data type compulsory
//           => It applicable only if assigned at top of js file.
// "use strict"
// var test5 = 'sachin';
// let test6 = 'Virat';
// const test7  = 'MSD';
// test8 = 'Rohit';

// console.log(test5, test6, test7, test8);
//----------------------------------------------------------------------------------------------------------------------------------------------------------------

// 1) Var => 
// re-declaration is possible
// re-assignment is possible
// it is having functional scope as well as global scope

var test1= 'sachin';
var test2= 'Virat';
console.log(test1, test2);
// console.log(test1,test2,test3,test4);


//------------------------------------------------------
    //more example using function

// function func(){
//     var demo= "I am for demo purpose"
//     console.log("This is js")
//     for(i=0; i<5; i++){
//         var test20=console.log("This is inside js")
//         console.log(demo);
//         // console.log(test1);
//     }
//     console.log(demo);
// }
// func()
// console.log(demo);
// console.log(demo); This will show error.
var test1= 'sachin';
test2= 'Ajay';
console.log(test1, test2);

//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------
// 2) let =>
// re-declaration is not possible.
// re-assignment is possible.
// it is having block of local scope.  

// let sample = "india"
// let sample1= "usa"
// console.log (sample);
// console.log(sample1);
//   function fn (){
//     let inp= "This is let inside function" 
//     // console.log(inp);

//      for (i=0; i<3;i++){
//     // console.log(inp);     
//     let inp1= "This is let inside block"
//     // console.log(inp1);

//       let sample = "india"   
//      console.log(sample);

//     sample1 = "canada" 
//     console.log(sample1);    
//      }
//     //  console.log(inp1); //This is going to be error cause it is out of block
//     }
//     fn ();
// let sample = "india" // re-declaration is not possible.
// sample1= "Dubai" // re-assignment is possible here
// console.log (sample);
// console.log(sample1);
//-------------------------------------------------------------------------------------------------------------------

// 3) const =>
//re-declaration is possible.    
//reassignment is not possible.
//const is having block of local scope..
//  const fname = "MS";
//  const lname = "Dhoni";
//  console.log(fname , lname);
// //  function fun (){
// //      const role = "Skipper"
// //      console.log(role)
// //      for (i=0; i<3; i++){
// //          const dec =("This is const inside block")
// //          console.log(dec);

// //         // const fname = "MS"; 
// //          console.log(fname)

// //         //  const fname = "virat"; //
// //         //  console.log(fname)
// //         console.log(role)
// //      }
// //     //  console.log(dec);
// //  }
// //  fun ();
// // //  console.log(dec);
//     const fname = "MS"; //re-declaration is not possible here
//      lname = "sigh"; //re-assignment is not possible.
//     console.log(fname, lname);

//---------------------------------------------------------------------------------------------------------------------    