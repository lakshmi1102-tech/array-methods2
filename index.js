let a = [1,2,3,4,5,6]
  console.log(a.filter(x=>x>3))

let b=[4,6,9,8,7,2,20]
   console.log(a.filter(x=>x>=3 && x%3==0))

let numbers = [1, 2, 3, 4];
let evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers); 

let fruits = ['apple', 'banana', 'cherry'];
let longNames = fruits.filter(fruit => fruit.length > 5);
console.log(longNames);

let products = [
    { name: 'Laptop', price: 900 },
    { name: 'Phone', price: 80 },
    { name: 'Tablet', price: 300 }
  ];
  let affordableProducts = products.filter(product => product.price < 100);
  console.log(affordableProducts);

  
  let c = [ 1,2,3,4,5,6]
    console.log(c.map(x=>x*2))

let d = [2,3,5,78,99,10,200,278,600,700]
console.log(d.map(x=>x>200))

let prices = [10, 20, 30];
let withTax = prices.map(price => price * 2);
console.log(withTax);

let hello = ['abc','bcd','cde']
  console.log(hello.map(x=>x*d))

let hii = ['hello','namasthe','vanakkam']
console.log(hii.map(x=>x=='hello'));

const nandu =[2,4,7,8,20,50]
nandu.forEach(x=>{
  console.log(x*2)
})

const num =[2,4,7,8,20,50]
nandu.forEach(x=>{
  console.log(x+4)
})

const lucky =[2,4,7,8,20,50]
nandu.forEach(x=>{
  console.log(x>2)
})

const num2 =[2,4,7,8,20,50]
nandu.forEach(x=>{
  console.log(x>=2)
})