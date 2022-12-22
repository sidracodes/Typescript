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

