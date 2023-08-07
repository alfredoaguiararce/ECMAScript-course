/* The code is declaring and initializing variables using the `var`, `let`, and `const` keywords. */
var lastName = 'David';
lastName = 'Oscar';
console.log("🚀 ~ file: 00-let-const.js:3 ~ lastName:", lastName);

let fruit = 'Apple';
fruit = 'Kiwi';
console.log("🚀 ~ file: 00-let-const.js:7 ~ fruit:", fruit);

const animal = 'Dog';
animal = 'Cat';
console.log("🚀 ~ file: 00-let-const.js:11 ~ animal:", animal);


/**
 * The function `fruits` declares three variables (`fruit_1`, `fruit_2`, and `fruit_3`) with different
 * scopes and then logs their values.
 */
const fruits = () => {
    if(true){
        var fruit_1 = 'Apple'; // function scope
        let fruit_2 = 'Kiwi'; // block scope
        const fruit_3 = 'Banana'; // block scope
    }

    console.log(fruit_1);
    console.log(fruit_2);
    console.log(fruit_3);
}

fruits();
