const factorial = (num: number): number => {
  if (num === 1) {
    return 1;
  }

  const prevFactorial = factorial(num - 1);

  return num * prevFactorial;
};

console.log(factorial(1));
console.log(factorial(2));
console.log(factorial(10));
