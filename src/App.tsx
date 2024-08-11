import { AddButton } from "./components/AddButton";
import { Input } from "./components/Input"
import { useState } from "react"
import { Notifier } from "./components/Notify"

export const App = () => {

    const [inputValue, setInputValue] = useState('')
    const [notifierOpen, setNotifierOpen] = useState(false)
    const handleAddButtonClick = () => {
        console.log("Button clicked");

    }

    const handleNotifierClosed = () => {
        setNotifierOpen(false)
    }

    return (
        <>
            <div>
                <h1>Hello, World!</h1>
                <Input defaultValue={inputValue} onChange={(val) => setInputValue(val)} />
                <AddButton onClick={handleAddButtonClick} />
                <Notifier open={notifierOpen} onClose={handleNotifierClosed} task="Проверка задачи" />
            </div>
            <button onClick={() => setNotifierOpen(true)}>Показать нотификацию</button>
        </>
    );
}