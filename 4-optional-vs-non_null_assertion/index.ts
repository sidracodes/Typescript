// optional parameter
type fruit={
    name: string,
    color: string,
    price?: number | undefined,
    allseason?: boolean
}
 let mango: fruit={
   name: 'mango',
   color: "green",
   price: 10
 }
 let dragon:fruit={
   name: 'dragon',
   color: "pink"

 }
 let kiwi:fruit={
   name: 'kiwi',
   color: "light-green",
   price: 200,
   allseason: false

 }
 console.log(mango);
 console.log(mango.price);
 console.log(mango.allseason);
 console.log(dragon);
 console.log(kiwi);
 

// non null assertion

function getPrice( prices:number , discount?: number){
  if(discount)
   console.log(   prices + discount!);
 else
  console.log(prices);
  
}


getPrice(mango.price!);
getPrice(dragon.price!);
getPrice(kiwi.price!);
getPrice(1,12);
getPrice(19);