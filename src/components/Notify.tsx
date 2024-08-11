import { useEffect } from "react"

interface NotyProps {
    task: string
    open: boolean
    onClose: () => void
}

export const Notifier = ({ task, open, onClose }: NotyProps) => {

    useEffect(() => {
        let timerId: ReturnType<typeof setTimeout>
        if (open) {
            timerId = setTimeout(() => onClose(), 2000)
        }

        return () => clearTimeout(timerId)
    }, [open, onClose])

    if (!open) {
        return null;
    }

    return (
        <div className="blackout">
            <div className="notifier-wrappper">
                {`Задача выполнена ${task}`}
            </div>
        </div>
    )
}