export const MAX_lENGTH = 32
export const MESSAGE = "Длинна не более 32 символов"

export const validateLength = (test: string) => {
    return test.length <= MAX_lENGTH ? true : false
}