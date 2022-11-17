let sales = 123_456_789;
let course = 'Typescript';
let is_published = true;
let level;

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

// TYPE ALIASES where we can use in multiple places
type Employee = {
    readonly id: number,
    name: string,
    retire: (date: Date) => void
}

let employee: Employee = { 
    id: 1, 
    name: 'Nate',
    retire: (date:Date) => {
        console.log(date);
    }
};

// UNION TYPES

function kgToLbs(weight: number | string): number {
    // Narrowing
    if (typeof weight === 'number') 
        return weight * 2.2
    else 
        return parseInt(weight) * 2.2
}

kgToLbs(10);
kgToLbs('10kgs')

// INTERSECTION TYPES

type Draggable = {
    drag: () => void
}

type Resizable = {
    resize: () => void
}

type UIWidget = Draggable & Resizable;

let textBox: UIWidget = {
    drag: () => {},
    resize: () => {}
}

// LITERAL TYPES

// Literal (exact, specific)
type Quantity = 50 | 100;
let quantity: Quantity = 100;

type Metric = 'cm' | 'inch';

// NULLABLE TYPES

function greet(name: string | null | undefined) {
    if (name) 
        console.log(name.toUpperCase())
    else 
        console.log('Hola')
}
// can pass this if we use the union type
greet(undefined);

// OPTIONAL CHAINING

type Customer = {
    birthday?: Date
}

function getCustomer(id: number): Customer | null | undefined{
    return id === 0 ? null : { birthday: new Date() };
}

let customer = getCustomer(1);
// Optional property access operator
console.log(customer?.birthday?.getFullYear());

// Optional element access operator
// cutsomers?.[0]

// Optional call
let log: any = null;
log?.('a');

// THE NULLISH COAELSCING OPERATOR

let speed: number | null = null;
let ride = {
    // Falsy (undefined, null, '', false, 0)
    // speed: speed !== null ? speed : 30
    // Nullish coalescing operator ^
    speed: speed ?? 30
}

// TYPE ASSERTIONS

let phone = <HTMLInputElement> document.getElementById('phone');
// HTMLElement
// HTMLInputElement
phone.value

// THE UNKNOWN TYPE

// function render(document: unknown) {
//     // Narrowing
//     if (document instanceof WordDocument) {
//         document.toUpperCase()
//     }
//     document.move();
//     document.fly();
//     document.whateverWeWant();
// }

// THE NEVER TYPE

function reject(message: string): never {
    throw new Error(message);
}

function processEvents(): never { 
    while (true) {
        // Read a message from a queue
    }
}

reject('...');
console.log('Hello World');