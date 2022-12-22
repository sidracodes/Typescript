//  void not return anything
// but void finishes the function

function sum(a: number, b: number): void {
  console.log(a + b);
}

/**
 * The function sing() is a function that will print "hellooo" to the console
 */
const sing = function(){
  while (true){
   console.log("hellooo");
   break;
  }
  }
  sing(); 





//  never cannot finishes the function
//  and also not return anything

function sub(a: number, b: number): never {
  console.log(a - b);
}
sub(3, 4);




  /* An infinite loop. */
  // const sing2 = function(){
  
  //   while (true){
  //    console.log("hellooo");
  //   }
  //   }
  //   sing2();
  
    