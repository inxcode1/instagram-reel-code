//console.log()

console.log("<InXcode>");

const studentName = "Shiv";
const age = 21;
const job = "Frontend Developer";
const skill = "ReactJs, javascript, typescript";

console.log({ studentName, age, job, skill });

//style console

console.log("%cInXcode", "color: red;");

console.log("%cInXcode", "color: red; font-size: 20px");

// console.warn()

for (let i = 0; i < 15; i++) {
  console.log("No.", i);

  if (i == 12) {
    console.warn("warning", i);
  }
}

// console.error()

const a = 10;

const isNumberMatch = () => {
  if (a == 20) {
    console.log("Matched");
  } else {
    console.error("Not Matched");
  }
};

isNumberMatch();

// console.time() & console.timeEnd()

console.time("Time this");

for (var i = 0; i < 10; i++) {
  console.log(i);
}

console.timeEnd("Time this");

// console.table()

const menu = [
  { name: "Shiv", age: 25, role: "Frontend" },
  { name: "Jay", age: 23, role: "Backend" },
  { name: "Sunny", age: 26, role: "Fullstack" },
];

console.table(menu);
