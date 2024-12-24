function printString(str: string): void {
  console.log(str);
}

// Explicit Type Assertion
printString(String(123));

// Alternative: Using a union type to allow for number and string
function printString2(str: string | number): void {
  console.log(str);
}
printString2(123); // this is now correct

// Best practice: Use type guards to ensure runtime type safety
function isString(value: any): value is string {
  return typeof value === 'string';
}

function printString3(str: any): void {
    if(isString(str)){
        console.log(str);
    } else {
        console.error("Invalid input type");
    }
}

printString3(123); // This will print an error message instead of unexpected behavior