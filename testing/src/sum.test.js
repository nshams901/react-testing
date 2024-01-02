import sum from "./sum";

// test() is the part of Jest, it's globally available to write test.
test("test sum function", () => {
    let a = 10;
    let b = 5;
    expect(sum(a, b)).toBe(15);
})