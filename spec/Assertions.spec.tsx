import { Input } from "../src/components/Input"
import { render, screen } from "@testing-library/react"
import { validateLength } from "../src/helpers/helper"

it("строгое сравнение значений", () => {
    // expect(1 + 2).toBe(4) // сравнение примитивов
    // expect(Object.is(1 + 2, 3)).toBe(true) // так работает под капотом toBe

    // expect(typeof 4).toBe("string")

    // expect({}).toBe({}) // false потому что ссылки разные
    // expect({}).toEqual({}) // true потому что значения одинаковые

    // expect({ a: 1, b: undefined }).toStrictEqual({ a: 1 }) // false потому что значения не одинаковые


    expect({}).toEqual({})

})

it("Проверка наличия значения", () => {
    const a = null
    // expect(a).toBeUndefined()
    // expect(a).toBeDefined()
    // expect(a).toBeNull()
    // expect(a).toBeNaN()
    // expect(a).toBeNaN()
})

it("проверка булевых значений", () => {
    const a = ""

    // expect(a).toBeTruthy()
    // expect(a).toBeFalsy()
})

it("Проверка математических сравнений", () => {
    const n = 99;

    // expect(n).toBeGreaterThan(101);
    // expect(n).toBeGreaterThanOrEqual(99)
    // expect(n).toBeLessThan(100)
    // expect(n).toBeLessThanOrEqual(99)
    expect(0.1 + 0.2).toBeCloseTo(0.3, 3)// 3- точность сравнения,3 цифры после запятой
})

it("Проверка функций", () => {

    const fn = jest.fn();
    // const fn = jest.fn(arg =>arg); // функция с аргументом и возвращаемым значением

    fn("test");
    // expect(fn).toHaveBeenCalled() // проверка вызова функции (вызвать функцию надо отдельно)
    // expect(fn).toHaveBeenCalledTimes(1) // проверка количества вызовов функции
    // expect(fn).toHaveBeenCalledWith("test") // проверка переданного аргумента
    // expect(fn).toHaveBeenLastCalledWith("test") // проверка последнего вызова функции с указанным аргументом

    // expect(fn).toHaveReturned() // проверка что функция завершилась
    // expect(fn).toHaveReturnedTimes(1) //  проверка количества возвратов функции
    // expect(fn).toHaveReturnedWith("test") // проверка что функция завершилась с указанным аргументом

})

it("сравнение объектов", () => {
    const a = { "c": 33 }

    // expect(a).toHaveProperty("a") // проверка наличия свойства
    // expect(a).toHaveProperty("a", 1) // проверка наличия свойства и его 
    // expect(a).toMatchObject({ "c": 33 }) // сравнение объектов необязательно все поля совпадают
})


it("сравнение массивов", () => {
    const arr: unknown[] = [, 2, 3, 4, 5]

    // expect(arr).toHaveLength(1) // проверка длинны массива
    // expect(arr).toContain(3) // проверка наличия элемента в массиве
    expect(arr).toContainEqual([2, 3, 4, 5]) // точное сравнение массивов
})

it("асинхронные проверки", async () => {
    const obj = {
        a: 1,
        name: {
            b: 2,
            c: [1, 2, 3],
            d: false
        },
        total: 0.1 + 0.3,
        friend: "test"
    }

    expect(obj).toEqual({
        a: expect.any(Number),
        // name: {
        //     b: expect.any(Number),
        //     // c: expect.any(Array),
        //     c: expect.arrayContaining([3]),
        //     d: expect.any(Boolean)// expect.anything()
        // },
        name: expect.objectContaining({ d: expect.any(Boolean) }),
        total: expect.closeTo(0.4, 0.01),
        friend: expect.stringContaining("es") // expect.stringMatching("es")
    })
})


it("Проверка DOM узлов", () => {
    const fn = jest.fn();
    const view = render(<Input defaultValue='' onChange={fn} />)

    const inputEl = screen.getByRole("textbox")

    const labelEl = screen.getByTestId("label")

    console.log(labelEl);

    // inputEl.focus() // фокус на DOM элементе  это к методу toHaveFocus

    // screen.debug() // показывает весь DOM

    // expect(inputEl).toBeInTheDocument()  // проверка наличия DOM элемента
    // expect(inputEl).toBeVisible() // проверка видимости DOM элемента
    // expect(inputEl).toBeDisabled() // проверка доступности DOM элемента
    // expect(inputEl).toBeEnabled() // проверка доступности DOM элемента
    // expect(inputEl).toHaveFocus() // проверка фокуса DOM элемента
    // expect(inputEl).toBeEmptyDOMElement() // проверка пустого DOM элемента (нет дочерних элементов)

    // expect(inputEl).toHaveAttribute("title", "inputDOM") // проверка атрибута DOM элемента
    // expect(inputEl).toHaveClass("NewInput") // проверка содержимого DOM элемента
    // expect(inputEl).toContainElement(labelEl) // проверка наличия DOM элемента внутри другого DOM элемента
    // expect(inputEl).toHaveValue("") // проверка значения DOM элемента
    // expect(inputEl).toHaveDisplayValue("") // проверка отображаемого значения DOM элемента
    // expect(inputEl).toHaveStyle({ color: "red" }) // проверка стиля DOM элемента
})


it("Модификаторы", async () => {
    expect(1 + 2).not.toBe(4) // не равно !!!
    const res = Promise.resolve("test resolved")
    const rej = Promise.reject(new Error("test rejected"))

    // промисы

    await expect(res).resolves.toBe("test resolved") // проверка промиса

    await expect(rej).rejects.toThrow("test rejected") // проверка промиса
})


it("Мокирование функции", () => {
    // const fn = jest.fn().mockReturnValue(1); //()=>void   mockReturnValue - задаём обязательное значение возвращаемое функцией

    // const context = { a: 1 }
    // fn(1, 2);
    // console.log(fn.mock);

    // fn.apply(context, [1, 2])
    // console.log(fn.mock);

    // fn(1, 2)

    // console.log(fn.mock);
    // fn.mockClear(); // очистка мока
    // console.log(fn.mock);

    // fn.mockReset(); // сброс мока даже инплементацию (формула функции в объявлении fn)
    // console.log(fn.mock);

    // const fn = jest.fn().mockImplementationOnce(() => 10); // mockImplementationOnce - задаём обязательное значение возвращаемое функцией которое вернётся лишь единожды
    // const fn2 = jest.fn().mockReturnValueOnce(11).mockReturnValue("forever")
    // console.log(fn2());
    // console.log(fn2());
    // console.log(fn2());
    // console.log(fn2());


    // const fn = jest.fn().mockResolvedValue("promise") //  задаём значение возвращаемое промисом
    // const fn = jest.fn().mockName("Теперь у нам функция имеет такое название")


    // const fn = jest.spyOn(console, "error") // используй за useState
    // fn.mockImplementation(() => 44)
    // console.error("Error")
    // console.log(fn.mock);
    // fn.mockRestore()

})

it.only("Мокирование модулей", () => {
    const res = validateLength("проверка примера")
    console.log("validateLength", res);

})