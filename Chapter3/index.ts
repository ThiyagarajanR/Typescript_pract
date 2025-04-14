
function SquareOf(n: number): number {
    return n * n;
}

console.log(SquareOf(9));
console.log(SquareOf(10.1));

// unkown

let x: unknown = 30;

let y: number = 20;

function whatisx(x: unknown): void {

    if (typeof (x) === "number") {
        console.log(x + y)
    }
    else {
        console.log("x is not a number");
    }
}


whatisx(x);
whatisx("hello");

let hello:"hello" = "hello"
