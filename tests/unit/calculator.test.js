const calculator = require("../../models/calculator.js");

test("Somar 2 + 2 - Deveria retornar 4", () => {
  const result = calculator.sum(2, 2);
  expect(result).toBe(4);
});

test("Somar 5 + 100 - Deveria retornar 105", () => {
  const result = calculator.sum(5, 100);
  expect(result).toBe(105);
});

test("Somar 'banana' + 100 - Deveria retornar 'Erro'", () => {
  const result = calculator.sum(100, "banana");
  expect(result).toBe("Erro");
});
