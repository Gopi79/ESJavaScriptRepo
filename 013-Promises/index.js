//Promises

fetch( 'https://jsonplaceholder.typicode.com/users' ).
    then( Response => Response.json() ).
    then( data => console.log( data ) );

    