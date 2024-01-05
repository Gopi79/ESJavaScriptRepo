const arr = [ 10, 20, 30, 40, 50, 60, 70, 80, 90 ];

//filter method
const new_arr = arr.filter( val => val > 40 );

console.log( new_arr );

//mulriple filters
const names = [ "Alex", "Eric", "Mary", "Jhone", "Tom", "Baby", "Cat" ];

const new_names = names.filter( name => name.length > 4 ).filter( na => na.length = 5 );

console.log( new_names );
