
                        // undefined vs null

let price;
console.log(typeof price +"         "+ price);

let cost:null;
cost=null ;
console.log(typeof cost +"         "+ cost);

let  age:undefined;
console.log(age + "         "+ typeof age);

let std_name: null;
console.log(std_name +"         "+typeof std_name);
console.log(std_name == null);
console.log(std_name === null);

std_name=null;
console.log(std_name +"         "+typeof std_name);
     console.log(std_name == null);
     console.log(std_name === null);
     


// undefind , null
let b_day: number | undefined | null ;

console.log(b_day);

console.log(b_day == null); //only compare values
console.log(b_day === null); // compare values with datatypes also
  console.log(typeof b_day);
  
         b_day=23;
         console.log(b_day);

         b_day=undefined;
         console.log(b_day); 
         console.log( b_day == undefined);
         console.log( b_day === undefined);
         
        
         b_day=null;
         console.log(b_day);        
          console.log( b_day == undefined);
          console.log( b_day === undefined);
          
         