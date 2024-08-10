
type CustomMatcherResult = {
    pass: boolean
    message: () => void
}


export function toBeShorterThan(received: unknown, len: number): CustomMatcherResult {

    let pass = false

    if (typeof received === "string") {
        pass = received.length <= len
    } else {
        throw new Error("Можно сравнивать только строки")
    }

    return {
        pass,
        message() {
            pass ?
                () => `Длинна строки меньше или равна ${len}`
                : () => `Длинна строки больше ${len}`
        }
    }
}