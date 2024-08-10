type PropsButton = {

    onClick: () => void
}


export const AddButton = ({ onClick }: PropsButton) => {
    return (
        <button className="button" onClick={onClick}>Добавить</button>
    )
}