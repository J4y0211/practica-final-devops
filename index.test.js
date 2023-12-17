const message = require("./index");

test("Checking message", () => {
  expect(message()).toBe("Jason Mejia, this is my final project!");
});