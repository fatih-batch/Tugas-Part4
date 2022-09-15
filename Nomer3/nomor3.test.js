const Palindrome = require("./nomor3");

test("Test 1", () => {
    expect(Palindrome("kakak")).toEqual(true);
});
test("Test 2", () => {
    expect(Palindrome("hari-hari")).toEqual(false);
});