------------------------------------------------------------

   ######    STEPS TO START TYPESCRIPT PROJECT    ######

------------------------------------------------------------

1. Install Node.js
 
   node -v
   npm -v
   npx -v

2. Install TypeScript

  npm install -g typescript

    1. Open Powershell in Adminstrator mode
    2. Run command: 

		Set-ExecutionPolicy RemoteSigned

3. Make it a Node.js project by giving the following command:

		npm init -y

    1. do changes in package.json files
       
       entry after main => type: module
       entry inside scripts => start: 'tsc --watch'
        
4. Generate tsconfig.json by giving this command:

		tsc --init

    1. do changes in tsconfig.json file
        
        "target": "2022",
        "module": "nodenext",                              
        "rootDir": "./src",                                 
        "moduleResolution": "nodenext",
        "declaration": true, 
        "outDir": "./output"

5. Install types for Node.js

		npm i @types/node -D

6. Make directory src
      Make file inside index.js

7. Transpile JavaScript by running:

		npm run start

8. Run transpiled javascript by running the following command in new terminal:

		cd output
        node index.js
---------------------------------------------------------------------------------------------------------

baby steps to learn typescript : https://github.com/panaverse/learn-typescript

---------------------------------------------------------------------------------------------------------

## type inference(implicit type)
 typescript engine inferred the data type itself if not assigned

## strong typing
 assigning specific data type to vairiable(number,boolean,string,object,array,function)
   1. type annotation(explicit type)
 assigning data type to variable
   2. type union
 type union means mixtue of data types 
   3. type literal
 type literal means specific data type other than primtive, non primtive

### type narrowing
 type narrowing means defining type i.e strong typing , checking 
   1. type narrowing types:
 typeof typeguard, truithiness narrowing, in operator, instance of, equality narrowing
   2. typeof typeguards:
"string","number","bigint","boolean","symbol","undefined","object","function"

### difference between json object and simple object
json object doesnot contain functions
simple object contains functions
json object have data in key value pairs wrapped in inverted commas
simple objects have data in key value pairs , with values wrapped in inverted commas

### structural typing
 simple object literals assignable if same structure OR
 righthandside must have atleast lefthandside properties
  # Case when "FRESH" "STALE" object literal are assigned to a variable
 1. Case 1:
 same structure is allowed , order doesnt matter
 2. Case 2a:
 missing property on righthandside not allowed 
    Case 2b:
allowed  .if index signature matches
 3. Case 3:
 excess property not allowed in fresh object
 excess property is allowed in stale object

### interface vs type alias
typescript interface and type are the ways to describe data shapes

### let , var , const
let has block scoped, var has function scope, constant can not be changed

### nonnull assertion
value cannot be null or undefined

### optional vs non null assertion

### type any vs type unknown

### return type void vs never
Function returning never must not have a reachable end point
Function returning void must not returns anything

### undefined vs null type

### explicit type casting
myname as string;
<string> myname;

### type enum vs const enum
constant enum can only be accessed through string literal and index
enum can  be accessed through string literal and also index

### arrays
array1 : number[]
Array<number>
tuples

### functions
1. callback function
function used as a parameter inside another function is a callback function
2. optional paramter 
value is optional name?:string
3. default parameter
4. function overloading
many functions with same names but different parameters
5. rest parameter

### type generics 
1. simple generic type
2. generic type object
2. generic type function
2. generic type array

### generic constraints
generic extends interface or type
