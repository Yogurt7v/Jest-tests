import { prettyDOM, screen, render } from '@testing-library/react'
import { Input } from '../src/components/Input'
import uE from '@testing-library/user-event'
import { validateLength } from '../src/helpers/helper'

// jest.mock("../src/helpers/helper.ts", () => {
//     const realHelpers = jest.requireActual("../src/helpers/helper.ts")
//     return {
//         ...realHelpers,
//         validateLength: jest.fn().mockReturnValue(false)
//     }
// })

describe("Поле ввода", () => {
    const userEvent = uE.setup() // {delay: 100}

    it("Оганичение на ввод более 32 символов", async () => {

        render(<Input defaultValue='' onChange={() => undefined} />)

        const input = screen.getByRole("textbox")
        const hintEL = screen.getByTestId("Text")

        await userEvent.clear(input)
        await userEvent.type(input, "Hey")

        expect(hintEL.innerHTML).not.toBe("")

    })


    it.skip("Поле доступно для ввода", async () => {
        const fn = jest.fn(val => console.log(val));

        render(<Input defaultValue='' onChange={fn} />)

        const input = screen.getByRole("textbox")

        await userEvent.clear(input)
        await userEvent.keyboard("Hey!")

        expect(fn).toHaveBeenCalledWith("Hey!")
    })
})