import { render, screen } from "@testing-library/react"
import { Notifier } from "../src/components/Notify"

jest.useFakeTimers() // можно перенести в основной файл сетапа

describe("Окно подтверждения", () => {
    it.todo("При выполнении задачи должно появиться окно оповещения")
    it.todo("На экране может быть только одно окно оповещения")
    it("оповещение должно автоматически закрываться через 2 секунды", async () => {

        const fn = jest.fn();
        // const timer = jest.spyOn(globalThis, "setTimeout") // проверям что таймаут вызывается
        render(<Notifier task="test" open={true} onClose={fn} />)

        jest.runAllTimers() // запускаем таймер
        // jest.advanceTimersByTime(2000) // сдвигает таймер
        jest.useRealTimers()

        expect(fn).toHaveBeenCalled()
        // expect(timer).toHaveBeenCalled() // проверям что таймаут вызывается

        jest.runOnlyPendingTimers() // запускаем только оставшийся таймер
    })
})