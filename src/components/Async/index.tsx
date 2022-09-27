import { useEffect, useState } from "react";

export function Async() {
    const [isButtonVisible, setIsbuttonVisible] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            setIsbuttonVisible(true)
        }, 1000)
    }, [])

    return (
        <div>
            <div>Hello World</div>
            { isButtonVisible && <button>Button</button> }
        </div>
    )
}