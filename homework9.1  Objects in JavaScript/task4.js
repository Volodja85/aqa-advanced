const person = { firstName: "Володимир", lastName: "Жемела", age: 40 };
person.email = "Volodymyr.zhemela@Gmail.com";

delete person.age;
console.log(person);
