// arrays destructure

let fruits = ['Apple', 'Banana'];
let [a, b] = fruits;
console.log(a, b);

// object destructuring

let user = { username : 'Oscar', age: 34};
let {username, age} = user;
console.log(username, age);

// spread operator

let person = {name: 'Oscar', age: 28};
let country = 'MX';
let data = {...person, country};
console.log(data)
