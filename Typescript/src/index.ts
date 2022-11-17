let sales = 123_456_789;
let course = 'Typescript';
let is_published = true;
let level;

// function render(document) {
//     console.log(document);
// }
// need to declare the type in a function

// ARRAYS
let numbers: number[] = [];
// numbers.forEach(n => n.) itellisense (code completion with dot notation)

// TUPLES
let user: [number, string] =  [1, 'Nate'];
// user[1]. itellisense (code completion with dot notation)

// ENUMS
// const small = 1;
// const medium = 2;
// const large = 3;
// PascalCase
const enum Size { Small = 1, Medium, Large };
let mySize: Size = Size.Medium;
console.log(mySize);

// FUNCTIONS
function calculateTax(income: number, taxYear = 2022): number {
    if (taxYear < 2022)
        return income * 1.2;
    return income * 1.3;
}

calculateTax(10_000);

// OBJECTS
let employee: {
    readonly id: number,
    name: string,
    retire: (date: Date) => void
} = { 
    id: 1, 
    name: 'Nate',
    retire: (date:Date) => {
        console.log(date);
    }
};