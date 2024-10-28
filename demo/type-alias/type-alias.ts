type PersonName = string;

const myName: PersonName = "Ramesh Kunwar";

const anotherName: PersonName = "Jason";

// bad
function print(thing: string) {
  console.log(`Name is ${thing}`);
}

print("house");
// good
function printName(name: PersonName) {
  console.log(`Name is ${name}`);
}

printName("Ramesh Kunwar");
