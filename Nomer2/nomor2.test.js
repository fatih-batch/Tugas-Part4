const faktorial = require("./nomer2");

test("Test 1", () => {
    expect(faktorial(5)).toEqual(120);
});
test("Test 2", () => {
    expect(faktorial(7)).toEqual(5040);
});