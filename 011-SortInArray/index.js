const arr = [ 3, 7, 2, 8, 4, 6, 1, 9, 5 ];

//sort method in Array
//assending Order
const asce_sorted_arr = arr.sort( ( val1, val2 ) => val1 - val2 );

console.log( asce_sorted_arr );

//dessending Order
const desc_sort_arr = arr.sort( ( ind1, ind2 ) => ind2 - ind1 );

console.log( desc_sort_arr );