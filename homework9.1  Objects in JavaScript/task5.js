const users = [
  { name: "Jeck", email: "Jeck@Gmail.com", age: 18 },
  { name: "Mark", email: "Mark@Gmail.com", age: 22 },
  { name: "Jork", email: "Jork@Gmail.com", age: 44 },
];
for (const { name, email, age } of users) {
  console.log(
    `User "${name}" is ${age} y.o. and has "${email}" email address.`
  );
}
