# Implicit Type Coercion Bug in TypeScript

This example demonstrates a common issue in TypeScript where implicit type coercion can lead to runtime errors that are not caught during compilation.

The `printString` function is declared to accept a string argument. However, the code calls the function with a number. TypeScript's type system will not prevent this, but it will result in unexpected behavior at runtime.  This highlights a potential pitfall when relying on implicit type conversions in TypeScript.  Consider using explicit type assertions or stricter type checking to prevent these types of runtime issues. 