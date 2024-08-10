import { render, screen, prettyDOM } from "@testing-library/react"
import { AddButton } from "../src/components/AddButton"
import uE from "@testing-library/user-event"

describe("Кнопка добавить", () => {

    const userEvent = uE.setup()

    it.todo("блокировка для строки больше 32 символов")
    it.todo("блокировка для строки меньше 1 символа")

    it("Проверка кликов", async () => {
        const fn = jest.fn()
        render(<AddButton onClick={fn} />)
        const btn = screen.getByText("Добавить")

        await userEvent.pointer({ keys: '[MouseLeft][MouseLeft]', target: btn });

        expect(fn).toHaveBeenCalledTimes(2)
    })
})