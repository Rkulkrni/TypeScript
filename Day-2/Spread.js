
// Spread=>
// 1) it is concat two array or object
// 2) it is pass value from one array to another and one object to another

var x = [3,54,5,1,2,4];
var y = [2,6,4,1,5,4];
var z = [...x,  ...y];
 console.log (z);
//---------------------------------------------------------------

var a =[2,3,4,5,7,7,6];
var b= [...a] // it is like var b=a
console.log(b)
//---------------------------------------------------------------

// By using object
 let test1 = {city :'mumbai'};
 let test2 = {native:'pune'};

 let test3 = {...test1,...test2};
console.log(test3);
//----------------------------------------------------------------

let car ={
    name : 'TATA',
    varient: 'Petrol',
    Price : 500000,
}
 let car2 = {...car}   // Car feature moved to car2
 console.log(car2);

