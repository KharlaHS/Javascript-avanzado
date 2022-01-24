const {sumar} = require("./calculadora");

describe("Pruebas en el componente calculadora", () => {

    test("Pruebas en la función sumar", () => {

        expect(sumar(3, 5)).toBe(8);
    });


});

const {restar} = require("./calculadora");

describe("Pruebas en el componente calculadora", () => {

    test("Pruebas en la función restar", () => {

        expect(restar(5, 3)).toBe(2);
    });


});