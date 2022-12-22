
// call back function

/**
 * F2 is a function that takes a function as an argument and calls it after a delay
 *  Callback - Function - This is the function that will be called when the
 * asynchronous operation is complete.
 */
let  f2 =( Callback : Function ) : any | void => {
  console.log("please wait");
 Callback();
 }
 
let  f4 =( Callback:()=>void ) : any | void => {
  console.log("please wait");
 Callback();
 }


 function f3(){
  console.log("i have done");
 }
 
 f2(f3);
 f4(f3);
 
   
