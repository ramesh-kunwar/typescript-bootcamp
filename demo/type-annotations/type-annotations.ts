const myName: string = "Ramesh Kunwar";

const amount: number = 2 + 2;

const hello: string = `hello ${myName} `;

const powerLevel: bigint = 9000n + 1n;

const yes: boolean = true;

function sum(lhs: number, rhs: number): number {
  const total = lhs + rhs;
  return total;
}

const one = sum(1, 1);
const two = sum(2, 2);

console.log(one);
console.log(two);
