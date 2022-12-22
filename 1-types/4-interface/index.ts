/**
 * The function takes a parameter of type number or string and prints it to the console
 */

// union type
function print(item: number | string ){
    if( typeof item === 'string' ){
console.log(item.toUpperCase());

    }
else
    console.log(item);
    
}
print("hello");


// type alias

type fruits={
    name:string,
    color:string
}



let object1 : fruits={

    name: "apple",
    color:"red"
}
console.log(object1);




//type alias

type fruitss={
    name:string,
    color:string
}
type Mangoo= fruitss & {
    price: number
}

let object4 : Mangoo={

    name: "apple",
    color:"red",
    price:34
}
console.log(object4);

let object5 : fruitss={

    name: "dragon",
    color:"pink"
}
console.log(object5);



// type interface

interface fruit{
    name:string,
    color:string
}
interface Mango extends fruit{
    price: number
}

let object2 : Mango={

    name: "apple",
    color:"red",
    price:34
}
console.log(object2);

let object3 : fruits={

    name: "dragon",
    color:"pink"
}
console.log(object3);
