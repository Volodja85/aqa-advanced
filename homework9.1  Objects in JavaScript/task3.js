const car1 = { brand: "ЗАЗ", model: "Таврія", year: 2025 };

const car2 = { brand: "Hyundai", model: "Elantra", owner: "Jack Reacher" };

const car3 = { ...car1, ...car2 };

console.log(car3);
