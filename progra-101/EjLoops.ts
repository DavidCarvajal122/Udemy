export let base  = 10;
export let limit = 50;

let i = 1;
do {
    console.log( base, ' x ', i, ' = ', base * i );
    i++;
} while ( i <= limit );
