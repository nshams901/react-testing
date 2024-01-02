import sum from "./sum";

test("test sum function", () => {
    let a = 10;
    let b = 5;
    expect(sum(a, b)).toBe(15);
})