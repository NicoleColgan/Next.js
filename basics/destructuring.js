// the destructuring assignment syntax is an expression that makes it possible
// to unpack values from arrays or properties from objects

/*
let a, b, rest; 
[a,b] = [10,20];
[a,b, ...rest] = [10,20,30,40,50];

console.log(rest);
*/

const x = [1, 2, 3, 4, 5];

// c=1, d=2
const [c, d] = x;

console.log("this is d:", d);

// similarly you can destructure objects on the left hand side

const obj = { e: 1, f: 2 };
const { e, f } = obj;
console.log("this is f", f);

const obj2 = { 
  g: 1, 
  h: { 
    i: 2 
  }
};

// const {g, h:{i:j}, } = obj2;

const { g } = obj2;

let {
  h: { i: j },
} = obj2;

// ({a,b} = {a: 1, b: 2})

const { a, ...others } = { a: 1, b: 2, l: 3 };
console.log("others", others);

function w() {
  return [1, 2];
}

const [t, y] = w();
console.log("t", t);

const user = {
  id: 42,
  displayName: "jdoe",
  fullName: {
    firstName: "John",
    lastName: "doe",
  },
};

function userId({ id }) {
  return id;
}

console.log("user id", userId(user));

function whois({ displayName, fullName: { firstName: name } }) {
  return `${displayName} is ${name}`;
}

console.log(whois(user));

const users = [
  {
    name: "jon wick",
    family: {
      mom: "susan wick",
      dad: "jeremy wick",
    },
    age: 43,
  },
  {
    name: "bruce wayne",
    family: {
      mom: "michelle wayne",
      dad: "tom wayne",
    },
    age: 38,
  }
];

for (const {
    name: n,
    family: {dad: f},
} of users) {
    console.log(`Name: ${n}, Dad: ${f}`);
}
