"use strict";
function SquareOf(n) {
    return n * n;
}
console.log(SquareOf(9));
console.log(SquareOf(10.1));
// unkown
let x = 30;
let y = 20;
function whatisx(x) {
    if (typeof (x) === "number") {
        console.log(x + y);
    }
    else {
        console.log("x is not a number");
    }
}
whatisx(x);
whatisx("hello");
