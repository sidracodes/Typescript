//array of objects
// type alias
type fruittype={
  name: string,
  taste: string,
  color: string,
  allseason: boolean
}

let fruits : fruittype[] = [
  {
    name: "mango",
    taste: "sweet",
    color: "yellow",
    allseason: false,
  },
  {
    name: "orange",
    taste: "sweet-dart",
    color: "orange",
    allseason: false,
  },
];
console.log(fruits);


/* Defining a variable fruit of type object with properties name, taste, color and allseason. */
let fruit :  {
  name: string,
  taste: string,
  color: string,
  allseason:boolean
}  = {
  name: "mango",
  taste: "sweet",
  color:"yellow",
  allseason:false
}

console.log(typeof fruit );
console.log(typeof fruit.name );
console.log(typeof fruit.allseason );
console.log(fruit );

/**
* Fruitstype is a type that has a name, taste, color, and allseason property, where name is a string,
* taste is a string, color is a string, and allseason is a boolean.
*/
// type alias
type fruitstype ={
  name: string,
  taste: string,
  color: string,
  allseason:boolean
}
let fruit1 : fruitstype =
  {
      name: "mango",
      taste: "sweet",
      color:"yellow",
      allseason:false
  }
let fruit2 : fruitstype =
  {
      name: "orange",
      taste: "sweet-dart",
      color:"orange",
      allseason:false
  }
console.log(typeof fruit1);
console.log(typeof fruit2);
console.log(fruit1);
console.log(fruit2);

