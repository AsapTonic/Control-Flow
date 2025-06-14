

const output=fizzBuzz(10);
console.log (output);

function fizzBuzz (i){

if (i%3===0 && i%5===0)
    return "fizzBuzz";

if (i%3===0)
    return "fizz";

if (i%5===0)
    return "Buzz";

return i;
}