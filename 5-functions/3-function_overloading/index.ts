/**
 * The function add() is overloaded with three functions, and the function add() is called with
 * different parameters
 *  try to avoid function overloading
 */

function add(a: string, b: string): string;
function add(a: number, b: number): number;
function add(a: any, b: any): any;

function add(a: any, b: any): any {
  return a + b;
}

console.log(add("hello ", " world"));
console.log(add(7, 8));
console.log("sidra khalid", true);

