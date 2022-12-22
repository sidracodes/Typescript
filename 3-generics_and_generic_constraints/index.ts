// generics type

let answer;
const f1=(arr: number[])=> {
  return arr[arr.length -1]
}
answer=f1([1,2,3])

const f2=(arr: Array<number>)=> {
  return arr[arr.length -1]
}
answer=f2([1,2,3])

const f3=(arr: Array<any>)=> {
  return arr[arr.length -1]
}
answer=f3([1,2,3])
answer=f3(['a','b','c'])

const f4=<T>(arr: Array<T>)=> {
  return arr[arr.length -1]
}
answer=f4([1,2,3])
answer=f4(['a','b','c'])

const f5=<T>(arr: T[])=> {
  return arr[arr.length -1]
}
answer=f5([1,2,3])
answer=f5(['a','b','c'])

const f6=<T>(x: T)=> {
  return [x]
}
answer=f6([5])
answer=f6(['a',6,true])
answer=f6(5)
answer=f6("5")

const f7 = < T , S > ( x : T , y : S ) => {
  return [ x , y ]
}
f7(1,2)
f7('a','b')
f7(1,'a')
f7('1',true)

const f8= ( obj: { firstname:string , lastname:string } ) => {
return ( obj.firstname + obj.lastname)
}
answer=f8( { firstname: 'sidra' , lastname: 'khalid' } )

// generic constraints

const f9= <T extends { firstname: string , lastname: string}>( obj: T  ) => {
return ( obj.firstname + obj.lastname)
}
answer=f9( { firstname: 'sidra' , lastname: 'khalid' } )
answer=f9( { firstname: 'sidra' , middlename: 'khalid' ,lastname: 'abbasi' } )

interface Tab <T>{
  id: number,
  positon: string,
  data: T
}
type numbertab = Tab<number>;
type numbertabs = {
  id: number,
  positon: string,
  data: number
}
type stringtab = Tab<string>;


/**
 * The function f3 takes a parameter of type T which is a generic type and returns the same type.
 * - T - This is the parameter that we're passing into the function.
 * generic constraints
 */
type person = {
  fnm: string;
};
function fun3<T extends person>(data: T): T {
  return data;
}
let detail = { lnm: "kh", fnm: "sid",mnm:'abb' };
console.log(fun3(detail));
  

// generics
function fun4<T>(color: T):T{
return color;

}
console.log(fun4("blue"));
