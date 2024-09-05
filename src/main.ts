const sumTwoNumbers = (a: number, b: number) => {
  return a + b;
};

const sum1And1 = sumTwoNumbers(1, 1);
const sum1And2 = sumTwoNumbers(1, 2);
const sum1And3 = sumTwoNumbers(1, 3);
const sum1And4 = sumTwoNumbers(1, 4);

const sum2And1 = sumTwoNumbers(2, 1);
const sum2And2 = sumTwoNumbers(2, 2);
const sum2And3 = sumTwoNumbers(2, 3);
const sum2And4 = sumTwoNumbers(2, 4);

const sumWithNumber = (a: number) => {
  return (b: number) => {
    return a + b;
  };
};

const sumWithNumber_ = (a: number) => (b: number) => a + b;

const sumWith1 = sumWithNumber(1); // (b: number) => return 1 + b;
const sum1And1_ = sumWith1(1);
const sum1And2_ = sumWith1(2);
const sum1And3_ = sumWith1(3);
const sum1And4_ = sumWith1(4);

const sumWith2 = sumWithNumber(2); // (b: number) => return 2 + b;
const sum2And1_ = sumWith2(1);
const sum2And2_ = sumWith2(2);
const sum2And3_ = sumWith2(3);
const sum2And4_ = sumWith2(4);
