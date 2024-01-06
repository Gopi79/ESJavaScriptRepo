//Immutable Arrays

//Adding element

const arr = [ 1, 2, 3, 4 ];

const new_arr = [ ...arr, 5 ];
console.log( new_arr );

//Delete element
const ele = 3;
const del_arr = new_arr.filter( ( item ) => item != ele );

console.log( del_arr );

//Update element

const update_arr = del_arr.map(item => {
  if (item === 3) {
    
    return item + 2; 
  } else {
    return item;
  }
} );
console.log( update_arr );