type CustomMatcherResult = {
    pass: boolean
    message: () => void
}
export function toHaveDoneItem(received: { done: boolean }): CustomMatcherResult {

    if (typeof received !== "object") {
        throw new Error("Можно сравнивать только объекты")
    }
    let pass = received.done === true

    return {
        pass,
        message: () => pass ? "Есть выполненная задача" : "Нет выполненных задач"
    }
}