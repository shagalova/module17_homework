import { definePrime } from "../definePrime.js";

xdescribe( "tests for definePrime function", () => {
    const simple = 5;
    const complex = 4;

    it("should operate correctly whith simple number", () => {
        expect(definePrime(simple)).toBe(`Число ${simple} - простое число`);
    }),
    it("should operate correctly whith complex number", () => {
        expect(definePrime(complex)).toBe(`Число ${complex} - составное число`);
    }),
    it("should operate correctly whith invalid number", () => {
        expect(definePrime(1001)).toBe("Данные неверны");
    });
})

xdescribe( "tests for definePrime function", () => {
    const simple = 5;
    const complex = 4;

    it("should operate correctly whith simple, complex and invalid number", () => {
        expect(definePrime(simple)).toBe(`Число ${simple} - простое число`);
        expect(definePrime(complex)).toBe(`Число ${complex} - составное число`);
        expect(definePrime(1001)).toBe("Данные неверны");
    });
})