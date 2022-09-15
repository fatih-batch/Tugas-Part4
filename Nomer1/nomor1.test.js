const bilPrima = require("./nomor1");

test("Test 1", () => {
    expect(bilPrima(10)).toEqual(false);
});
test("Test 2", () => {
    expect(bilPrima(3)).toEqual(true);
});
test("Test 3", () => {
    expect(bilPrima(5)).toEqual(true);
});