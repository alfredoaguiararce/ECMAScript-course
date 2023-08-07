function newUser(name, age, country){
    var name = name || 'Oscar';
    var age = age || 34;
    var country = country || 'MX';
    console.log(name, age, country);
};

new newUser();
new newUser('Alfredo', 26, 'MX');

function newAdmin(name = 'Oscar', age = 32, country = 'MX'){
    console.log(name, age, country);
}

new newAdmin();
new newAdmin('Alfredo', 26, 'MX');