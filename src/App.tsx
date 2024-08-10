import { AddButton } from "./components/AddButton";
import { Input } from "./components/Input"
import { useState } from "react"

export const App = () => {

    const [inputValue, setInputValue] = useState('')

    const handleAddButtonClick = () => {
        console.log("Button clicked");

    }

    return (
        <div>
            <h1>Hello, World!</h1>
            <Input defaultValue={inputValue} onChange={(val) => setInputValue(val)} />
            <AddButton onClick={handleAddButtonClick} />
        </div>
    );
}