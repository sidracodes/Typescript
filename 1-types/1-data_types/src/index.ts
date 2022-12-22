// type inference (when we dont write data types, typescript infered types)
// type annotation (when we write specific data types--strongly typed)
// type assertion ( let a1 = new Array() as string[] )
// type guards ( instanceof , typeof , in , is )
// typescript generics ( let a1: Array<string> = new Array() )
/**
 * The function sum() takes two numbers as parameters, adds them together, and returns the result.
*/
function sum(a:number , b:number): number{
   return a+b ;
}
sum(3,7);

/**
 * The function sum2 takes two numbers as arguments and returns the sum of the two numbers
 */
function sum2(a:number , b:number): any{
  console.log(a+b);

}
sum2(3,88);

/* Declaring a variable called age and assigning it a value of 23. Then it is logging the value of age
to the console. Then it is reassigning the value of age to 26 and logging the value of age to the
console. Then it is reassigning the value of age to 20 and logging the value of age to the console. */

 let age: number;
 age= 23;
 console.log(age);
 age= 26;
 console.log(age);
 age= 20;
 console.log(age);


/* Declaring a variable called classname and assigning it a value of "web 2.0". Then it is logging the
value of classname to the console. Then it is reassigning the value of classname to 6 and logging
the value of classname to the console. Then it is reassigning the value of classname to "web 3.0"
and logging the value of classname to the console. */



let classname:any;
classname="web 2.0";
console.log(classname);
classname=6;
console.log(classname);
classname=false;
console.log(classname);


/* Declaring a variable called arr and assigning it an array of values. Then it is using the
map method to iterate over the array and log the type of each value to the console. */
let arr : any [] = [ "sidra" , 23 , true , 999999n];
arr.map((m)=>{
   console.log( typeof(m));
   
})

/**
 * The function calcTotalPrice takes a number as an argument and returns a number
 * @param {number} price - number - the price of the item
 * .tofixed() round off the number to given value ,
 *  it takes number but it returns string, 
 * so after using it we have to convert it into number by using plus sign
 *  like this +(expresiin).tofixed(number)
 */
function calcTotalPrice ( price : number) : number {
   return +( price + ( price * 0.18 ) ).toFixed(1)

}

let priceOfToy = calcTotalPrice(9876543123.33);
let discountedPrice = priceOfToy / 2;
console.log ( ` discounted price : ${discountedPrice} ` ) ;

// data type number in typescript can hold any number 
//  integer, floating point, binary number, octals, hexa decimals

let year : number=2022;
const cost: number=20.22;
var binaryNumber:number= 0B100;
var octalNumber:number= 0O100;
var hexadecimalNumber:number= 0X100;

// bigint is a datatype which stores big values preceeding n  
let bigIntegerNumber: bigint = 874465225676846773420676467247646444446n;

console.log(`\n ${year} \n ${cost} \n ${binaryNumber} \n ${octalNumber} \n ${hexadecimalNumber} \n ${bigIntegerNumber}` );

