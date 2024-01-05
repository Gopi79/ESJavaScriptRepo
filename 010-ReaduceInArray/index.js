const arr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ];

//reduce method in array
// array_reference.reduce((accumelater,index)=>{},value);
const new_arr = arr.reduce( ( acc, val ) => acc + val, 0 );

console.log( new_arr );