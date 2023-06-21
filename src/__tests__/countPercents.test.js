import { countPercents } from "../countPercents.js";

describe("tests for countPercents function", () => {
    it("calculate 30 percent of 200 to equal 60", () => {
        const result = countPercents(30, 200);
        expect(result).toBe(60);
    }),
    it("calculate 50 percent of 50 to equal 25", () => {
        const result = countPercents(50, 50);
        expect(result).toBe(25);
    }),
    it("calculate 0 percent of 100 to equal 0", () => {
        const result = countPercents(0, 100);
        expect(result).toBe(0);
    }),
    it("calculate 100 percent of 0 to equal 0", () => {
        const result = countPercents(100, 0);
        expect(result).toBe(0);
    }),
    it("test failed function - 100 percent of 100 not to equal 1", () => {
        const result = countPercents(100, 100);
        expect(result).not.toBe(1);
    }),
    it("test function return somthing", () => {
        expect(countPercents()).toBeDefined();
    })

})