import { useState, ChangeEvent } from "react"
import "./style.css"

type Inputprops = {
    defaultValue: string
    onChange: (value: string) => void
}

export const Input = ({ defaultValue, onChange }: Inputprops) => {

    const [labelValue, setLabelValue] = useState('')
    const [inputValue, setInputValue] = useState(defaultValue)

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const val = event.target.value
        if (val.length > 32) {
            setLabelValue(`Слишком длинное значение. Длинна ${val.length}`)
        } else {
            setLabelValue('')
            setInputValue(val)
            onChange(val)
        }
    }

    return (
        <div className="input-field">
            <label htmlFor="input" data-testid="label">Введите заголовок</label>
            <input type="text"
                style={{ color: 'red' }}
                className="NewInput"
                title="inputDOM"
                id="input"
                value={inputValue}
                onChange={handleChange}
                placeholder="Заголовок" />
            <span >{labelValue}</span>
        </div>
    )
}