
// TypeScript Anonymous Functions are functions
 // that are not bound to an identifier i.e., 
 // anonymous functions do not have name of the function.
  // Anonymous functions are used as inline functions. 
  // These are used when the function is used only once (iife)
  // and does not require a name. The best example is a callback function.
// ----------------------------------------------------------------------------------
// function declaration / simple function 
// self calling function
// ANONYMOUS function 
//  ARROW FUNCTION / LAMBDA FUNCTION / FAT ARROW FUNCTION / function expression  
// ----------------------------------------------------------------------------------

let arrnum = [45, 866, 98, 34, 23, 90, 76];

let f1 = (arr: number[]) => {
  console.log(arr);
  const i = Math.floor(Math.random() * arr.length);
  console.log(arr[i]);
};
f1(arrnum);

/**
 * It takes an array of strings, and returns a random string from that array
 * - The array to pick a random element from.
 */
let arrval = ["a", "b", "c", "d", "e"];

const f2 = (arr: string[]) => {
  console.log(arr);
  const i = Math.floor(Math.random() * arr.length);
  console.log(arr[i]);
};
f2(arrval);

//math.random always return number lower than 1
//math.floor returns random integer between 1 to 5

/**
 * The function takes an array as an argument and returns a random element from the array.
 *  this is the array that you want to get a random value from
 */

const f3 = (arr: any[]): any => {
  console.log(arr);
  const i = Math.floor(Math.random() * arr.length);
  console.log(arr[i]);
};
f3(arrnum);
f3(arrval);
// The Math.random() function returns a floating-point,
//  pseudo-random number that's greater than 
//  or equal to 0 and less than 1, 

// The Math.floor() function always rounds down 
// and returns the largest integer less than 
// or equal to a given number.

/**
 * It takes an array of any type and returns a random element from that array
 * fat arrow function or lambda function
 */
 let f_1 = ( x : any [] ) : any => {
  const y=  Math.floor( Math.random() * x.length ) ;
  console.log(x[y]);
  }
  let arrayOfNumber: number;
  let arrayOfString : string;
  arrayOfString = f_1(["sidra","eman","abdullah","ismail"]);
  arrayOfNumber = f_1([1,2,3,4,5,6,7,8,9,10]);
  console.log(arrayOfNumber);
  console.log(arrayOfString);

 // anonymous function
 const f8:()=>{} =function(){
  while (true){
   console.log("hellooo");

  }
  }
f8();
