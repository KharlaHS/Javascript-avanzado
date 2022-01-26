const {sumar, restar, multiplicar, dividir} = require("./calculadora");

describe("Pruebas en el componente calculadora", () => {

    test("Pruebas en la función sumar", () => {

        expect(sumar(3, 5)).toBe(8);
    });

test("Pruebas en la función restar", () => {

        expect(restar(5, 3)).toBe(2);
    });

test("Pruebas en la función multiplicar", () => {

        expect(multiplicar(5, 3)).toBe(15);
    });

test("Pruebas en la función dividir", () => {

        expect(dividir(6, 3)).toBe(2);
    });

});
