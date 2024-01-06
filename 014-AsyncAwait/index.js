//async and await

const api = async () =>
{ 
    const response = await fetch( 'https://jsonplaceholder.typicode.com/users' );
    const data = await response.json();
    //console.log( data );
    return data;
};

const users = api();

console.log( users );