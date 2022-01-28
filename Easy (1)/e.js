var arr = [2, 4, 7, 11, 15, 16];

var evens = arr.filter(function(x) {
    return x % 2 === 0;
})

console.log(`Even Numbers: ${evens}`);

var odds = arr.filter(function(x) {
    return x % 2 === 1;
})

console.log(`Odd Numbers: ${odds}`);

