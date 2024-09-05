type ExampleType2 = (x: string) => void;
const logInput: ExampleType2 = (input: string) => console.log(input);
logInput('ajshdakjsd');

type ExampleType3 = (a: string, b: number) => void;

const func3: ExampleType3 = (name: string, age: number) => console.log(name, age);
func3('ruslan', 10);

type ExampleType4 = (a: number, b: number) => number;
const sum: ExampleType4 = (a: number, b: number) => {
  return a + b;
};

const result = sum(4, 5);
console.log(result);

const sum3: (arg: number, brg: number, crg: number) => number = (a: number, b: number, c: number) =>
  a + b + c;

console.log(sum3(1, 2, 3));
