
/**
 * The function sing() is a function that will print "hellooo" to the console until the program is
 * stopped
 * 
  /* An infinite loop. */

  const sing2=()=>{
  while (true){
   console.log("hellooo");
  
  }
  }
  sing2();



/**
 * `fail` is a function that takes a string and throws an error with that string as the message
 * - The message to be displayed in the error.
 */

  const fail =(msg:string)=>{
    throw new Error(msg);
  }
fail('error');

  
//  never cannot finishes the function 
//  and also not return anything


/**
 * The function sub() takes two numbers as arguments and returns nothing
 */
function sub(a:number,b:number):never{
  throw new Error('error here')
  console.log(a-b);
  
}
sub(3,4);

// never  data type
/**
* The raiseError function never returns a value, so it's return type is never.
* - string - The message to be passed to the Error object.
*/
function raiseError(msg: string):never{
   throw new Error(msg);
   console.log('error message not executes');
   

}
console.log( raiseError("DANGER ZONE"));