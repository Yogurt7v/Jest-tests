import { prettyDOM, screen, render } from '@testing-library/react'
import { Input } from '../src/components/Input'
import uE from '@testing-library/user-event'

describe("Поле ввода", () => {
    const userEvent = uE.setup({ delay: 100 })

    it("Оганичение на ввод более 32 символов", () => {
        expect("Привет").toBeShorterThan(32)

    })


    it("Поле доступно для ввода", async () => {
        const fn = jest.fn(val => console.log(val));

        render(<Input defaultValue='' onChange={fn} />)

        const input = screen.getByRole("textbox")

        await userEvent.clear(input)
        await userEvent.keyboard("Hey!")


        expect(fn).toHaveBeenCalledWith("Hey!")
    })
})