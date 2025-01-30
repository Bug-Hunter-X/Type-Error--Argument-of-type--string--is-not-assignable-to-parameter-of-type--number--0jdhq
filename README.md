# TypeScript Type Error Bug

This repository demonstrates a common type error in TypeScript where a string is passed as an argument to a function expecting a number. The error is caught during compilation, showcasing TypeScript's type safety features.  The solution provides a way to handle this type mismatch safely.

## Bug

The `bug.ts` file contains a function `add` that expects two number arguments. However, the code calls `add` with a string ('2') resulting in a type error.

## Solution

The `bugSolution.ts` file demonstrates multiple ways to solve this issue. One involves using type guards to check the types before performing the addition. Another uses a type assertion, but this approach should be used with caution and when you are absolutely sure about the type.