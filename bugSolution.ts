function add(a: number, b: number): number {
  return a + b;
}

function isNumber(value: any): value is number {
  return typeof value === 'number';
}

function addSafe(a: any, b: any): number | undefined {
  if (isNumber(a) && isNumber(b)) {
    return a + b;
  } else {
    console.warn("Invalid input types provided to addSafe.");
    return undefined;
  }
}

let result1 = addSafe(1, '2'); // undefined
let result2 = addSafe(1, 2); // 3
let result3 = addSafe(1, 2 as number); // 3 - Type assertion, use cautiously!
console.log(result1, result2, result3)