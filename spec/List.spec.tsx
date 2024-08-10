describe("Список задач", () => {
    it.todo("Список не может быть больше 10 невыполненых заданий")
    it.todo("При отсутвии задач выводится сообщение: Вы пока не создали ни одной задачи")

    it("в списке есть хотя бы один отмеченный как выполненный", async () => {

        expect([
            { label: "Задача 1", done: false },
            { label: "Задача 2", done: false },
            { label: "Задача 3", done: false },
            { label: "Задача 4", done: true },
            { label: "Задача 5", done: false },
            { label: "Задача 6", done: false },
            { label: "Задача 7", done: false },
            { label: "Задача 8", done: false },
            { label: "Задача 9", done: false },
            { label: "Задача 10", done: false },
        ]).toContainEqual(expect.toHaveDoneItem())
    }
    )
})