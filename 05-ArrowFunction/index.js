const s = "1999-2-23";

//Arrow Function
const stri = str =>
{
    return str.split( "-" )[ 0 ];
};

console.log( stri( s ) );

