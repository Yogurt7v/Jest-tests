it("строгое сравнение значений", () => {
    // expect(1 + 2).toBe(4) // сравнение примитивов
    // expect(Object.is(1 + 2, 3)).toBe(true) // так работает под капотом toBe

    // expect(typeof 4).toBe("string")

    // expect({}).toBe({}) // false потому что ссылки разные
    // expect({}).toEqual({}) // true потому что значения одинаковые

    expect({ a: 1, b: undefined }).toStrictEqual({ a: 1 }) // false потому что значения не одинаковые




})